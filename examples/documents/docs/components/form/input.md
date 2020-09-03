# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<!---->

<!---->

<input type="password" placeholder="请输入内容">

<!---->

<!---->

<!---->

```hljs
<xn-input type="password" v-model="value" placeholder="请输入内容"></xn-input>
```

\_\_
显示代码

## 禁用状态

<!---->

<!---->

<input type="password" placeholder="请输入内容" disabled="disabled">

<!---->

<!---->

通过 disabled 属性指定是否禁用 input 组件

```hljs
<xn-input type="password" v-model="value" placeholder="请输入内容" disabled></xn-input>
```

\_\_
显示代码

## 可清空

<!---->

<!---->

<input type="text" placeholder="请输入内容">

<!---->

<!---->

使用 clearable 属性即可得到一个可清空的输入框

```hljs
<xn-input type="text" v-model="value" placeholder="请输入内容" clearable></xn-input>
```

\_\_
显示代码

## 密码框

<!---->

<!---->

<input type="password" placeholder="请输入内容">

<!---->

<!---->

使用 show-password 属性即可得到一个可切换显示隐藏的密码框

```hljs
<xn-input type="password" v-model="value" placeholder="请输入内容" show-password></xn-input>
```

\_\_
显示代码

## 带 icon 的输入框

<!----><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-edit"></use></svg>

<input type="text" placeholder="编辑">

<!---->

<!---->

<svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-edit"></use></svg>

<!---->

<input type="text" placeholder="编辑">

<!---->

<!---->

可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标

```hljs
<xn-input
    placeholder="编辑"
    suffix-icon="edit"
    v-model="input">
</xn-input>
<xn-input
    placeholder="编辑"
    prefix-icon="edit"
    v-model="input">
</xn-input>
```

\_\_
显示代码

## Attributes

| 参数            | 说明                 | 类型            | 可选值                                      | 默认值 |
| --------------- | -------------------- | --------------- | ------------------------------------------- | ------ |
| type            | 类型                 | string          | text，textarea 和其他 原生 input 的 type 值 | text   |
| value / v-model | 绑定值               | string / number | -                                           | -      |
| disabled        | 禁用                 | boolean         | -                                           | false  |
| position        | 图标位置             | string          | left / right                                | left   |
| clearable       | 是否可清空           | boolean         | -                                           | false  |
| show-password   | 是否显示切换密码图标 | boolean         | -                                           | false  |
| name            | 原生属性             | string          | —                                           | —      |
| prefix-icon     | 输入框头部图标       | string          | —                                           | —      |
| suffix-icon     | 输入框尾部图标       | string          | —                                           | —      |

## Input Events

| 事件名称 | 说明                                   | 回调参数        |
| -------- | -------------------------------------- | --------------- |
| blur     | 在 Input 失去焦点时触发                | (event: Event)  |
| focus    | 在 Input 获得焦点时触发                | (event: Event)  |
| change   | 仅在输入框失去焦点或用户按下回车时触发 | (event: Event)  |
| input    | 在 Input 值改变时触发                  | (value: string) |
