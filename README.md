# JavaScriptDataStructure
## 一、数据结构 
### 1.1 栈
> **定义：** 一种先进后出（LIFO）的数据结构

  **<center><font size="6">栈结构示意图</font></center>**
![栈的示意图](./img/栈.png)

 **<center><font size="6">栈的操作</font></center>**
![栈的操作示意图](./img/栈的操作.png)

**<font size="6">栈的方法实现</font>**

| 方法名  | 操作           |
| ------- | -------------- |
| push    | 栈顶添加元素   |
| pop     | 栈顶移除元素   |
| peek    | 查看栈顶       |
| isEmpty | 检查栈是否为空 |
| clear   | 移除全部元素   |
| size    | 获取栈的长度   |

[**代码示例**](./js/Stack.js)
``` javascript

//定义一个栈的类
var Stack = function () {

    //创建栈的载体数组items
    var items = [];

    //push栈顶添加元素
    this.push = function (element) {
        items.push(element);
    }

    //pop移除栈顶元素
    this.pop = function () {
        return items.pop();
    }

    //peek获取栈顶
    this.peek = function () {

        return items[items.length - 1];
    }

    //isEmpty检查栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    //clear清空栈
    this.clear = function () {
        items = [];
    }

    //size获取栈的大小
    this.size=function(){
        return items.length;
    }
    
    //获取整个栈
    this.getitems = function () {
        return items;
    }
}
```

### 1.2队列 

### 1.3链表
### 1.4集合
### 1.5字典
### 1.6树
### 1.7图
## 二、算法
### 2.1 排序
#### 2.1.1 冒泡排序
#### 2.1.2 选择排序
#### 2.1.3 插入排序
#### 2.1.4 归并排序

### 2.2 搜索算法
#### 2.2.1 顺序搜索
#### 2.2.2 二分搜索

### 2.3 算法模式
#### 2.3.1 递归
#### 2.3.2 动态规划
#### 2.3.3 贪心算法
