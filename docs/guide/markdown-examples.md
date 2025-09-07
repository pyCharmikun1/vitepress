# Markdown 扩展示例

本文展示VitePress内置的Markdown扩展功能

## 语法高亮

VitePress使用[Shiki](https://github.com/shikijs/shiki)提供语法高亮功能，并支持行号高亮：

**输入示例**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出效果**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入示例**

```md
::: info
这是信息提示框
:::

::: tip
这是技巧提示
:::

::: warning
这是警告提示
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
