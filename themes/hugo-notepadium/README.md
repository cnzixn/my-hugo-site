![](https://raw.githubusercontent.com/cntrump/hugo-notepadium/master/images/screenshot.png)

# Notepadium [![Build Status](https://travis-ci.org/cntrump/hugo-notepadium.svg?branch=master)](https://travis-ci.org/cntrump/hugo-notepadium)

Request Hugo Version: [0.124.0+](https://github.com/gohugoio/hugo/releases/)

a fast and focus on reading [Hugo](https://gohugo.io) theme, **100% JavaScript-free**.

Features

- Logo and slogan
- Navigation items
- Syntax highlighting
- Math supporting
- Comments powered by Disqus
- CC License
- Pagination with a large number of pages supporting
- Light & Dark Mode
- Google analytics supporting
- Custom CSS/SASS/SCSS supporting
- Custom JS supporting
- Custom header right items supporting
- Builtin `plist` shortcode for API document
- Custom article cover supporting
- Article share supporting (thanks [@jianyuanzh](https://github.com/jianyuanzh))
- [Twitter Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary) supporting
- Builtin iconfont (3KB)
- Display author profile at article bottom
- Support Bilibili shortcodes

Preview the exampleSite:

```shell
git clone https://github.com/cntrump/hugo-notepadium.git hugo-notepadium
cd hugo-notepadium/exampleSite
hugo server --themesDir ../..
```

## Quick Start

```shell
git submodule add https://github.com/cntrump/hugo-notepadium.git themes/hugo-notepadium
```

Example `config.toml`:

```toml
baseURL = "https://example.com"
title = "Notepadium"
theme = "hugo-notepadium"
copyright = "©2019 Notepadium."

languageCode = "zh-cn"
hasCJKLanguage = true

enableRobotsTXT = true

# [services.disqus]
# shortname = '' # Disqus shortname

# [services.googleAnalytics]
# id = '' # Google tag ID

[markup.highlight]
codeFences = true
noClasses = false

[markup.goldmark.renderer]
unsafe = true  # enable raw HTML in Markdown

[params]
style = "auto"  # default: auto. light: light theme, dark: dark theme, auto: based on system.
dateFormat = "Monday, January 2, 2006"  # if unset, default is "2006-01-02"
logo = ""  # if you have a logo png
slogan = "100% JavaScript-free"
license = ""  # CC License
fullRss = false # Puts entire HTML post into rss 'description' tag. If unset, default is false.
ipv6ready = true # Show IPV6Ready logo on footer.

[params.comments]
enable = false  # En/Disable comments globally, default: false. You can always enable comments on per page.

[params.comments.utterances]
repo = "MetalBlueberry/MetalBlueberry.github.io" # enable comments with [utteranc.es](https://utteranc.es/)

[params.math]
enable = false  # optional: true, false. Enable globally, default: false. You can always enable math on per page.
use = "katex"  # option: "katex", "mathjax". default: "katex"

[params.syntax]
use = "none"  # builtin: "prismjs", "hljs". "none" means Chroma
theme = "xcode"
darkTheme = "xcode-dark"  # apply this theme in dark mode

[params.share]
enable = false
addThisId = ""
inlineToolId = ""

[params.nav]
showCategories = true       # /categories/
showTags = true             # /tags/

# custom navigation items

[[params.nav.custom]]
title = "About"
url = "/about"

[[params.nav.custom]]
title = "Hugo"
url = "https://gohugo.io/"

# for chinese
[params.beian]
  icp = ""     # example: 粤ICP备20056596号-1
  gongan = ""  # example: 粤公网安备 44030502005645号
  code = ""    # example: 44030502005645
```

### Logo and Slogan

```toml
[params]
logo = "/img/logo.png"
slogan = "code my life ~"
```

### Light and Dark Mode

```toml
[params]
style = "auto"  # default: "auto", based on system. "light": light theme, "dark": dark theme.
logo = "/img/logo.png"
slogan = "code my life ~"
```

### Navigation items

```toml
[params.nav]
showCategories = true       # /categories/
showTags = true             # /tags/

# custom items

[[params.nav.custom]]
title = "iOS"
url = "/tags/ios"

[[params.nav.custom]]
title = "Hugo"
url = "https://gohugo.io/"

```

### Syntax highlighting

```toml
# enable JS highlight
[params.syntax]
use = "hljs"  # 1. prismjs 2. hljs 3. none
theme = "dracula"
darkTheme = "xcode-dark"  # apply this theme in dark mode
```

### Article share
```toml
[params.share]
enable = true
addThisId = "ra-1234567890"
inlineToolId = ""
```

### Math

```toml
[params.math]
enable = true  # true means globally, or on a per page set "math = true"
use = "katex"  # "mathjax" or "katex"
```

Example

```
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```

### Bilibili shortcodes

```html
{{< bilibili BV1FV411d7u7>}}
OR
{{< bilibili id="BV1FV411d7u7">}}
```

Sepecify the part of the video:

```html
{{< bilibili BV1Yx42197Xm 4 >}}
OR
{{< bilibili id="BV1Yx42197Xm" p="4" >}}
```

### Comments

Setup Disqus [shortname](https://help.disqus.com/en/articles/1717111-what-s-a-shortname) in config.toml:

```toml
# disqus
[services.disqus]
shortname = '' # your short name

[params.comments]
enable = false  # En/Disable comments globally, default: false. You can always enable comments on per page.
```

You can enable comments on per page:

```md
+++
title = "..."
date = 2019-12-08
...
comments = true
+++

...
```

### Pagination

Support large number of pages

![](https://raw.githubusercontent.com/cntrump/hugo-notepadium/master/images/03.png)

### Custom footer copyright layout

Thanks [@Benjamin-Lee](https://github.com/Benjamin-Lee)'s good idea!

Create an user-side partial: `copyright.html`

```
.
└── layouts
    └── partials
        └── copyright.html
```

You can relayout copyright like this:

```html
{{- $copyright := . -}}
<div style="display:flex; flex-direction:row; flex-wrap:wrap; justify-content:space-between;">
<p style="flex-shrink: 0;">{{- $copyright -}}</p>
<p><span>Powered by </span><a
    href="https://gohugo.io" target="_blank">Hugo</a><span> and the </span><a
    href="https://themes.gohugo.io/hugo-notepadium/" target="_blank">Notepadium</a></p>
</div>
```

### Custom CSS

```toml
[params.assets]
css = ["css/font.css", "css/color.css", "css/layout.scss"]  # *.css/scss/sass
```

On user-side:

```
.
└── assets
    └── css
        ├── color.css
        └── font.css
```

`color.css` and `font.css` will be bundled into `core.css`.

_Note:_ You can use Hugo templating in these CSS assets.

### Custom JS

```toml
[params.assets]
js = ["js/font.js", "js/color.js"]
```

On user-side:

```
.
└── assets
    └── js
        ├── color.js
        └── font.js
```

`color.js` and `font.js` will be bundled into `core.js`.

### Custom header right items

Create an user-side partial: `navigation-items.html`

```
.
└── layouts
    └── partials
        └── navigation-items.html
```

An example navigation-items.html:

```html
{{- $nav := . -}}
{{- if or $nav.showCategories $nav.showTags $nav.custom -}}
<div class="nav wrap"><nav class="nav">
    {{- if $nav.showCategories -}}
        <a class="nav item" href="{{- `/categories/` | relLangURL -}}">Categories</a>
    {{- end -}}
    {{- if $nav.showTags -}}
        <a class="nav item" href="{{- `/tags/` | relLangURL -}}">Tags</a>
    {{- end -}}
    {{- range $nav.custom -}}
        {{- $url := .url | safeURL -}}
        {{- if strings.HasPrefix $url "/" -}}{{- $url = $url | relLangURL -}}{{- end -}}
        <a class="nav item" href="{{- $url -}}"
            {{- if strings.HasPrefix $url "http" -}}target="_blank"
            {{- end -}}>{{- .title -}}</a>
    {{- end -}}
</nav></div>
{{- end -}}
```

Or, you can rewrite it:

```html
<a class="nav item" href="{{- `/pages/about/` | relURL -}}"><span class="iconfont icon-aboutus"></span>&nbsp;About</a>
<a class="nav item" href="https://github.com/cntrump" target="_blank"><span class="iconfont icon-logo_github"></span>&nbsp;Github</a>
```

`iconfont`, `icon-*` classes are my custom CSS.

![](https://raw.githubusercontent.com/cntrump/hugo-notepadium/master/images/04.png)

### `plist` shortcode

Syntax:

```md
{{< plist
    "key1: value1"
    "key2: value2"
    "key3: value3"
    ...
    "keyN: valueN"
>}}
```

Example:

```md
- `text-align`

    ```css
    .box {
        text-align: center;
    }
    ```

    Definition and Usage

    The `text-align` property specifies the horizontal alignment of text in an element.

    {{< plist
        "Default value: `left` if direction is ltr, and `right` if direction is rtl"
        "Inherited: yes"
        "Animatable: no. Read about animatable"
        "Version: CSS1"
        "JavaScript syntax: `object.style.textAlign=\"right\"`"
    >}}
```

![](https://raw.githubusercontent.com/cntrump/hugo-notepadium/master/images/05.png)

### Custom article cover

Set `01.png` as cover, example:

```toml
+++
title = "..."
cover = "01.png"
+++
```

### Display author profile at article bottom

Global settings, Edit `config.toml`

```toml
[params.profile]
  enable = true
  avatar = "/img/avatar.jpg"
  name = "XXX"
  bio = "XXX"  # support markdown syntax
  twitter = "XXX"  # https://twitter.com/XXX
  github = "XXX"  # https://github.com/XXX
  docker = "XXX"  # https://hub.docker.com/u/XXX
  email = "XXX@mail.com"  # mailto:XXX@mail.com
```

Or page-by-page, on front matter:

```toml
+++
title = "..."
date = 2020-05-01T22:20:36+08:00

[profile]
  enable = true
  avatar = "/img/avatar.jpg"
  name = "XXX"
  bio = "XXX"  # support markdown syntax
  twitter = "XXX"  # https://twitter.com/XXX
  github = "XXX"  # https://github.com/XXX
  docker = "XXX"  # https://hub.docker.com/u/XXX
  email = "XXX@mail.com"  # mailto:XXX@mail.com
+++
```

### Set robots meta tag

In the front matter of any page, you can selectively enable the `robots` meta tag
and define its content:

```toml
robots = "noindex,nofollow"
```

If `noindex` is included, that page will also be hidden in `sitemap.xml`.

## Thanks

- [**Hugo**](https://gohugo.io/)
- [**HighlightJS**](https://highlightjs.org/)
- [**PrismJS**](https://prismjs.com/)
- [**MathJax**](https://www.mathjax.org/)
- [**Katex**](https://katex.org/)
- [**Disqus**](https://disqus.com/)
- Built-in Japanese language [@kofuk](https://github.com/kofuk)

## Note

For Hugo 0.62.0+ users

 `![](01.png)` render as inline `<img>`, like as Github's style

 ![](https://raw.githubusercontent.com/cntrump/hugo-notepadium/master/images/01.png)

`![](01.png " ")` render as block `<img>`, like as `<figure>` tag style.

![](https://raw.githubusercontent.com/cntrump/hugo-notepadium/master/images/02.png)
