# bingbing-x.github.io

个人主页源码，部署在 GitHub Pages：<https://bingbing-x.github.io>

## 怎么更新内容

**绝大多数情况下，你只需要改一个文件：[`_data/site.yml`](_data/site.yml)。**

这个文件里放着主页的全部内容——个人信息、About、News、经历、论文、奖项、学术服务。
HTML 模板会自动读取它并渲染。改完提交推送，GitHub Pages 约 1 分钟后自动生效，
不需要在本地安装或构建任何东西。

```bash
git add _data/site.yml
git commit -m "Add NeurIPS 2026 paper"
git push
```

### 加一篇论文

在 `_data/site.yml` 的 `publications:` 下面加一段（放在哪都行，页面会自动按 `year` 倒序分组）：

```yaml
  - title: 论文标题
    url: https://arxiv.org/abs/xxxx.xxxxx    # 标题的跳转链接，可省略
    authors: "张三, **Bingbing Xu**, 李四"    # 用 ** ** 括住自己的名字
    venue: NeurIPS 2026
    year: 2026                                # 必填，决定分组
    type: C                                   # C=会议 J=期刊 P=预印本
    meta: New Orleans, USA; CCF-A             # 可省略
    links:                                    # 可省略
      - name: Paper
        url: https://arxiv.org/abs/xxxx.xxxxx
      - name: Code
        url: https://github.com/...
    image: my-paper-fig.png                   # 可省略，放在 static/uploads/covers/
    tldr: 一句话说明这篇工作。                  # 可省略，填了才有 [Summary] 按钮
```

### 加一条 News

```yaml
news:
  - date: 2026-09
    text: 'One paper accepted at <strong>NeurIPS 2026</strong>.'
```

超过 `news_limit` 条的会自动折叠，页面上出现"Show all"按钮。

### 换头像

把图片放进 `static/homepage/images/`，然后在 `_data/site.yml` 里填文件名：

```yaml
  photo: avatar.jpg
```

留空则不显示头像区域。

### 开启访问统计

`analytics_id:` 留空时，页面不加载任何跟踪脚本。填入你自己的 Google Analytics
ID（形如 `G-XXXXXXXXXX`）即可启用。

## 目录结构

```
_data/site.yml       ← 全部内容都在这里，日常只改这个
_config.yml          站点配置（标题、URL）
index.html           页面模板，决定内容怎么排版
_layouts/default.html  HTML 外壳（head、主题切换按钮）
_includes/icon.html  图标 SVG
static/css/main.css  样式。改配色只需调文件开头的 CSS 变量
static/js/main.js    交互（深色模式、折叠展开）
static/uploads/      论文配图、slides、poster
```

## 本地预览（可选）

日常改内容不需要本地预览，直接推送看线上效果即可。
如果确实想本地看，需要安装 Ruby 和 Jekyll：

```bash
gem install bundler jekyll
jekyll serve
# 打开 http://localhost:4000
```

## 备注

- `index.old.html` 是改版前的旧版单文件主页，留作参考，确认新版无误后可以删掉。
- `static/css/dist/styles.css`（96KB 的 Tailwind 产物）和 `static/homepage/fonts/`
  （9.3MB 字体）是旧版遗留，新版不再使用，确认无误后可一并删除以精简仓库。
