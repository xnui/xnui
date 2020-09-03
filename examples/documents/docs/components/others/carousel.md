# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

适用广泛的基础用法

默认 Hover 指示器触发

### 1

### 2

### 3

### 4

1234

<button class="xn-carousel__arrow xn-carousel__arrow--left"><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-left"></use></svg></button>

<button class="xn-carousel__arrow xn-carousel__arrow--right"><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-right"></use></svg></button>

<!---->

```hljs
<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <xn-carousel height="150px">
      <xn-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </xn-carousel-item>
    </xn-carousel>
  </div>
</template>

<style>
  .xn-carousel h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .xn-carousel-item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .xn-carousel-item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
```

\_\_
显示代码

## 指示器

可以将指示器的显示位置设置在容器外部

### 1

### 2

### 3

### 4

1234

<button class="xn-carousel__arrow xn-carousel__arrow--left"><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-left"></use></svg></button>

<button class="xn-carousel__arrow xn-carousel__arrow--right"><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-right"></use></svg></button>

<!---->

```hljs
<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <xn-carousel height="150px" arrow="always">
      <xn-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </xn-carousel-item>
    </xn-carousel>
  </div>
</template>
```

\_\_
显示代码

## 切换箭头

可以设置切换箭头的显示时机

### 1

### 2

### 3

### 4

1234

<button class="xn-carousel__arrow xn-carousel__arrow--left"><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-left"></use></svg></button>

<button class="xn-carousel__arrow xn-carousel__arrow--right"><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-right"></use></svg></button>

<!---->

```hljs
<template>
  <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <xn-carousel height="150px" arrow="always">
      <xn-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </xn-carousel-item>
    </xn-carousel>
  </div>
</template>
```

\_\_
显示代码

## Carousel Attributes

| 参数               | 说明                                  | 类型    | 可选值             | 默认值 |
| ------------------ | ------------------------------------- | ------- | ------------------ | ------ |
| height             | 走马灯的高度                          | string  | —                  | —      |
| initial-index      | 初始状态激活的幻灯片的索引，从 0 开始 | number  | —                  | 0      |
| autoplay           | 是否自动切换                          | boolean | —                  | true   |
| interval           | 自动切换的时间间隔，单位为毫秒        | number  | —                  | 3000   |
| indicator-position | 指示器的位置                          | string  | outside/none       | —      |
| arrow              | 切换箭头的显示时机                    | string  | always/hover/never | hover  |
| loop               | 是否循环显示                          | boolean | -                  | true   |

## Carousel Events

| 事件名称 | 说明             | 回调参数                               |
| -------- | ---------------- | -------------------------------------- |
| change   | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |
