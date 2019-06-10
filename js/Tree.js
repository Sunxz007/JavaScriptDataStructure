var Tree = function () {
    //初始化根节点
    var root = null;
    //创建节点类
    var Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    var insertNode = function (node, newNode) {
        if (newNode.value > node.value) {
            //往右边走
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }

        } else if (newNode.value < node.value) {

            //往左走
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode);
            }
        }
    }



    //插入节点
    this.insert = function (value) {
        var node = new Node(value);
        //加入为空，则将新节点赋值给根节点
        if (root === null) {
            //空树
            root = node;
        } else {
            //加入树不为空，则执行插入方法
            insertNode(root, node);
        }

    }
    //搜索节点
    this.search = function () {

    }

    var traverse = function (node, callback) {
        if (node == null) return
        traverse(node.left, callback);
        traverse(node.right, callback);
        callback(node.value);

    }
    //遍历节点
    this.traverse = function (callback) {
        traverse(root, callback);
    }

    //删除节点
    var findMinNode=function(node){
        if(node==null){
            return null
        }else{
            while(node && node.left){
               node=node.left
            }
        }
        return  node;
    }

    var remodeNode=function(node,value){
        if(node==null) return null;
        if(node.value<value){
            //删除的值比节点值大，继续向右查找
            remodeNode(node.right,value)
            return node;
        }else if(node.value>value){
            //删除的值比节点值小，向左查找
            remodeNode(node.left,value)
            return node
        }else if(node.value==value){
            //假如两者相同
            //执行删除
            if(node.left==null&&node.right==null){
                node=null;
                return node;
            }

            //如果还有一个字节点
            //存在右边节点
            if(node.left==null&&node.right){
                node=node.right
                return node
            }else if(node.right==null&& node.left){
                node=node.left
                return node;
            }

            //如果存在两个几点，查找右边子节点的最小的子节点
            //查找右侧最小子几点
            var aux=findMinNode(node.right);
            //将右侧最小子节点的值赋值给要删除的节点
            node.value=aux.value
            //删除右侧最小子节点
            node.right=remodeNode(node.right,aux.value)
            return node;
        }


    }
    
    this.remove = function (key) {
        root=remodeNode(root,key)
           
    }
    this.getRoot = function () {
        return root;
    }
}

var t = new Tree
t.insert(9)
t.insert(5);
t.insert(4);
t.insert(17);
t.insert(24);

var print = function (value) {
    console.log(value)
}
t.traverse(print)