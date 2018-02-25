/**
 * Your debounce function goes here
 * function(){}
 */

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

function debounce(callback, timeout) {
    let timerId;
    return () => {
        clearTimeout(timerId);
        timerId = setTimeout(callback, timeout);
    }
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'
