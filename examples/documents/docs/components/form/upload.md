# Upload 上传

通过点击或者拖拽上传文件

## 点击上传

<button class="xn-button xn-button-primary xn-button-left"><svg aria-hidden="true" class="xn-icon icon"><use xlink:href="#icon-shangchuan"></use></svg><!----><span>点击上传</span></button>

<input type="file" multiple="multiple" class="upload">

只能上传 jpg/png 文件，且不超过 500kb

- <svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-file"></use></svg>珠峰架构

  <svg aria-hidden="true" class="xn-icon cha"><use xlink:href="#icon-cha"></use></svg>

通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置 limit 和 on-exceed 来限制上传文件的个数和定义超出限制时的行为。可通过设置 before-remove 来阻止文件移除操作。

```hljs
<xn-upload
    class="upload-demo"
    action="https://localhost:3000/upload"
    :on-remove="handleRemove"
    :beforeRemove="beforeRemove"
    :multiple="true
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
>
    <xn-button size="small" type="primary">点击上传</xn-button>
    <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</xn-upload>
<script>
export default {
    data() {
        return {
            fileList: [
                {
                    name: "food.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                },
                {
                    name: "food2.jpeg",
                    url:
                        "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
                }
            ]
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        }
    }
};
</script>
```

\_\_
显示代码

## 用户头像上传

\_\_

<input type="file" class="upload">

<!---->

```hljs
<xn-upload
    class="avatar-uploader"
    action="https://localhost:3000/upload"
    :on-success="handleAvatarSuccess"
    :beforeUpload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</xn-upload>
<script>
export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style>
  .avatar-uploader .xn-upload-handler {
      width: 180px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .xn-upload-handler:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
```

\_\_
显示代码

## 图片列表缩略图

<button class="xn-button xn-button-primary xn-button-left" size="small"><!----><!----><span>点击上传</span></button>

<input type="file" class="upload">

只能上传 jpg/png 文件，且不超过 500kb

- ![](https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100)

  food.jpeg

    <!---->

  <svg aria-hidden="true" class="xn-icon cha"><use xlink:href="#icon-cha"></use></svg>

- ![](https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100)

  food2.jpeg

    <!---->

  <svg aria-hidden="true" class="xn-icon cha"><use xlink:href="#icon-cha"></use></svg>

<!---->

```hljs
<xn-upload
    class="upload-demo"
    action="https://localhost:3000/upload"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    list-type="picture">
    <xn-button size="small" type="primary">点击上传</xn-button>
    <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</xn-upload>
<script>
export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>
```

\_\_
显示代码

## 拖拽上传

<svg aria-hidden="true" class="xn-icon icon"><use xlink:href="#icon-shangchuan"></use></svg>

将文件拖到此处，或 _点击上传_

<input type="file" multiple="multiple" class="upload">

只能上传 jpg/png 文件，且不超过 500kb

<!---->

```hljs
<xn-upload
    class="upload-demo"
    :drag="true"
    action="https://localhost:3000/upload"
    multiple>

    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</xn-upload>
```

\_\_
显示代码

## Attribute

| 参数          | 说明                                                                                                    | 类型                               | 可选值       | 默认值 |
| ------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------ | ------ |
| action        | 必选参数，上传的地址                                                                                    | string                             | —            | —      |
| multiple      | 是否支持多选文件                                                                                        | boolean                            | —            | —      |
| name          | 上传的文件字段名                                                                                        | string—file                        |              |
| drag          | 是否启用拖拽上传                                                                                        | boolean                            | —            | false  |
| accept        | 接受上传的文件类型（thumbnail-mode 模式下此参数无效）                                                   | string                             | —            | —      |
| on-remove     | 文件列表移除文件时的钩子                                                                                | function(file, fileList)           | —            | —      |
| on-success    | 文件上传成功时的钩子                                                                                    | function(response, file, fileList) | —            | —      |
| on-error      | 文件上传失败时的钩子                                                                                    | function(err, file, fileList)      | —            | —      |
| on-progress   | 文件上传时的钩子                                                                                        | function(event, file, fileList)    | —            | —      |
| on-change     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                          | function(file, fileList)—          | —            |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。           | function(file)                     | —            | —      |
| before-remove | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。 | function(file, fileList)           | —            | —      |
| list-type     | 文件列表的类型                                                                                          | string                             | text/picture | text   |
| file-list     | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]                          | array                              | —            | []     |
| http-request  | 覆盖默认的上传行为，可以自定义上传的实现                                                                | function                           | —            | —      |
| limit         | 最大允许上传个数                                                                                        | number                             | —            | —      |
| on-exceed     | 文件超出个数限制时的钩子                                                                                | function(files, fileList)          | —            | -      |
