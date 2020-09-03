# Popover 弹出框

## 基础用法

<button class="xn-button xn-button-left"><!----><!----><span>点击弹框</span></button>

<!---->

<button class="xn-button xn-button-left"><!----><!----><span>hover 弹框</span></button>

<!---->

<button class="xn-button xn-button-left"><!----><!----><span>hover 弹框</span></button>

<!---->

<button class="xn-button xn-button-left"><!----><!----><span>hover 弹框</span></button>

<!---->

<button class="xn-button xn-button-left"><!----><!----><span>hover 弹框</span></button>

<!---->

```hljs
<template>
<div style="margin: 100px 0 100px">
    <xn-popover
        placement="right"
        width="200px"
        title="标题"
        content="这是弹框"
        trigger="click"
        v-model="value1"
    >
        <xn-button slot="reference">点击弹框</xn-button>
    </xn-popover>

    <xn-popover
        placement="top"
        width="200px"
        title="标题"
        content="这是弹框"
        trigger="hover"
        v-model="value2"
    >
        <xn-button slot="reference">点击弹框</xn-button>
    </xn-popover>

    <xn-popover
        placement="right"
        width="200px"
        title="标题"
        content="这是弹框"
        trigger="hover"
        v-model="value3"
    >
        <xn-button slot="reference">点击弹框</xn-button>
    </xn-popover>

    <xn-popover width="200px" title="标题" content="这是弹框" trigger="hover" v-model="value4">
        <xn-button slot="reference">点击弹框</xn-button>
    </xn-popover>

    <xn-popover
        placement="left"
        width="200px"
        title="标题"
        content="这是弹框"
        trigger="hover"
        v-model="value5"
    >
        <xn-button slot="reference">点击弹框</xn-button>
    </xn-popover>
</div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false,
      value3: false,
      value4: false,
      value5: false
    };
  }
};
</script>
```

\_\_
显示代码

## Attributes

| 参数            | 说明                                 | 类型           | 可选值                | 默认值         |
| --------------- | ------------------------------------ | -------------- | --------------------- | -------------- |
| trigger         | 触发方式                             | String         | click/hover           | click          |
| title           | 标题                                 | String         | —                     | —              |
| content         | 显示的内容，也可以通过 slot 传入 DOM | String         | —                     | —              |
| width           | 宽度                                 | String, Number | —                     | 最小宽度 150px |
| placement       | 出现位置                             | String         | top/bottom/left/right | bottom         |
| value / v-model | 状态是否可见                         | Boolean        | —                     | false          |
