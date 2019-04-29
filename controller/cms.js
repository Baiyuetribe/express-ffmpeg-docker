var Movie = require("../models/movie")
var Category = require("../models/category")
var Portal = require("../models/portal")
var Image = require("../models/image")
var Article = require("../models/article")
var Setting = require("../models/setting")
var Push = require("../models/push")
var cache = require("../helper/rediscache")
var moment = require("moment")
var fs = require("fs")
var sharp = require("sharp")
var async = require("async")
var _ = require("underscore")
exports.index = function(req, res) {
  var perPage = 12
  async.parallel(
    {
      movies: function(callback) {
        Movie.find({ status: "finished" })
          .sort("-createAt")
          .limit(perPage)
          .exec(function(err, movies) {
            if (err) {
              console.log(err)
            }
            callback(null, movies)
          })
      },
      pushmovies: function(callback) {
        Push.find()
          .sort("-createAt")
          .limit(3)
          .populate("movieid")
          .exec(function(err, pushmovies) {
            if (err) {
              console.log(err)
            }
            callback(null, pushmovies)
          })
      },
      images: function(callback) {
        Image.find()
          .sort("-createAt")
          .limit(perPage)
          .exec(function(err, images) {
            if (err) {
              console.log(err)
            }
            callback(null, images)
          })
      },
      articles: function(callback) {
        Article.find()
          .sort("-createAt")
          .limit(perPage)
          .exec(function(err, articles) {
            if (err) {
              console.log(err)
            }
            callback(null, articles)
          })
      }
    },
    function(err, results) {
      if (err) {
        console.log(err)
      }
      var lists = []
      lists = lists.concat(results.movies, results.images, results.articles)
      lists = _.shuffle(lists)
      res.render(req.portal.theme + "/index", {
        portal: req.portal,
        lists: lists,
        pushmovies: results.pushmovies,
        user: req.session.leveluser
      })
    }
  )
}
exports.getmovies = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = 12
  Portal.find().exec(function(err, portals) {
    if (err) {
      console.log(err)
    }
    if (portals[0].kaiguan == "on") {
      Category.find().exec(function(err, categories) {
        if (err) {
          console.log(err)
        }
        Movie.find({ status: "finished" })
          .sort("-createAt")
          .limit(perPage)
          .skip(perPage * (page - 1))
          .exec(function(err, movies) {
            if (err) {
              console.log(err)
            }
            Movie.find({ status: "finished" }).count(function(err, count) {
              var length = movies.length
              var jiange = parseInt(perPage / 3)
              var results = []
              for (var i = 0; i < length; i = i + jiange) {
                results.push(movies.slice(i, i + jiange))
              }
              res.render(portals[0].theme + "/movies", {
                categories: categories,
                movies: results,
                page: page,
                user: req.session.leveluser,
                pages: Math.ceil(count / perPage),
                portal: portals[0]
              })
            })
          })
      })
    } else {
      res.status(404).send("对不起，页面不存在")
    }
  })
}

exports.getmovie = function(req, res) {
  var id = req.params.id
  Movie.findOne({ _id: id }).exec(function(err, movie) {
    if (err) {
      console.log(err)
    }
    if (!movie) {
      return res.status(404).send("视频不存在")
    }
    Category.find().exec(function(err, categories) {
      if (err) {
        console.log(err)
      }
      res.render(req.portal.theme + "/cmsmovie", {
        portal: req.portal,
        movie: movie,
        user: req.session.leveluser,
        categories: categories
      })
    })
  })
}

exports.getcategory = function(req, res) {
  var category = req.params.category
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = 12
  Category.find().exec(function(err, categories) {
    if (err) {
      console.log(err)
    }
    Movie.find({ status: "finished" })
      .where({ category: category })
      .sort("-createAt")
      .limit(perPage)
      .skip(perPage * (page - 1))
      .exec(function(err, movies) {
        if (err) {
          console.log(err)
        }
        if (movies.length == 0) {
          return res.status(404).send("该分类无内容")
        }
        Movie.find({ status: "finished", category: category }).count(function(
          err,
          count
        ) {
          var length = movies.length
          var jiange = parseInt(perPage / 3)
          var results = []
          for (var i = 0; i < length; i = i + jiange) {
            results.push(movies.slice(i, i + jiange))
          }
          res.render(req.portal.theme + "/movies", {
            categories: categories,
            movies: results,
            page: page,
            user: req.session.leveluser,
            currentcategory: category,
            pages: Math.ceil(count / perPage),
            portal: req.portal
          })
        })
      })
  })
}

