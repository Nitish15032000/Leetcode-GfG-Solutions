class print {
    constructor(head) {
      let currentNode = head;
      while (currentNode != null) {
         console.log(currentNode.data);
         currentNode = currentNode.next;
      }
    }
}

