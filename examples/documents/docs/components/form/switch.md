# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基本用法

<input type="checkbox" true-value="true">

绑定 v-model 到一个 Boolean 类型的变量。可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色。

```hljs
<xn-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</xn-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```

\_\_
显示代码

## 扩展的 value 类型

100

<input type="checkbox" true-value="100" false-value="0">

设置 active-value 和 inactive-value 属性，接受 Boolean, String 或 Number 类型的值。

```hljs
{{value}}
  <xn-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </xn-switch>

<script>
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
</script>
```

\_\_
显示代码

## 禁用状态

<input type="checkbox" true-value="true" disabled="disabled">

<input type="checkbox" true-value="true" disabled="disabled">

设置 disabled 属性，接受一个 Boolean，设置 true 即可禁用。。

```vue
<xn-switch
  v-model="value1"
  disabled>
</xn-switch>
<xn-switch
  v-model="value2"
  disabled>
</xn-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
```

\_\_
显示代码
