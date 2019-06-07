var LinkedList = function () {
    //初始化链表
    //链表头
    var head = null;
    //链表长度
    var length = 0;
    var Node = function (element) {
        this.item = element;
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
                var current=head;
                var previous=null;
                var index=0;
                while(index<position){
                    previous=current;
                    current=current.next;
                    index++;
                }

                previous.next=node;
                node.next=current;

            } else {
                var current = head;
                head = node;
                head.next=current.next;
                
            }
            length++;
        }      
    }
    this.remove=function(position){
        //越界
        if (position >= 0 && position < length) {
            if (position > 0) {
                var current=head;
                var previous=null;
                var index=0;
                while(index<position){
                    previous=current;
                    current=current.next;
                    index++;
                }
                previous.next=current.next;
            } else {
                var current = head;
                head=current.next;
            }
            length--;
        }      
    }


    //获取元素索引
    this.indexOf=function(element){
        var current=head;
        var index=0;
        while (current){
            if(element===current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    }

    this.getHead = function () {
        return head;
    }

}