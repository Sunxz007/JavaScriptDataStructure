//单向链表
var LinkedList = function () {
    //初始化链表
    //链表头
    var head = null;
    //链表长度
    var length = 0;
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    //尾部添加元素
    this.append = function (element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            var current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    //插入元素
    this.insert = function (position, element) {
        //越界
        if (position >= 0 && position < length) {

            var node = new Node(element);

            if (position > 0) {
                var current = head;
                var previous = null;
                var index = 0;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }

                previous.next = node;
                node.next = current;

            } else {
                var current = head;
                head = node;
                head.next = current;

            }
            length++;
        }
    }
    //从链表特定位置移除一项
    this.removeAt = function (position) {
        //越界
        if (position >= 0 && position < length) {
            if (position > 0) {
                var current = head;
                var previous = null;
                var index = 0;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            } else {
                var current = head;
                head = current.next;
            }
            length--;
        }
    }

    //根据位置信息获取元素
    this.get=function(position){
        if(position>=0 && position<length){
            var current=head;
            var index=0
            while(index<position ){
                current=current.next;
                index++;
            }
            return current.element;
        }
        return null;
        
    }

    //获取元素索引
    this.indexOf = function (element) {
        var current = head;
        var index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    //根据位置信息修改元素
    this.update=function(position,element){
        if(position>=0 && position<length){
            var current=head;
            var index=0;
            while(index<position){
                current=current.next;
                index++;
            }
            current.element=element
            return true
        }
        return -1;
    }

    //从指定位置删除
    this.remove = function (element) {
        return removeAt(indexOf(element));
    }
    //判断链表是否为空
    this.isEmpty = function () {
        return length === 0;
    }
    //获取链表长度
    this.size = function () {
        return length;
    }

    this.getHead = function () {
        return head;
    }
}