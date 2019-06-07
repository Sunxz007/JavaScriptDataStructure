var Queue = function () {
    //使用数组作为队列的载体
    var items = [];

    //入列
    this.enqueue = function (element) {
        items.push(element);
    }

    //出列
    this.dequeue = function () {
        return items.shift();
    }

    //查看队列头
    this.front = function () {
        return items[0];
    }

    //检查队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    //获取队列长度
    this.size = function () {
        return items.length;
    }

    //获取全部队列
    this.getItems = function () {
        return items;
    }
}

//击鼓传花例题
var chuanhua = function (number) {
    //
    var q = new Queue;
    var gamer = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    for (var i = 0; i < gamer.length; i++) {
        q.enqueue(gamer[i])
    }

    while (q.size() > 1) {

        var j = 1
        while (j < number) {
            q.enqueue(q.dequeue());
            j++;
        }

        var out = q.dequeue();
        console.log(out);
    }
    return q.front();
}

//优先队列
var PriorityQueue = function () {
    var items = [];

    //设定一个辅助类，存储队列元素的和队列元素的优先级数据
    var QueueItem = function (element, priority) {
        this.element = element;
        this.priority = priority;
    }
    //入列
    this.enqueue = function (element, priority) {

        var queueItem = new QueueItem(element, priority);
        //设定一个辅助变量，判断元素是否已经插入队列
        var add = false;
        //遍历队列检查每个元素的优先级
        for (var i = 0; i < items.length; i++) {
            //加入待插入元素的优先级大于遍历的元素，则在该元素前插入元素
            if (queueItem.priority > items[i].priority) {
                items.splice(i, 0, queueItem);
                //插入后辅助变量变为true，退出循环
                add = true;
                break;
            }
        }
        if (!add) {
            items.push(queueItem);
        }


    }

    //出列
    this.dequeue = function () {
        return items.shift();
    }

    //查看队列头
    this.front = function () {
        return items[0];
    }

    //检查队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    //获取队列长度
    this.size = function () {
        return items.length;
    }
    
    this.getItems = function () {
        return items;
    }


    
}
