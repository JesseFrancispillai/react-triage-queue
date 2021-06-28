import { createContext, useState } from 'react';

const QueueContext = createContext({
  queue: [],
  totalQueue: 0,
  addQueue: (queueElement) => {},
  removeQueue: (ticketId) => {},
  itemInQueue: (ticketId) => {},
});


class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
    return this.values;
  }

  bubbleUp() {
    //get index of inserted element
    let index = this.values.length - 1;
    //loop while index is not 0 or element no loger needs to bubble
    while (index > 0) {
      //get parent index via formula
      let parentIndex = Math.floor((index - 1) / 2);
      //if values is greater than parent, swap the two
      if (this.values[parentIndex].priority > this.values[index].priority) {
        //swap with helper method
        this.swap(index, parentIndex);
        //change current index to parent index
        index = parentIndex;
      } else {
        break;
      }
    }
    return 0;
  }

  enqueue(value) {
    this.values.push(value);
    //calculate parent, if parent is greater swap
    //while loop or recurse
    this.bubbleUp();
    return this.values;
  }

  bubbleDown() {
    let parentIndex = 0;
    const length = this.values.length;
    const elementPriority = this.values[0].priority;
    //loop breaks if no swaps are needed
    while (true) {
      //get indexes of child elements by following formula
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChildPriority, rightChildPriority;
      let indexToSwap = null;
      // if left child exists, and is greater than the element, plan to swap with the left child index
      if (leftChildIndex < length) {
        leftChildPriority = this.values[leftChildIndex].priority;
        if (leftChildPriority < elementPriority) {
          indexToSwap = leftChildIndex;
        }
      }
      //if right child exists
      if (rightChildIndex < length) {
        rightChildPriority = this.values[rightChildIndex].priority;

        if (
          //if right child is greater than element and there are no plans to swap
          (rightChildPriority < elementPriority && indexToSwap === null) ||
          //OR if right child is greater than left child and there ARE plans to swap
          (rightChildPriority < leftChildPriority && indexToSwap !== null)
        ) {
          //plan to swap with the right child
          indexToSwap = rightChildIndex;
        }
      }
      //if there are no plans to swap, break out of the loop
      if (indexToSwap === null) {
        break;
      }
      //swap with planned element
      this.swap(parentIndex, indexToSwap);
      //starting index is now index that we swapped with
      parentIndex = indexToSwap;
    }
  }

  dequeue() {
    //swap first and last element
    this.swap(0, this.values.length - 1);
    //pop max value off of values
    let poppedNode = this.values.pop();
    //re-adjust heap if length is greater than 1
    if (this.values.length > 1) {
      this.bubbleDown();
    }

    return poppedNode;
  }
}

var pqueue = new PriorityQueue();

export function QueueContextProvider(props) {
  const [queueElements, setQueueElements] = useState([]);

  function addQueueHandler(queueElement) {
    //setQueueElements((prevQueueElements) => {
    //    return prevQueueElements.concat(queueElement);
    //});

    //var tempQueue = queueElements.slice().concat(queueElement);
    //tempQueue.sort((a, b) => (a.priority < b.priority ? 1 : -1));
    setQueueElements(pqueue.enqueue(queueElement));
    //pqueue.items.push(1);
    //console.log(pqueue.items);
  }

  function removeQueueHandler(ticketId) {
    setQueueElements((prevQueueElements) => {
      return prevQueueElements.filter((ticket) => ticket.id != ticketId);
    });
  }

  function itemInQueueHandler(ticketId) {
    return queueElements.some((ticket) => ticket.id === ticketId);
  }

  const context = {
    queue: queueElements,
    totalQueue: queueElements.length,
    addQueue: addQueueHandler,
    removeQueue: removeQueueHandler,
    itemInQueue: itemInQueueHandler,
  };

  return (
    <QueueContext.Provider value={context}>
      {props.children}
    </QueueContext.Provider>
  );
}

export default QueueContext;
