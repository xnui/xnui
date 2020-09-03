# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<xn-container>`：外层容器。当子元素中包含 `<xn-header>` 或 `<xn-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<xn-header>`：顶栏容器。

`<xn-aside>`：侧边栏容器。

`<xn-main>`：主要区域容器。

`<xn-footer>`：底栏容器。

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<xn-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<xn-container>`

<section class="xn-container isVertical">
  <header class="xn-header">Header</header>

  <main class="xn-main">Main</main>

</section>

<section class="xn-container isVertical">
  <header class="xn-header">Header</header>

  <main class="xn-main">Main</main>

  <footer class="xn-footer">Footer</footer>

</section>

<section class="xn-container">
  <aside class="xn-aside" style="width: 200px;">Aside</aside>

  <main class="xn-main">Main</main>

</section>

<section class="xn-container isVertical">
  <header class="xn-header">Header</header>

  <section class="xn-container">
    <aside class="xn-aside" style="width: 200px;">Aside</aside>

    <main class="xn-main">Main</main>

  </section>

</section>

<section class="xn-container isVertical">
  <header class="xn-header">Header</header>

  <section class="xn-container">
     <aside class="xn-aside" style="width: 200px;">Aside</aside>

     <section class="xn-container isVertical">
       <main class="xn-main">Main</main>

       <footer class="xn-footer">Footer</footer>
     </section>

  </section>

</section>

<section class="xn-container">
    <aside class="xn-aside" style="width: 200px;">Aside</aside>

    <section class="xn-container isVertical">
        <header class="xn-header">Header</header>

        <main class="xn-main">Main</main>
    </section>

</section>

<section class="xn-container">
    <aside class="xn-aside" style="width: 200px;">Aside</aside>

    <section class="xn-container isVertical">
        <header class="xn-header">Header</header>

        <main class="xn-main">Main</main>

        <footer class="xn-footer">Footer</footer>
    </section>

</section>

<!---->

```hljs
<xn-container>
    <xn-header>Header</xn-header>
    <xn-main>Main</xn-main>
</xn-container>

<xn-container>
    <xn-header>Header</xn-header>
    <xn-main>Main</xn-main>
    <xn-footer>Footer</xn-footer>
</xn-container>

<xn-container>
    <xn-aside width="200px">Aside</xn-aside>
    <xn-main>Main</xn-main>
</xn-container>

<xn-container>
    <xn-header>Header</xn-header>
    <xn-container>
    <xn-aside width="200px">Aside</xn-aside>
    <xn-main>Main</xn-main>
    </xn-container>
</xn-container>

<xn-container>
    <xn-header>Header</xn-header>
    <xn-container>
    <xn-aside width="200px">Aside</xn-aside>
    <xn-container>
        <xn-main>Main</xn-main>
        <xn-footer>Footer</xn-footer>
    </xn-container>
    </xn-container>
</xn-container>

<xn-container>
    <xn-aside width="200px">Aside</xn-aside>
    <xn-container>
    <xn-header>Header</xn-header>
    <xn-main>Main</xn-main>
    </xn-container>
</xn-container>

<xn-container>
    <xn-aside width="200px">Aside</xn-aside>
    <xn-container>
    <xn-header>Header</xn-header>
    <xn-main>Main</xn-main>
    <xn-footer>Footer</xn-footer>
    </xn-container>
</xn-container>

<style>
.xn-header,
.xn-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.xn-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.xn-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .xn-container {
  margin-bottom: 40px;
}

.xn-container:nth-child(5) .xn-aside,
.xn-container:nth-child(6) .xn-aside {
  line-height: 260px;
}

.xn-container:nth-child(7) .xn-aside {
  line-height: 320px;
}
</style>
```

\_\_
显示代码
