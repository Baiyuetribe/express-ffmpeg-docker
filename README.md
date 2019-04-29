# 自带 CMS 系统的云转码系统，一体化自动发布云转码 cms 系统

## 社区
官方合作社区:[合作社区](https://www.iqi360.com/category/5c386b74467870259b23b2e4)
大量ffmpeg尖端技术分享，集群转码，多线程转码，使用窍门，有问题可以在社区提问，别在码云里边提问了。
承接cms开发,云转码定制,app开发对接,如果有需要可以发送需求到邮箱bted2k@gmail.com。

## 公告申明
开源版源码暂时稳定，短期内不会再添加功能了，对于一般的用户来说，功能够用了。

## 开发计划
我想象中的云转码应该是一个总控系统，后台可以无限的添加转码机器，最终将是一个无限扩容的云转码，一个真正的云转码，所以现在我正在做一个这么个东西，后台可以无限添加转码机器，并且一个总控控制所有机器，所有转码内容集成在总控中，配合总控的高级CMS，配合用户上传，甚至可以做出来真正的网盘系统。有兴趣可以联系我，给与意见或者预约。
- **多媒体网盘转码系统+云转码总控系统** 讨论和建议、预约等：[总控系统开发进度](https://www.iqi360.com/topic/5c45a35b46eeb073833e357d)
- **超级纯净版theone ffmpeg视频转码切片系统，企业级框架egg.js编写完成:** [theone ffmpeg](https://www.iqi360.com/topic/5c81375cac599a7c35b49e03)
- **对接高级版原生app进度** 
[在线视频app项目](https://www.iqi360.com/topic/5c9b98f6ac599a7c35b49e6a)

### 高级云转码+CMS，用户组展示
- 高级cms更新情况：[高级云转码更新](https://www.iqi360.com/topic/5c53f9e8ac599a7c35b49d7c)
- 后台直接设置跑马灯显示广告，显示时长，每隔多少秒出现一次，完全不需要复杂的任何操作，后台直接操作，随时更改，并且可以根据多分辨率自动生成匹配的大小。
- 配合高级CMS和高级用户组功能，可以设置用户组观看分辨率权限，并且前台可以设置用户推广链接，根据推广IP增加积分，进而升级用户组解锁高级分辨率。
- 非常适合做社群分享，病毒式传播。
- 新增超级截图功能，比原来截图功能快了100倍（毫无夸张），只需要1秒即可截图5张，高级功能。
- 视频页全部数据redis缓存，数据存入内存，打开速度拔尖。
- 标签化深度SEO，SEO效果优秀。
- 新增截取视频片段生成gif动态图，后台配置截取开始和时长，尺寸，转码时自动合成gif动态图。
![多码率版本](https://images.gitee.com/uploads/images/2019/0105/133235_a12c7730_145248.png "0A1D7F1D-D33F-45C6-94E3-344065B6FF20.png")
![跑马灯展示](https://images.gitee.com/uploads/images/2019/0105/133251_55aeb185_145248.png "F201CE69-4F63-43FD-AB8B-13264D303E9D.png")
![切换分辨率](https://images.gitee.com/uploads/images/2019/0106/215206_c7877571_145248.png "屏幕快照 2019-01-06 下午9.49.00.png")
![权限提示](https://images.gitee.com/uploads/images/2019/0106/215221_a230a020_145248.png "屏幕快照 2019-01-06 下午9.49.15.png")
![用户中心](https://images.gitee.com/uploads/images/2019/0106/215248_e36aa294_145248.png "在这里输入图片标题")
![用户组管理](https://images.gitee.com/uploads/images/2019/0106/215316_3ea5fbb1_145248.png "屏幕快照 2019-01-06 下午9.49.59.png")
![添加用户组](https://images.gitee.com/uploads/images/2019/0106/215332_7cf55b48_145248.png "屏幕快照 2019-01-06 下午9.50.10.png")

### 实测多码率转码mp4大小对照
测试用视频4000mb，转码以后，240p为175mb，360p为220mb，480p为265mb，720p为450mb，1080p为820mb。仅供参考，跟视频相关性较大。

### 最新多端视频套件正式发布

#### 套件图示：

![视频多端套件](https://images.gitee.com/uploads/images/2018/1023/175945_1be1e689_145248.jpeg "未标题-1.jpg")

##### 涉及源码：

- express-ffmpeg: [https://gitee.com/quazero/express-ffmpeg](https://gitee.com/quazero/express-ffmpeg)
- cdn-manager: [https://gitee.com/quazero/cdn-manager](https://gitee.com/quazero/cdn-manager)

##### 演示链接：

- 高级cms演示请联系bted2k@gmail.com
- cdn 处理演示：
- 原图片：https://www.moejj.com/videos/5bc721ef87af60065e31735e/1.jpg 1280\*720
- cdn 处理图片：https://cdn.moejj.com/poster/videos/5bc721ef87af60065e31735e/1.jpg 400\*300jpg 质量 90%
- APP 正式上线，安卓测试版本下载地址：https://share.weiyun.com/5IDKG3V
- app 演示视频：https://www.moejj.com/movie/5bd48a7e46321d4473b857e3
- linux通用ubuntu16.04+，centos7，Debian 8+一键傻瓜安装脚本地址：https://www.iqi360.com/topic/5c431edf46eeb073833e356c 由萌鼠博客https://www.moerats.com  博主制作，收取少量脚本编写费用，支持萌鼠博客运营，支持正版。

##### 说明

- 云转码 express-ffmpeg 配合 高级版 CMS 可以做成非常高级的功能，比如这个正在运营的百萌电影预告片网，利用标签整合，可以把 SEO 效果做到最大化。
- app 采用 react-native 编写，多端共用一套源码，构建出来的 APP 本身就是原生APP，并非H5app完全不是一个档次，稳定60 帧的完美原生 APP 体验。

### 2018 年 9 月 4 日大更新

这次完全更改了项目了定位，云转码不再是简单的云转码系统，而是 CMS 系统+云转码系统一体化，自带整个完备的并且对移动端友好的，而且非常利于 SEO 优化的自适应 CMS 系统，根据后台的分类系统和门户 CMS 管理系统，直接在首页达成完备的在线视频播放系统，适用于在线教育、企业内部培训视频、在线视频自媒体门户等多种运用方向。这次更新完善了视频的分类系统，完善了视频的搜索功能。CMS 现在集成有视频发布，文章发布和图集发布三个功能。

### 增加会员系统

增加会员系统，可以不开启 CMS，独立开启会员系统，双向验证，安全可靠，后台可以配合卡劵生成，前台用户使用卡劵进行升级。

### 真正意义上的权限系统

**路由层面的权限系统**，非网上的播放器假权限，根据权限不同，相同的 M3U8 播放文件返回不同的内容，比如普通会员只能播放 3 分钟，就只会返回 3 分钟的切片内容，升级之后才会返回完整的切片内容。

### 卡劵系统

后台设定卡劵生成，可以设置开通会员时间，用户前台使用即可升级到对应的会员，到期之后权限失效，需要重新开通，如果连续使用则是累加会员时间。

#### 项目介绍

主要实现功能：
一、视频批量上传，视频分块上传。
二、视频批量转码并且切片，切片完成删除原视频文件。
三、视频批量添加水印。
四、一键获取分享链接，防盗链设置，只允许指定域名 ifream 调用，token 防盗链等。
五、自带完备的 CMS 系统。

- 官网地址：[https://ffmpeg.moejj.com](https://ffmpeg.moejj.com)
- 演示站：[https://www.moejj.com](https://www.moejj.com)
- 云转码专用 CMS：[https://cms.moejj.com](https://cms.moejj.com)
- 目前码云的安装教程是最正确的，安装请参照码云的安装教程。

本开源项目采用 nodejs、expressjs、mongodb 开发。
使用前请安装 ffmpeg。

#### 软件架构

nodejs v8.7.0 版本
expressjs 4.16.0 版本
mongoDb
ffmpeg 3.4.1 版本
Linux 系统上运行完美。

#### 安装教程

##### 自己编译

1. 安装 ffmpeg
   Ubuntu16.04 安装方法：

```
sudo add-apt-repository ppa:djcj/hybrid
sudo apt-get update
sudo apt-get install ffmpeg
```

然后输入 ffmpeg 和 ffprobe 查看是否安装成功。

2. 安装 nodejs、expessjs、mongodb、redis 环境。
   详情见：[express+nodejs+redis+mongodb+pm2+nginx 环境部署安装，生产环境及开发环境部署](http://blog.sina.com.cn/s/blog_13e807ed00102wlxo.html)

3. node ./bin/www
   访问 localhost:3000/server
   登陆账号密码在/config/auth.js 中设置

4. ffmpeg 烧录字幕的时候会查找字体配置文件，/etc/fonts，如果里边没有 fonts.conf，请将本源码中 fonts.conf 上传到/etc/fonts，有些 linux 系统没有中文字体支持，请将 msyh.ttf 上传至/usr/share/fonts 里边。

##### 利用 sh 文件安装

- ./install.sh 使用前请给予权限。(已经弃用，请前往官网按步骤安装)

#### 使用说明

1. 创建/config 文件夹并在里边创建 auth.js 文件
   代码如下：

```
module.exports = {
    user: "username",
    password: "password",
    db: "dbname",
    dbuser: "dbuser",
    dbpassword: "dbpassword",
    secret: "yoursecret",
    login: "/adminloginurl",
    loginmsg: "404 Not Found"
};
```

**注意：**很多用户安装出错就在这里，比很早的版本多了三个设置项，secret 是 session 需要的秘钥，login 是后台登陆地址，loginmsg 是后台未登录显示的内容，默认是 404。

2. 登陆后台之后请立刻在设置中进行设置。
3. 上传视频即可上传视频。
4. 转码页面一键转码。
5. 支持后台字幕上传，名称与视频名一致，则系统会自动烧录字幕。例如：aaa.mp4，则 srt 字幕名为 aaa.srt。
6. 支持一键入库，利用 ftp 等工具将视频上传至 movies 文件夹，后台可以一键入库，进行转码切片操作。
7. 秒切功能，开启之后，无需进行转码的视频会直接切片。（后台可设置）

#### 版本

##### V5.2 版本

- app 和 cms 已经上线，专用 app，跨平台构建，原生 APP 体验。
- 更改分发配置为随机模式，随机添加前缀到 ts 文件。
- 为队列转码添加一些参数，更加完善。
- 修复一个读取元数据失败进程消失的 bug，以后出现元数据错误会直接跳过。

##### V5.1 版本

- 更新最新的有用的 p2p 模块，参照https://github.com/cdnbye/hlsjs-p2p-engine进行配置
- 对接 CMS 和 APP 完成，demo 正在制作中。

##### V5 版本

- 增加后台登陆地址修改功能，增加后台访问提示信息功能。
- 增加视频总量和未完成、完成的统计功能。
- 增加大量 API，为 APP 做准备，APP 已经出了原型，最近会放出 demo 安装包。
- APP 和新型超级 CMS 正在配套完善中。
- express-ffmpeg 进化成为跨平台多端产品。

##### V4.3 版本

- 增加批量切片头的功能，选择视频，设置时间轴，一键切片头，利用速度最快的参数，秒切片头。
- 增加 m3u8 开放浏览功能，设置里边删除 key，则 m3u8 开放浏览，可以分享到任何播放器进行播放，如果设置了 key，则可以使用 m3u8api 调用，安全性更高。
- 修复转码切片核心源码中的一个 bug，此 bug 会导致切片时候之后转码也会失败，推荐更新。

##### V4.2 版本

- 更新了上传封面功能，可以独立为视频上传封面，没有上传封面就会使用截图做封面。
- 增加了 M3U8 的 api 功能，直接填入需要输入 m3u8 的地方就可以直接调用 m3u8，此 api 仅支持 H5 播放器，ckplayer 等 flash 播放器不支持，并且需要 nginx 的正确配置。
- 引入 redis 缓存机制，有些页面需要大量计算的地方，通过 redis 缓存速度大增，后期可以为分布式做准备。
- CMS 首页更改为 2 列排序，手机上的效果更好。
- 因为 bootcss 的 CDN 爆炸，已经把所有 cdn 上的 JS 和 css 全部更改为本地。

##### V4.1 版本

- 优化分类引用防盗链控制的逻辑，增加单分类开放浏览的选项。
- 优化后台视频管理数量选择，和一键批量修改。
- 后台增加设置选项，设置引用盗链跳转链接。
- 图集页展示更加完美。

##### V4 版本

- 大更新，CMS 怎么能没有图集发布和文章发布，这次更新增加图集和文章发布的完整支持。
- 图集发布，一键上传图片，一键完成封面截图，一键前端展示，点击翻页。
- 文章发布，集成 editor.md，markdown 编辑器，极其完美的书写体验。
- 增加分类编辑，编辑中可以针对分类添加防引用盗链，盗链功能颗粒化管理。
- 电影管理页，增加一键修改所有电影分类的功能。
- 增加播放器文字水印广告背景色和背景透明度设置。
- 完全重写分享页面的代码，速度更快。

##### V3.2 版本

- 增加播放器进度条预览效果，鼠标移动到进度条会显示对应时间轴的预览图。
- 增加后台设置 TS 加密，设置加密之后，切片文件 TS 会全部加密。
- Ts 加密高级特性，每一个视频都对应一个独立的 KEY 文件，安全性大涨。
  ![输入图片说明](https://images.gitee.com/uploads/images/2018/0920/212642_dc2f0ad0_145248.png "屏幕快照 2018-09-20 下午7.22.39.png")
  ![输入图片说明](https://images.gitee.com/uploads/images/2018/0920/212650_285c80e9_145248.png "屏幕快照 2018-09-20 下午9.21.22.png")

##### V3.1 版本

- 增加队列转码功能，先上传的先转码，循环处理，转码失败会自动跳过
- 增加后台统计代码功能，可以添加第三方统计代码，分享链接和 CMS 单独设置
- 修复会员开通卡劵之后，m3u8 浏览器缓存问题

##### V3 版本

- 市面上唯一的路由层面的权限控制
- 完备可扩展的会员系统
- VIP 卡劵后台一键生成
- **根据权限不同，相同 M3u8 文件动态生成不同的内容**

##### V2.1 版本

- 增加防盗链域名多域名支持
- 针对手机 QQ 浏览器优化，支持显示播放器水印广告和文字链接广告
- 增加图表统计页面，炫酷图表统计和表格统计。
- 增加 P2P 功能，待测试效果。

##### V2 版本：

- 大更新，增加门户 CMS 设置，内嵌 CMS 系统
- 增加播放器配置
- 播放器图片水印和文字广告
- 播放页面完全自定义图片水印和文字广告

##### V1.5 版本：

- 完全重构 ffmpeg 相关的所有代码。
- 将转码和切片合并成一次操作，提升双倍效率，原来是转码成 mp4，然后再 mp4 切片。
- 完全重写切片代码，秒切的速度提升超过 10 倍，1G 视频切片完成只需要半分钟。

##### V1.4 版本：

- 增加了 1080P 的选项。
- 增加切片 ts 域名分发，负载均衡的功能。
- 开启域名分发，数台服务器同步切片内容，访问 m3u8 动态生成循环域名切片前缀。

##### v1.3 版本：

- 更改播放器为 Dplayer 播放。
- 增加 VTT 字幕支持，后台可以给视频分别上传 vtt 字幕，前台播放会自动加载，支持了字幕和视频分开。
- 增加一个 webtorrent 功能（测试玩），地址：yourdomain/playmagnet。

##### v1.2 版本：

- 增加批量烧录字幕功能，支持 srt 字幕，改成和视频名一样，系统在转码的时候会自动把字幕烧录进去。如果存在 srt 字幕文件，则对应电影无论是否设置秒切都会进行转码。
- 增加批量入库功能，利用 ftp 或者其他工具将视频传至 movies 文件夹，在后台即可一键入库。
- 增加秒切功能，后台设置开启，即视频如果小于设置的分辨率并且编码为 h264 则会跳过转码直接切片。
- 增加自动生成截图功能，默认 4 张截图，路径 yourdomain/videos/:id/(1|2|3|4).jpg。

##### v1.1 版本：

- 批量上传视频，大文件切片上传。
- 批量转码并切片。
- 设置防盗链和分辨率，添加水印，一气呵成。

#### 截图

![图集展示](https://images.gitee.com/uploads/images/2018/0927/104338_617a2992_145248.jpeg "FireShot Capture 5 - 热血动漫角色大集合 I 新的在线教育 - http___localhost_3000_image_5baa513d0046647562fb1e0c_1.jpg")
![文章列表](https://images.gitee.com/uploads/images/2018/0925/232417_da13c156_145248.png "FireShot Capture 1 - 文章 - 新的在线教育 - http___localhost_3000_articles.png")
![图集](https://images.gitee.com/uploads/images/2018/0925/233414_4ffade89_145248.jpeg "FireShot Capture 2 - 图集 - 新的在线教育 - http___localhost_3000_imageslist.jpg")
![视频](https://images.gitee.com/uploads/images/2018/0925/233446_1f357ab5_145248.jpeg "FireShot Capture 3 - 新的在线教育 - http___localhost_3000_.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0904/192833_58d6b693_145248.jpeg "FireShot Capture 3 - 在线教育，美丽人生 - http___localhost_3000_.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0904/192842_6a95e52a_145248.jpeg "FireShot Capture 4 - 门户cms设置 - http___localhost_3000_admin_portal.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0904/192851_cfc5123c_145248.jpeg "FireShot Capture 5 - 分类管理 - http___localhost_3000_admin_categories.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0904/192907_42fa526f_145248.jpeg "FireShot Capture 6 - 全部电影库 - http___localhost_3000_admin_movies.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0904/192931_5918d089_145248.jpeg "FireShot Capture 8 - [喵萌奶茶屋][繁体中文][与僧侣交合的色欲之_ - http___localhost_3000_movie_5b8e49643c3ee95a185469a7.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0915/092922_4ab46535_145248.jpeg "屏幕快照 2018-09-15 上午9.26.56.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0915/092907_0ce6f5d8_145248.jpeg "屏幕快照 2018-09-15 上午9.26.48.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0915/092858_2ba6278d_145248.jpeg "屏幕快照 2018-09-15 上午9.26.38.jpg")
![图表统计](https://images.gitee.com/uploads/images/2018/0913/144939_3ba18b3c_145248.jpeg "屏幕快照 2018-09-13 下午2.46.55.jpg")
![输入图片说明](https://images.gitee.com/uploads/images/2018/0910/120203_ea18551d_145248.png "播放器设置 - http___localhost_3000_admin_bofangqi.png")
![ts文件域名分发](https://images.gitee.com/uploads/images/2018/0731/102414_be8e1a72_145248.jpeg "屏幕快照 2018-07-31 上午10.18.51.jpg")
![上传截图](https://gitee.com/uploads/images/2018/0606/185630_b769b67c_145248.jpeg "屏幕快照 2018-06-06 下午6.55.28.jpg")
![设置](https://images.gitee.com/uploads/images/2018/0731/102525_c3f5c8ae_145248.jpeg "屏幕快照 2018-07-31 上午10.18.37.jpg")
