
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

var HashTable2=function(){
    var table=[];
    var loseloseHashCode = function (key, value) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
        }
        // 这里除以素数37是为了降低计算出重复hash的概率（后续会处理hash重复的问题）
        return hash % 37;
    }
    var Node=function(key,value){
        this.key=key;
        this.value=value;
    }
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        if(table[position]){
            table[position].append(new Node(key,value));
        }else{
            var l=new LinkedList();
            table[position]=l;
            table[position].append(new Node(key,value));
        }

    }
    this.get=function(key){
        var position=loseloseHashCode(key);
        if(table[position]){

            //链表属性查找
            var current=table[position].getHead();
            while(current){
                if(current.item.key==key){
                    return current.item.value;
                }
                current=current.next;
            }
        }else{
            return undefined;
        }
    }

    this.remove=function(key){
        var position=loseloseHashCode(key);
        if(table[position]){
            var previous=null;
            var current=table[position].getHead();
            
            while(current.next){
                if(current.item.key==key){
                    table[position].remove(current.item)
                    return true;
                }
                current=current.next
            }
            if(current.item.key==key){
                table[position].remove(current.item)
                if(table[position].isEmpty()){
                    table[position]=undefined;
                }
                return true;
            }
            return false;
        }else{
            return false;
        }
    }
    this.getTable=function(){
        return table;
    }
}