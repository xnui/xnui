<template>
  <div>
    <xn-button>默认按钮</xn-button>
    <xn-button type="primary">主要按钮</xn-button>
    <xn-button type="success">成功按钮</xn-button>
    <xn-button type="info">信息按钮</xn-button>
    <xn-button type="warning">警告按钮</xn-button>
    <xn-button type="danger">危险按钮</xn-button>
    <!-- <xn-button type="test">test button type err</xn-button> -->
    <!-- <xn-icon icon="loading"></xn-icon> -->
    <br>
    <xn-button icon="search"
               type="success"
               icon-position="left">搜索 L</xn-button>
    <xn-button icon="search"
               type="primary"
               icon-position="right">搜索 R</xn-button>
    <xn-button type="success"
               loading>加载中</xn-button>
    <br>
    <xn-button-group>
      <xn-button icon="arrow-left">上一页</xn-button>
      <xn-button icon="arrow-right"
                 icon-position="right">下一页</xn-button>
      <xn-button icon="double-arrow-left">向上翻页</xn-button>
      <xn-button icon="double-arrow-right"
                 icon-position="right">向下翻页</xn-button>
      <input type="text"
             placeholder="input test btn-group tagType error">
    </xn-button-group>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.xn-button-group {
  input {
    width: 213px;
  }
}
</style>
