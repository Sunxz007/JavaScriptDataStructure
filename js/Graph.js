//邻接表图
var Graph = function () {
    //定点
    var vertices = [];
    //边
    var adjList = {}

    //1.添加定点
    this.addvertex = function (v) {
        vertices.push(v);

        adjList[v] = []
    }
    //2.添加边
    this.addEdge = function (a, b) {
        adjList[a].push(b);
        adjList[b].push(a);
    }
    this.print = function () {
        var s = '\n';
        for (var i = 0; i < vertices.length; i++) {
            var v = vertices[i];
            s += v + "=>";
            var e = adjList[v];
            for (var j = 0; j < e.length; j++) {
                s += e[j]
            }
            s += '\n'
        }
        console.log(s);
    }

    //广度遍历方法
    /**
     * 编辑节点颜色
     * white=>未发现
     * grey=>已发现，未探索
     * black=>已探索
        color={
     *  A:"white",
     *  B:"white",
     *  ...}
     */
    var initColor = function () {
        var color = {};
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'
        }
        return color;
    }

    this.bfs = function (v, callback) {
        //初始化元素的颜色
        var color = initColor();
        //创建一个队列存储节点
        var queue = new Queue();
        //先将要遍历的节点存储到队列中
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            //获取队列中需要遍历的子节点
            var now = quque.dequeue();
            //遍历节点的边
            var e = adjList[now];
            for (var i = 0; i < e.length; i++) {
                var w = e[i];
                if (color[w] === 'white') {
                    //为发现的全部入列，并标记为已发现
                    color[w] = 'grey';
                    queue.enqueue(w);
                }

            }
            color[now] = 'black';
            if (callback) {
                callback(now);
            }
        }
    }

    //广度优先遍历的路径算法
    this.bfs2 = function (v, callback) {
        //初始化元素的颜色
        var color = initColor();
        //创建一个队列存储节点
        var queue = new Queue();
        //先将要遍历的节点存储到队列中
        queue.enqueue(v);
        //记录距离d(distance)
        var d = {};
        //记录回溯路径pred
        var pred = {};
        //初始化记录d和回溯路径pred
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        //遍历节点队列
        while (!queue.isEmpty()) {
            //获取队列中需要遍历的子节点
            var now = queue.dequeue();
            //遍历节点的边
            var e = adjList[now];
            for (var i = 0; i < e.length; i++) {
                var w = e[i];
                if (color[w] === 'white') {
                    //为发现的全部入列，并标记为已发现
                    color[w] = 'grey';
                    queue.enqueue(w);
                    //设置回溯点
                    pred[w] = now;
                    //设置d
                    d[w] = d[now] + 1
                }
            }
            color[now] = 'black';
            if (callback) {
                callback(now);
            }
        }
        return {
            d: d,
            pred: pred
        }
    }
    //深度优先遍历
    var dfsVisite=function(u,color,callback){
        color[u]='grey';
        var n=adjList[u]
        for(var i=0;i<n.length;i++){
            var w=n[i];
            if(color=='white'){
                dfsVisite(w,color,callback);
            }
        }
        color[u]='black';
        callback(u);
        
    }
    this.dfs=function(v,callback){
        var color=initColor();
        dfsVisite(v,color,callback)
    }
}
var g = new Graph;
g.addvertex("A")
g.addvertex("B")
g.addvertex("C")
g.addvertex("D")
g.addvertex("E")
g.addvertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("A", "D")
g.addEdge("C", "D")
g.addEdge("B", "F")
g.addEdge("B", "E")

//添加新路径
g.addEdge('D', "F");
//最短路径问题

var s = g.bfs2("A");
var minLength = function (begin, end) {
    var path = new Stack
    var v = end//设置当前点
        ;//获取回溯点
    while (v != begin) {
        path.push(v)
        v = s.pred[v]
    }
    path.push(v);
    var str = "";
    while (!path.isEmpty()) {
        str += path.pop() + "=>"
    }
    return str.slice(0,str.length-2);
}
var l=minLength("A", "F")
