var MySet = function () {

    var items = {};
    //has检查是否存在 return boolean
    this.has = function (value) {
        return items.hasOwnProperty(value);
    }
    //添加元素
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return value;
        }
        return false;
    }
    //移除集合某一元素
    this.remove = function () {
        if (!this.has(value)) {
            delete items[value];
            return items[value];
        }
        return null;
    }
    //清空集合
    this.clear = function () {
        items = {}
    }
    //集合打下
    this.size = function () {
        return Object.keys(items).length
    }

    //获取集合元素
    this.value = function () {
        var values = [];
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                values.push(items[i])
            }
        }
        return values;
    }

    this.getItems = function () {
        return items;
    }
    //并集
    this.union=function(otherSet){
        //新建一个集合存放合并后的集合
        var resultSet=new MySet();
        
        //1.把自己的值提取出来
        for(var i in items){
            if(items.hasOwnProperty(i)){
                resultSet.add(items[i])
            }
        
        //2.把另一只集合的值提取出来
        arr=otherSet.value();
        for(var i =0;i<arr.length;i++){
            resultSet.add(arr[i])
        }
        return resultSet;
        }
    }

    //交集
    this.intersection=function(otherSet){
        var resultSet=new MySet();
        
        var arr=this.value();
        for(var i =0;i<arr.length;i++){
            if(otherSet.has(arr[i]) && !resultSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }

        return resultSet;
    }

    //差集
    this.difference=function(otherSet){
        var resultSet=new MySet();

        var arr=this.value();
        for(var i =0 ;i<arr.length;i++){
            if(!otherSet.has(arr[i]) && !resultSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet;
    }

}
var s1=new MySet();
s1.add(1);
s1.add(2);
s1.add(3);
var s2=new MySet();
s2.add(2);
s2.add(3);
s2.add(4);

var s=new Set;
s.add(3);
s.add(2);
s.add(1);
//es6中的额外的set方法
//forEach
s.forEach(function(value1,value2,value3){
    console.log("value1-"+value1);//set元素的值
    console.log("value2-"+value2);//set元素的指针
    console.log("value3-"+value3);//set实例对象s
})

//entries迭代器
var interator=s.entries();
console.log(interator.next().value);

//es解构
var a=[1,2,3,4];
var b=[4,3,2,1];
a.concat(b) //return [1,2,3,4,4,3,2,1]
var crr=[...a] //crr=[1,2,3,4]
crr=[...a,...b]//crr=[1,2,3,4,4,3,2,1]

//es6中Set的合并
var a=new Set([1,2,3])
var b=new Set([4,3,2])
//交集
var union=new Set([...a,...b])
//并集
var intersect=new Set([...a].filter(x=>b.has(x)))
/**
 * 等同于
 * var intersect=new Set([...a].filter(function(x){
 *      return b.has(x) //数组的filter方法，条件函数，如果存在b则返回值
 * }))
 */
//差集
var difference=new Set([...a].filter(x=>!b.has(x)));

//WeakSet
//Weakset只能添加对象作为元素
var s=new WeakSet();
var o={name:"小明"}
s.add(o)
console.log(s.has(o));//return true
console.log(s);
o=null;//o清空后s中也为空了





