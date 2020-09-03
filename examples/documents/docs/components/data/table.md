# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法

基础的表格展示用法。

Name

<!----> | Age

<!----> | Address

<!---->

------------- | ------------ | ------------------------
John Brown | 18 | New York No. 1 Lake Park
Jim Green | 24 | London No. 1 Lake Park
Joe Black | 30 | Sydney No. 1 Lake Park
Jon Snow | 26 | Ottawa No. 2 Lake Park

<!---->

```hljs
<template>
    <xn-table class="table" :columns="columns1" :data="data1"></xn-table>
</template>
<script>
export default {
    data() {
        return {
            columns1: [
                {
                    title: "Name",
                    key: "name"
                },
                {
                    title: "Age",
                    key: "age",
                },
                {
                    title: "Address",
                    key: "address"
                }
            ],
            data1: [
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03"
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01"
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02"
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04"
                },
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03"
                }
            ]
        };
    }
};
</script>
```

\_\_
显示代码

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

Name

<!----> | Age

<!----> | Address

<!---->

------------- | ------------ | ------------------------
John Brown | 18 | New York No. 1 Lake Park
Jim Green | 24 | London No. 1 Lake Park
Joe Black | 30 | Sydney No. 1 Lake Park
Jon Snow | 26 | Ottawa No. 2 Lake Park

stripe 属性可以创建带斑马纹的表格。它接受一个 Boolean，默认为 false，设置为 true 即为启用。

```hljs
<xn-table class="table" :columns="columns1" :data="data1" :stripe="true"></xn-table>
```

\_\_
显示代码

## [\#](https://ui.fullstackjavascript.cn/components/data/table.html#%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4) 固定表头

纵向内容过多时，可选择固定表头。

| col 1      | col 2 | col 3                    |
| ---------- | ----- | ------------------------ |
| John Brown | 18    | New York No. 1 Lake Park |
| Jim Green  | 24    | London No. 1 Lake Park   |
| Joe Black  | 30    | Sydney No. 1 Lake Park   |
| Jon Snow   | 26    | Ottawa No. 2 Lake Park   |
| John Brown | 18    | New York No. 1 Lake Park |
| Jim Green  | 24    | London No. 1 Lake Park   |
| Joe Black  | 30    | Sydney No. 1 Lake Park   |
| Jon Snow   | 26    | Ottawa No. 2 Lake Park   |

Name

<!----> | Age

<!----> | Address

<!---->

------------- | ------------ | ----------------

只要在 xn-table 元素中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。

```hljs
<xn-table class="table" :columns="columns1" :data="data1" height="200px"></xn-table>
```

\_\_
显示代码

## 多选

选择多行数据时使用 Checkbox。

<input type="checkbox"> | Name

<!----> | Age

<!----> | Address

<!---->

----------------------- | ------------- | ------------ | ------------------------
<input type="checkbox"> | John Brown | 18 | New York No. 1 Lake Park
<input type="checkbox"> | Jim Green | 24 | London No. 1 Lake Park
<input type="checkbox"> | Joe Black | 30 | Sydney No. 1 Lake Park
<input type="checkbox"> | Jon Snow | 26 | Ottawa No. 2 Lake Park

通过给 columns 数据设置一项，指定 type: 'selection'，即可自动开启多选功能。

正确使用好以下事件，可以达到需要的效果：

```
@on-select，选中某一项触发，返回值为 selection 和 row，分别为已选项和刚选择的项。

@on-select-all，点击全选时触发，返回值为 selection，已选项。
```

```hljs
<xn-table
    :columns="columns1"
    :data="data1"
    @on-select="hanldeSelect"
    @on-select-all="handleSelectAll"
></xn-table>
<script>
export default {
    data() {
        return {
            columns1: [
                {
                    type: "selection",
                    width: 60,
                    align: "center"
                },
                {
                    title: "Name",
                    key: "name"
                },
                {
                    title: "Age",
                    key: "age"
                },
                {
                    title: "Address",
                    key: "address"
                }
            ],
            data1: [
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03"
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01"
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02"
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04"
                }
            ]
        };
    },
    methods: {
        hanldeSelect(selection, row) {
            console.log(selection, row);
        },
        handleSelectAll(selection) {
            console.log(selection);
        }
    }
};
</script>
```

\_\_
显示代码

## 排序

对表格进行排序，可快速查找或对比数据。

Name

<!----> | Age<svg aria-hidden="true" class="xn-icon active"><use xlink:href="#icon-up"></use></svg>

<svg aria-hidden="true" class="xn-icon"><use xlink:href="#icon-down"></use></svg> | Address

<!---->

------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------
John Brown | 18 | New York No. 1 Lake Park
Jim Green | 24 | London No. 1 Lake Park
Joe Black | 30 | Sydney No. 1 Lake Park
Jon Snow | 26 | Ottawa No. 2 Lake Park

在列中设置 sortable 属性即可实现以该列为基准的排序，接受一个 Boolean，默认为 false 可以通过 sortType 属性设置默认的排序顺序。可以使用 sortMethod 自定义的排序规则。如果需要后端排序，需将 sortable 设置为 custom，同时在 Table 上监听 on-sort-change 事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。

```hljs
<xn-table  :columns="columns1" :data="data1" @on-sort-change="handleSort" ></xn-table>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          sortable: "custom", // custom
          sortType: "asc",
          sortMethod(a, b, type) {
            return a.age - b.age;
          }
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleSort({ column, type }) {
      console.log(type);
    }
  }
};
</script>
```

\_\_
显示代码

## Attributes

| 参数    | 说明                                                                                                                                                                         | 类型          | 可选值 | 默认值 |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------ | ------ |
| data    | 显示的数据                                                                                                                                                                   | array         | —      | —      |
| columns | 表格列的配置描述，具体项见后文                                                                                                                                               | Array         | []     | -      |
| height  | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string/number | —      | —      |
| stripe  | 是否为斑马纹 table                                                                                                                                                           | boolean       | —      | false  |
| border  | 是否带有纵向边框                                                                                                                                                             | boolean       | —      | false  |

## [\#](https://ui.fullstackjavascript.cn/components/data/table.html#table-events) Table Events

| 事件           | 说明                               | 参数                                       |
| -------------- | ---------------------------------- | ------------------------------------------ |
| on-select      | 在多选模式下有效，选中某一项时触发 | selection：已选项数据；row：刚选择的项数据 |
| on-select-all  | 在多选模式下有效，点击全选时触发   | selection：已选项数据                      |
| on-sort-change | 排序时有效，当点击排序时触发       | column：当前列数据；key：排序依据的指标    |