exports.manager = function(req, res) {
  res.render("cmsmanager", {
    title: "cms管理系统页面"
  })
}

exports.cmsimages = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = 15
  Image.find()
    .sort("-createAt")
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, images) {
      if (err) {
        console.log(err)
      }
      Image.find().count(function(err, count) {
        if (err) {
          console.log(err)
        }
        res.render("cmsimages", {
          title: "cms图集管理",
          page: page,
          pages: Math.ceil(count / perPage),
          images: images
        })
      })
    })
}

exports.cmsarticles = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = 15
  Article.find()
    .sort("-createAt")
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, articles) {
      if (err) {
        console.log(err)
      }
      Article.find().count(function(err, count) {
        if (err) {
          console.log(err)
        }
        res.render("cmsarticles", {
          title: "cms图集管理",
          page: page,
          pages: Math.ceil(count / perPage),
          articles: articles
        })
      })
    })
}
exports.postarticles = function(req, res) {
  res.render("cmspostarticles", {
    title: "发布文章"
  })
}
exports.dopostarticles = function(req, res) {
  var title = req.body.title
  var content = req.body["editormd-html-code"][1]
  var contentmd = req.body["editormd-html-code"][0]
  var articleobj = {
    title: title,
    content: content,
    contentmd: contentmd
  }
  var newaritcle = new Article(articleobj)
  newaritcle.save(function(err) {
    if (err) {
      console.log(err)
    }
    res.redirect("/cms/articles")
  })
}
exports.uploadimage = function(req, res) {
  var url = "/uploads/" + req.file.filename
  res.json({
    success: 1,
    message: "上传图片成功！",
    url: url
  })
}
exports.postimages = function(req, res) {
  res.render("cmspostimages", {
    title: "发布图集"
  })
}
exports.dopostimages = function(req, res) {
  var title = req.body.title
  var images = []
  images = images.concat(req.body.images)
  var poster = req.body.poster
  if (!poster) {
    poster = images[0]
  }
  var imageobj = {
    title: title
  }
  var image = new Image(imageobj)
  image.save(function(err, image) {
    if (err) {
      console.log(err)
    }
    var path = "./public/images/" + image._id
    var filepath = "/images/" + image._id
    fs.exists(path, function(exists) {
      if (!exists) {
        fs.mkdir(path, function(err) {
          if (err) {
            console.log(err)
          }
          var newimages = []
          for (let index = 0; index < images.length; index++) {
            var imagearr = images[index].split(".")
            var houzhui = imagearr[imagearr.length - 1]
            var des = path + "/" + index + "." + houzhui
            var src = filepath + "/" + index + "." + houzhui
            fs.renameSync(images[index], des)
            if (images[index] == poster) {
              sharp(des)
                .resize(400, 300)
                .toFile(path + "/poster.jpg", function(err) {
                  if (err) {
                    console.log(err)
                  }
                })
            }
            newimages.push(src)
          }
          image.images = newimages
          image.poster = filepath + "/poster.jpg"
          image.save(function(err) {
            if (err) {
              console.log(err)
            }
            res.redirect("/cms/images")
          })
        })
      }
    })
  })
}
exports.imagesupload = function(req, res) {
  res.json({
    code: 0,
    image: "/images/" + req.file.originalname,
    imagepath: "./public/images/" + req.file.originalname
  })
}
exports.getimages = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = 12
  Image.find()
    .sort("-createAt")
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, images) {
      if (err) {
        console.log(err)
      }
      Image.find().count(function(err, count) {
        if (err) {
          console.log(err)
        }
        res.render(req.portal.theme + "/images", {
          title: req.portal.imagestitle,
          images: images,
          page: page,
          user: req.session.leveluser,
          pages: Math.ceil(count / perPage),
          portal: req.portal
        })
      })
    })
}
exports.getarticles = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = 12
  Article.find()
    .sort("-createAt")
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, articles) {
      if (err) {
        console.log(err)
      }
      Article.find().count(function(err, count) {
        if (err) {
          console.log(err)
        }
        res.render(req.portal.theme + "/articles", {
          title: req.portal.articlestitle,
          articles: articles,
          page: page,
          user: req.session.leveluser,
          pages: Math.ceil(count / perPage),
          portal: req.portal
        })
      })
    })
}
exports.getimage = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var id = req.params.id
  Image.findOne({ _id: id }).exec(function(err, image) {
    if (err) {
      console.log(err)
    }
    var length = image.images.length
    if (parseInt(page) > length) {
      page = length
    }
    Image.find()
      .sort("-createAt")
      .limit(4)
      .exec(function(err, newimages) {
        if (err) {
          console.log(err)
        }
        res.render(req.portal.theme + "/image", {
          title: image.title,
          page: page,
          image: image.images[page - 1],
          length: length,
          user: req.session.leveluser,
          newimages: newimages,
          portal: req.portal
        })
      })
  })
}
exports.getarticle = function(req, res) {
  var id = req.params.id
  Article.findOne({ _id: id }).exec(function(err, article) {
    if (err) {
      console.log(err)
    }
    res.render(req.portal.theme + "/article", {
      title: article.title,
      article: article,
      user: req.session.leveluser,
      data: moment(article.createAt).format("YYYY年MM月DD日, HH:mm:ss"),
      portal: req.portal
    })
  })
}
exports.deleteimage = function(req, res) {
  var id = req.query.id
  Image.findOne({ _id: id }).exec(function(err, image) {
    if (err) {
      console.log(err)
    }
    image.remove(function(err) {
      if (err) {
        console.log(err)
      }
      deleteall("./public/images/" + image._id)
      res.json({ success: 1 })
    })
  })
}
exports.deletearticle = function(req, res) {
  var id = req.query.id
  Article.findOne({ _id: id }).exec(function(err, article) {
    if (err) {
      console.log(err)
    }
    article.remove(function(err) {
      if (err) {
        console.log(err)
      }
      res.json({ success: 1 })
    })
  })
}
exports.editarticle = function(req, res) {
  var id = req.params.id
  Article.findOne({ _id: id }).exec(function(err, article) {
    if (err) {
      console.log(err)
    }
    res.render("editarticle", {
      title: "编辑文章",
      article: article
    })
  })
}
exports.posteditarticle = function(req, res) {
  var id = req.params.id
  var title = req.body.title
  var content = req.body["editormd-html-code"][1]
  var contentmd = req.body["editormd-html-code"][0]
  Article.findOne({ _id: id }).exec(function(err, article) {
    if (err) {
      console.log(err)
    }
    article.title = title
    article.content = content
    article.contentmd = contentmd
    article.save(function(err) {
      if (err) {
        console.log(err)
      }
      res.redirect("/cms/articles")
    })
  })
}
exports.apigetindex = function(req, res) {
  var perPage = req.query.counts > 0 ? req.query.counts * 1 : 20
  async.parallel(
    {
      movies: function(callback) {
        Movie.find({ status: "finished" })
          .sort("-createAt")
          .limit(perPage)
          .exec(function(err, movies) {
            if (err) {
              callback(err, null)
            }
            callback(null, movies)
          })
      },
      pushmovies: function(callback) {
        Push.find()
          .sort("-createAt")
          .limit(6)
          .populate("movieid")
          .exec(function(err, pushmovies) {
            if (err) {
              callback(err, null)
            }
            callback(null, pushmovies)
          })
      }
    },
    function(err, results) {
      if (err) {
        return res.json({
          error: err
        })
      }
      res.json({
        movies: results.movies,
        pushmovies: results.pushmovies
      })
    }
  )
}
exports.apigetmovies = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = req.query.counts > 0 ? req.query.counts * 1 : 20
  var sort = req.query.sort ? req.query.sort : "newtime"
  var sortquery = ""
  if (sort == "hot") {
    sortquery = "-count"
  } else if (sort == "nothot") {
    sortquery = "count"
  } else if (sort == "newtime") {
    sortquery = "-createAt"
  } else if (sort == "oldtime") {
    sortquery = "createAt"
  }
  Movie.find({ status: "finished" })
    .sort(sortquery)
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, movies) {
      if (err) {
        console.log(err)
      }
      res.json({
        movies: movies
      })
    })
}
exports.apigetplay = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = req.query.counts > 0 ? req.query.counts * 1 : 20
  var id = req.query.id
  async.parallel(
    {
      movies: function(callback) {
        Movie.find({ status: "finished" })
          .sort("-count")
          .limit(perPage)
          .skip(perPage * (page - 1))
          .exec(function(err, movies) {
            if (err) {
              callback(err, null)
            }
            callback(null, movies)
          })
      },
      movie: function(callback) {
        Movie.findOne({ _id: id }).exec(function(err, movie) {
          if (err) {
            callback(err, null)
          }
          callback(null, movie)
        })
      },
      token: function(callback) {
        cache.getTokenByRedis(function(err, token) {
          if (err) {
            callback(err, null)
          }
          callback(null, token)
        })
      }
    },
    function(err, results) {
      if (err) {
        return res.json({
          error: err
        })
      }
      var m3u8 = "/videos/" + id + "/index.m3u8"
      res.json({
        movies: results.movies,
        m3u8: m3u8,
        movie: results.movie,
        token: results.token
      })
    }
  )
}
exports.apigetmoviestab = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = req.query.counts > 0 ? req.query.counts * 1 : 20
  var sort = req.query.sort ? req.query.sort : "newtime"
  var tab = req.query.tab ? req.query.tab : "all"
  var query = {}
  if (tab == "all") {
    query = { status: "finished" }
  } else {
    query = { status: "finished", category: tab }
  }
  var sortquery = ""
  if (sort == "hot") {
    sortquery = "-count"
  } else if (sort == "nothot") {
    sortquery = "count"
  } else if (sort == "newtime") {
    sortquery = "-createAt"
  } else if (sort == "oldtime") {
    sortquery = "createAt"
  }
  async.parallel(
    {
      movies: function(callback) {
        Movie.find(query)
          .sort(sortquery)
          .limit(perPage)
          .skip(perPage * (page - 1))
          .exec(function(err, movies) {
            if (err) {
              callback(err, null)
            }
            callback(null, movies)
          })
      },
      tabs: function(callback) {
        Category.find().exec(function(err, tabs) {
          if (err) {
            callback(err, null)
          }
          callback(null, tabs)
        })
      }
    },
    function(err, results) {
      if (err) {
        return res.json({
          error: err
        })
      }
      res.json({
        movies: results.movies,
        tabs: results.tabs
      })
    }
  )
}
exports.apigetsearch = function(req, res) {
  var page = req.query.page > 0 ? req.query.page : 1
  var perPage = req.query.counts > 0 ? req.query.counts * 1 : 20
  var q = req.query.q.length > 0 ? req.query.q : ""
  var reg = new RegExp(q, "i")
  Movie.find({ originalname: reg })
    .sort("-createAt")
    .limit(perPage)
    .skip(perPage * (page - 1))
    .exec(function(err, movies) {
      if (err) {
        res.json({
          error: err,
          movies: null
        })
      }
      res.json({
        movies: movies
      })
    })
}
exports.apigetm3u8 = function(req, res) {
  var refer = req.headers.referer
  var agent = req.headers["user-agent"]
  if (!refer || !agent) {
    return res.status(404).send("错误页面")
  }
  var q = req.query.q
  var req = new RegExp(q, "i")
  var m3u8 = []
  if (q.length > 0) {
    async.parallel(
      {
        setting: function(callback) {
          Setting.find().exec(function(err, setting) {
            if (err) {
              console.log(err)
            }
            callback(null, setting[0])
          })
        },
        movies: function(callback) {
          Movie.find({ originalname: req }).exec(function(err, movies) {
            if (err) {
              console.log(err)
            }
            callback(null, movies)
          })
        },
        token: function(callback) {
          cache.getTokenByRedis(function(err, token) {
            if (err) {
              console.log(err)
            }
            callback(null, token)
          })
        }
      },
      function(err, results) {
        if (err) {
          console.log(err)
        }
        results.movies.forEach((movie, index) => {
          var them3u8 =
            results.setting.host +
            "/videos/" +
            movie._id +
            "/index.m3u8?token=" +
            results.token
          m3u8.push(them3u8)
        })
        res.json({
          m3u8: m3u8
        })
      }
    )
  }
}
function deleteall(path) {
  var files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(function(file, index) {
      var curPath = path + "/" + file
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteall(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}
