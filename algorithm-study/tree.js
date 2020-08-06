//二叉树
function BinaryTree() {
    
  // 节点结构
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  };

  //根节点
  var root = null;

    //新增节点
  var insertNode = function(node, newNode){
    //约定右孩子都大于左孩子节点
    if(newNode.key < node.key){
      if(node.left === null){//没有左孩子，则新增左孩子
        node.left = newNode;
      } else {
      //如果有左孩子则递归算法实现插入左孩子节点
        insertNode(node.left, newNode);
      }
    } else {
      //如果右孩子为null，则新增右孩子
      if(node.right===null){
        node.right = newNode;
      }else{
        //如果有左孩子则递归算法实现插入右孩子节点
        insertNode(node.right,newNode);
      }
    }
  };
    // 插入新节点
  this.insert =function(key){
    //创建节点
    var node = new Node(key);
    if(root === null){//判断是否为根节点
      root = node;
    }else {
    // 不是根节点则新增节点
      insertNode(root, node);
    }
  };

  // 中序遍历二叉树
  var traverseNodesLDR = function(node, callback){
    if(node !== null){
      traverseNodesLDR(node.left,callback)
      callback(node.key)
      traverseNodesLDR(node.right,callback)
    }
  }
  // 中序遍历算法
  this.LDR = function(callback){
    traverseNodesLDR(root, callback)
  }

}

function callback (value) {
  console.log(value)
}

//构建二叉树
var nodes = [6,2,3,4,9,8,7,12,1,22]
var binaryTree = new BinaryTree();
nodes.forEach(key =>  binaryTree.insert(key) )

// 中序遍历
binaryTree.LDR(callback)
