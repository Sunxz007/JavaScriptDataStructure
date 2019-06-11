//双向链表
var DoublyLinkedList = function () {
    //属性：head 链表头
    var head = null;
    //属性：tail 链表尾
    var tail = null;
    //属性：length 链表长度;
    var length = 0;
    //内部类，用于封装链表元素
    var Node = function (element) {
        this.pre = null;
        this.element = element;
        this.next = null;
    }
    //向尾部添加元素
    DoublyLinkedList.prototype.append = function (element) {
        //创建一个节点
        var node = new Node(element);
        //判断是否为第一个元素
        if (length == 0) {
            head = node;
            tail = node;
        } else {
            node.pre = tail;
            tail.next = node;
            tail = node;
        }
        length++;
    }

    //插入到某个位置
    DoublyLinkedList.prototype.insert = function (position, element) {
        //越界判断
        if (position >= 0 && position <= length) {
            //创建节点
            var node = new Node(element);
            //判断链表是否为空
            if (length == 0) {
                head = node;
                tail = node;
            } else {
                //当在头部插入时
                if (position === 0) {
                    head.pre = node;
                    node.next = head;
                    head = node;
                    //为部插入时
                } else if (position == length) {
                    tail.next = node;
                    node.pre = tail;
                    tail = node;
                } else {
                    var current = head;
                    var index = 0;
                    while (index < position) {
                        current = current.next;
                        index++;
                    }
                    //修改指针
                    node.next = current;
                    node.pre = current.pre;
                    current.pre.next = node;
                    current.pre = node;
                }
            }
            length++;
            return true;

        }
        return false;
    }

    //根据位置获取元素
    DoublyLinkedList.prototype.get = function (position) {
        //越界判断
        if (position >= 0 && position < length) {
            /**
             * 默认从前向后判断，为保证效率最高，当position>length/2 的时候，可以从后遍历元素获取值
             */
            //获取元素
            var current = head;
            var index = 0;
            while (index < position) {
                current = current.next;
                index++;
            }
            return current;
        }
        return null;
    }

    //根据元素获取指针位置
    DoublyLinkedList.prototype.indexOf = function (element) {
        var current = head;
        var index = 0;
        while (current) {
            if (current.element == element) {
                return index;
            }
            current = current.next;
            index++
        }
        return -1;
    }

    //更新链表元素
    DoublyLinkedList.prototype.update = function (position, element) {
        if (position >= 0 && position < length) {

            /**
             * 同get方法，可在position>length/2的时候从后向前遍历来提高速度
             */
            var current = head;
            var index = 0;
            while (index < position) {
                current = current.next;
                index++
            }
            current.element = element;
            return true;
        }
        return false;
    }

    //移除指定位置的元素
    DoublyLinkedList.prototype.removeAt=function(position){
        if(position>=0 && position<length){
            if(length==1){
                var current=head;
                head=null;
                tail=null;


            }else{
                if(position==0){
                    var current=head;
                    head.next.pre=null;
                    head=head.next;
                }else if(position==length-1){
                    var current=tail;
                    tail.pre.next=nulll;
                    tail=tail.pre;
                }else{
                    var current=head;
                    var index=0;
                    while(index<position){
                        current=current.next
                        index++
                    }
                    current.pre.next=current.next;
                    current.next.pre=current.pre;
                }
            }
            length--;
            return current.element;
        }
        return false;
    }

    //移除指定元素
    DoublyLinkedList.prototype.remove=function(element){
        return this.removeAt(this.indexOf(element));
    }

    //将链表转边为字符串方法
    //1.1 toSring
    DoublyLinkedList.prototype.toString = function () {
        return this.backwaString();
    }

    //2.2 forwardString方法，从前拼接字符
    DoublyLinkedList.prototype.forwardString = function () {
        //定义变量
        var current = tail;
        var res = "";
        //依次向前遍历，获取每一个节点
        while (current) {
            res += current.element
            current = current.pre
        }
        return res;
    }

    //2.3 backwardString方法 向后拼接字符串
    DoublyLinkedList.prototype.backwaString = function () {
        //定义变量
        var current = head;
        var res = "";
        //依次向后遍历，获取每一个节点
        while (current) {
            res += current.element
            current = current.next
        }
        return res;
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
        return head

    }

}