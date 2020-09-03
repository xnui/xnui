# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```vue
<xn-row>
  <xn-col :span="24">
  <div class="grid-content bg-purple-dark"></div>
  </xn-col>
</xn-row>
<xn-row>
  <xn-col :span="12">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="12">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
</xn-row>
<xn-row>
  <xn-col :span="8">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="8">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
  <xn-col :span="8">
  <div class="grid-content bg-purple"></div>
  </xn-col>
</xn-row>
<xn-row>
  <xn-col :span="6">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="6">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
  <xn-col :span="6">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="6">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
</xn-row>
<xn-row>
  <xn-col :span="4">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="4">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
  <xn-col :span="4">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="4">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
  <xn-col :span="4">
  <div class="grid-content bg-purple"></div>
  </xn-col>
  <xn-col :span="4">
  <div class="grid-content bg-purple-light"></div>
  </xn-col>
</xn-row>

<style>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

\_\_
显示代码

## 分栏间隔

分栏之间存在间隔。

Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```hljs
<xn-row :gutter="20">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>

<style>
  .xn-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .xn-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
```

\_\_
显示代码

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<!---->

```vue
<xn-row :gutter="20">
  <xn-col :span="16"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="8"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row :gutter="20">
  <xn-col :span="8"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="8"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="4"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="4"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row :gutter="20">
  <xn-col :span="4"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="16"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="4"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>

<style>
.xn-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.xn-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

\_\_
显示代码

## 分栏偏移

- 支持偏移指定的栏数。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。

```vue
<xn-row :gutter="20">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row :gutter="20">
  <xn-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row :gutter="20">
  <xn-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>

<style>
.xn-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.xn-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

\_\_
显示代码

## 对齐方式

通过 flex 布局来对分栏进行灵活的对齐。

将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```vue
<xn-row class="row-bg">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple-light"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row class="row-bg" justify="center">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple-light"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row class="row-bg" justify="end">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple-light"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row class="row-bg" justify="space-between">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple-light"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>
<xn-row class="row-bg" justify="space-around">
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple-light"></div></xn-col>
  <xn-col :span="6"><div class="grid-content bg-purple"></div></xn-col>
</xn-row>

<style>
.xn-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.xn-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

\_\_
显示代码

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。

将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```vue
<xn-row :gutter="10">
  <xn-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></xn-col>
  <xn-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></xn-col>
  <xn-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></xn-col>
</xn-row>

<style>
.xn-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```

\_\_
显示代码

## Row Attributes

| 参数    | 说明     | 类型                 | 可选值 | 默认值                                      |
| ------- | -------- | -------------------- | ------ | ------------------------------------------- |
| gutter  | 栅格间隔 | number               | —      | 0                                           |
| justify | flex     | 布局下的水平排列方式 | string | start/end/center/space-around/space-between |

## Col Attributes

| 参数   | 说明                                 | 类型                                        | 可选值 | 默认值 |
| ------ | ------------------------------------ | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                       | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                   | number                                      | —      | 0      |
| xs     | <768px 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | ≥768px 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | ≥992px 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | ≥1200px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | ≥1920px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) |
