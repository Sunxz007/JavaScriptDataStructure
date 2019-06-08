
//字典
var Dictionary = function () {
    var items = {};

    this.has = function (key) {
        return items.hasOwnProperty(key);
        //方法二
        //return key in items
    }

    this.set = function (key, value) {
        items[key] = value;
    }

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    this.get = function (key) {
        if (this.has(key)) {
            return items[key];
        }
        return undefined;
    }
    this.getItems = function () {
        return items;
    }

}


//字典的应用：哈希表(散列表)
var HashTable = function () {
    var items = [];
    //散列函数=>number=>items[number]
    //通过ascii码转换 a=>97

    var loseloseHashCode = function (key, value) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
        }
        // 这里除以素数37是为了降低计算出重复hash的概率（后续会处理hash重复的问题）
        return hash % 37;
    }
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        items[position]=value;
    }
    this.remove=function(key){
        items[loseloseHashCode(key)]=undefined;
    }
    this.get=function(key){
        return items[loseloseHashCode(key)];
    }
    this.getItems=function(){
        return items;
    }

}