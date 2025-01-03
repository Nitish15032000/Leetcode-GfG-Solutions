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

function traverse(head) {

   let currentNode = head;
   while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
   }
}

// Call the traverse function
traverse(list);
console.log("after the list 3 :");

traverse(list3);