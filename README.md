# bingbing-x.github.io

个人主页源码，部署在 GitHub Pages：<https://bingbing-x.github.io>

## 怎么更新内容

**绝大多数情况下，你只需要改一个文件：[`_data/site.yml`](_data/site.yml)。**

这个文件里放着主页的全部内容——个人信息、About、News、经历、论文、奖项、
科研项目、学术服务。四个页面会自动读取它并渲染。改完提交推送，
GitHub Pages 约 1 分钟后自动生效，不需要在本地安装或构建任何东西。

```bash
git add _data/site.yml
git commit -m "Add NeurIPS 2027 paper"
git push
```

### 加一篇论文

在 `_data/site.yml` 的 `publications:` 下面加一段（放在哪都行，页面会自动归组排序）：

```yaml
  - title: 论文标题
    topic: llm                                # 必填，决定归到哪个方向，取值见 topics
    url: https://arxiv.org/abs/xxxx.xxxxx    # 标题的跳转链接，可省略
    authors: "张三, **Bingbing Xu**, 李四"    # 用 ** ** 括住自己的名字
    venue: NeurIPS 2027
    year: 2027                                # 必填，组内按年份倒序
    type: C                                   # C=会议 J=期刊 P=预印本
    meta: New Orleans, USA; CCF-A             # 可省略
    links:                                    # 可省略
      - name: Paper
        url: https://arxiv.org/abs/xxxx.xxxxx
      - name: Code
        url: https://github.com/...
```

Publications 页按研究方向分组，分组的顺序和显示名由 `_data/site.yml` 里的
`topics:` 决定。要新增一个方向，在 `topics:` 里加一行，再给论文写上对应的
`topic` 即可。同一组内已发表的排在前面，预印本排在最后。

### 让一篇论文出现在首页的「Selected Publications」

首页只展示标了 `featured: true` 的论文，用大卡片形式（配图 + 会议徽章 + 一句话介绍），
按 `featured_rank` 从小到大排（1 最新）。完整列表在 Publications 页。

```yaml
    featured: true
    featured_rank: 1                          # 首页排序，越小越靠前
    badge: NeurIPS 2027                       # 卡片左上角的徽章
    image: my-paper-fig.png                   # 配图，放在 static/uploads/covers/
    tldr: 一句话说明这篇工作解决了什么问题。
```

**配图可以先不放。** 没有 `image` 时，卡片会自动显示一个印着会议名的排版块，
不会出现破图。以后把图丢进 `static/uploads/covers/` 再填上文件名即可。

当前代表作的配图都是从论文 PDF 里截的方法图（或主结果图），白底 PNG，
宽度不超过 1400px。卡片上的图可以点击查看原图。要换图的话，截图后存成
白底 PNG 放进 `static/uploads/covers/`，改掉 `image:` 即可。

### 加一条 News

```yaml
news:
  - date: 2027-01
    kind: paper                               # paper / award / talk / service / misc
    text: 'One paper accepted at <strong>NeurIPS 2027</strong>.'
```

`kind` 决定时间线上标记点的颜色：论文青绿、获奖金色、学术服务紫色、其他灰色。
首页只显示最新 5 条，完整列表在 News 页。

### 放头像

把照片放进 `static/homepage/images/`，然后在 `_data/site.yml` 里填文件名：

```yaml
  photo: avatar.jpg
```

留空时侧栏会显示姓名首字母的占位方块。当前用的是 `avatar.jpg`（560×560，
从原图裁的正方形半身构图）。换照片时建议也裁成正方形、400×400 以上，
否则小尺寸下人物会偏小或被裁到。

### 增删页面标签

改 [`_data/nav.yml`](_data/nav.yml)。`url` 要和页面文件里 front matter 的
`permalink` 保持一致。

### 开启访问统计

`analytics_id:` 留空时，页面不加载任何跟踪脚本。填入你自己的 Google Analytics
ID（形如 `G-XXXXXXXXXX`）即可启用。

## 目录结构

```
_data/site.yml          ← 全部内容都在这里，日常只改这个
_data/nav.yml           顶部导航标签
_config.yml             站点配置（标题、URL）

index.html              首页：About + 代表作卡片 + 最新 News
publications.html       完整论文列表，按研究方向分组
news.html               完整 News 时间线
cv.html                 经历 / 获奖 / 科研项目

_layouts/default.html   页面外壳：顶部导航 + 左侧资料栏
_includes/
  paper-card.html       代表作大卡片（首页用）
  paper-row.html        论文列表条目（Publications 页用）
  authors.html          作者串渲染，把 **名字** 变成加粗下划线
  icon.html             图标 SVG

static/css/main.css     样式。改配色只需调文件开头那组 CSS 变量
static/js/main.js       深浅色主题切换
static/uploads/covers/  论文配图
static/uploads/pdfs/    slides、poster、video
```

## 本地预览（可选）

日常改内容不需要本地预览，直接推送看线上效果即可。
如果确实想本地看，需要安装 Ruby 和 Jekyll：

```bash
gem install bundler jekyll
jekyll serve
# 打开 http://localhost:4000
```

## 内容来源

- 个人履历、奖项、科研项目：[ICT 官方个人主页](https://ict.cas.cn/sourcedb/cn/jssrck/202312/t20231201_6939367.html)
- 论文列表：改版前的旧主页 + Google Scholar，已去重核对
- 页面内容全部为英文

## 备注

- `index.old.html` 是改版前的旧版单文件主页，留作参考，确认新版无误后可以删掉。
  注意它依赖的旧 CSS 已被删除，直接打开会没有样式；旧版完整可运行形态保存在
  git 历史的 `ef70d37` 提交里，需要时用 `git show ef70d37` 取回。
- 以下模板遗留物已删除：`static/css/dist/`（96KB Tailwind 产物）、
  `static/homepage/fonts/`（9.3MB 字体）、`static/homepage/images/yyg.jpg`（模板作者头像）。
- `static/uploads/` 约 51MB，其中 41MB 是 AAAI 2024 那篇的 poster/slides/video
  （页面有链接指向，需要保留）。另有两类未被引用、可考虑清理：
  `neurips2023-augselfgan-*`（6.6MB，模板作者论文的材料）和三个 `*-pic.pdf`
  （约 5MB，配图的 PDF 版，页面用的是 .png 版）。
