
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


//10进制转换为二进制
var DecToBin =function(Dec){
    //创建一个栈变量存储数据
    var s=new Stack;
    //穿件一个变量存储每次计算的余数
    var remainder
    while(Dec>0){
        remainder=Dec%2;
        s.push(remainder);
        Dec=Math.floor(Dec/2);
    }
    var result="";
    while(!s.isEmpty()){
        result=result+s.pop()
    }
    return result;
}