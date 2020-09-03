# DatePicker 日期选择器

用于选择或输入日期

## 选择日

以「日」为基本单位，基础的日期选择控件

<!----><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-rili"></use></svg>

<input type="text" placeholder="">

<!---->

<!---->

<!---->

基本单位由 type 属性指定。

```hljs
<xn-date-picker v-model="value"></xn-date-picker>
```

\_\_
显示代码

## 选择日期范围

可在一个选择器中便捷地选择一个时间范围

<!----><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-rili"></use></svg>

<input type="text" placeholder="">

<!---->

<!---->

<!----><svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-rili"></use></svg>

<input type="text" placeholder="">

<!---->

<!---->

<!---->

<!---->

在选择日期范围时，默认情况下左右面板会联动。

```hljs
<xn-date-range-picker v-model="value"></xn-date-range-picker>
```

\_\_
显示代码

## Attributes

| 参数            | 说明   | 类型                                      | 可选值 | 默认值 |
| --------------- | ------ | ----------------------------------------- | ------ | ------ |
| value / v-model | 绑定值 | date(DatePicker) / array(DateRangePicker) | —      | —      |
