---
outline: deep
---

# 运行时API示例

本文演示VitePress提供的运行时API使用方法。

通过`useData()`API可以访问当前页面的站点、主题和页面数据，支持在`.md`和`.vue`文件中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 运行结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 运行结果

### 主题数据
<pre>{{ theme }}</pre>

### 页面数据
<pre>{{ page }}</pre>

### 页面Frontmatter
<pre>{{ frontmatter }}</pre>

## 扩展阅读

查看[完整运行时API列表](https://vitepress.dev/reference/runtime-api#usedata)文档。
