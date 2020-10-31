/**
 * Instructions:
 * 
 * Given the root to a binary tree, implement serialize(root), wich serializes the tree into a string, and deserialize(s),
 * which deserializes the string back into the tree.
 * 
 * For example, given the following Node class
 * 
 *  class Node:
 *      def __init__(self, val, left = None, right = None):
 *          self.val = val
 *          self.left = left
 *          self.right = right
 * 
 * The following test should pass:
 * 
 *      node = Node('root',
 *      Node('left',
 *      Node('left.left')),
 *      Node('right'))
 * 
 *      assert deserialize(serialize(node)).left.left.val == 'left.left'
 * 
 * Author: Mauricio Farfan
 * Asked on: 19/10/2020
 * Completed: NOT COMPLETED YET
 * Time elapsed: 35 mins
*/

class Node 
{
    constructor (val, left = null, right = null)
    {
        this.val = val;
        this.left = left;
        this.rigth = right;
    }
}



//let node = new Node("root", new Node("left", new Node("left.left")), new Node("right"))
var node = new Node("root", 
new Node("left", new Node("left.left")), 
new Node("right", new Node("right.left"), new Node("right.right")));

function serialize(root) {
    let outputString = "";

    if (root === null) return outputString;
    
    let treeStack = [];
    treeStack.push(root);

    while (treeStack.length != 0)
    {
        const node = treeStack.shift();
        console.log(node);

        if (node === null) 
        {
            outputString += '* ';
        } 
        else 
        {
            outputString += node.val;
            treeStack.push(node.left);
            treeStack.push(node.right);
        }
    }
    console.log(outputString);
}

serialize(node);