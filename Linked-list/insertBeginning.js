function Node(data) {
   this.data = data;
   this.next = null;
}

let list = new Node(25);
let list2 = new Node(50);
let list3 = new Node(75);
let list4 = new Node(100);
let list5 = new Node(125);

// to concate 
list.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;


// to insert new node at the beginning
let newValue = new Node(85);
newValue.next = list;
list = newValue;  // update 


// // to insert new node at the end
let newVal = new Node(200);
let currentNode = list;
while (currentNode.next !== null) {
   currentNode = currentNode.next;
}

currentNode.next = newVal;

// insert at the 3rd node
let item = new Node("Nitish");
let nodeCount = 1;
let ptr = list; // Changed from this.head to list
while (nodeCount < 2) { // Changed from 3 to 2 to insert after the 2nd node
   ptr = ptr.next;
   nodeCount++;
}
item.next = ptr.next; // Connect the new node to the rest of the list
ptr.next = item; // Connect the previous node to the new node
// console.log(ptr.data); // Changed from prt to ptr

function traverse(head) {

   let currentNode = head;
   while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
   }
}

traverse(list);