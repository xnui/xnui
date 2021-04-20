<template>
  <div>
    <button class="clip" @click="openApp">唤醒app</button>

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
  methods: {
    openApp() {
      console.log('aaa', '000')

      this.callapp_PC({
        // 这个url地址换成需要唤醒的客户端的URL Protoco
        // 客户端自定义URL Protoco的设置请看我的博客 pc前端js调起电脑本地应用程序(需要客户端配合 自定义URL Protocol 协议 )
        url: "baijiacloud://urlpath=https%3A%2F%2Fb41568785.at.baijiayun.com",
        callback: function() {
          console.log("唤醒失败了,做一些唤醒失败后的操作吧");
        },
      });
    },
    callapp_PC({ url, callback }) {
      var t = setTimeout(callback, 1000);
      var inp = document.createElement("input");
      inp.style.position = "absolute";
      inp.style.clip = "rect(0, 0, 0, 0)";
      function blur() {
        window.clearTimeout(t);
      }
      inp.addEventListener("blur", blur); // 监听blur事件
      document.body.appendChild(inp);
      inp.focus(); // 获取焦点
      setTimeout(function() {
        // 删除无用的标签
        inp.removeEventListener("blur", blur);
        document.body.removeChild(inp);
      }, 1000);
      //有客户端 如果有本地exe应用，就会弹框，input失去焦点，然后执行blur()事件 清空t定时器 - 删除无用的标签定时器
      //无客户端 不会弹框，input也不会失去焦点 触发t定时器- 执行callback - 删除无用的标签定时器
      // https://blog.csdn.net/weixin_44309374?orderby=UpdateTime
      location.href = url;
    },
  },
};
</script>

<style lang="scss">
.xn-button-group {
  input {
    width: 213px;
  }
}
</style>
