function myEach(collection, callback) {
    // check if the collection is an array or an object
    if (Array.isArray(collection)) {
      // iterate over the array using a for loop
      for (let i = 0; i < collection.length; i++) {
        // call the callback function with the current element
        callback(collection[i], i, collection);
      }
    } else {
      // iterate over the object using a for-in loop
      for (let key in collection) {
        // call the callback function with the current value
        callback(collection[key], key, collection);
      }
    }
    // return the original collection
    return collection;
}

  function myMap(collection, callback) {
    let newArray = []; // create an empty array to hold the transformed values
    // check if the collection is an array or an object
    if (Array.isArray(collection)) {
      // iterate over the array using a for loop
      for (let i = 0; i < collection.length; i++) {
        // call the callback function with the current element and push the result into the new array
        newArray.push(callback(collection[i], i, collection));
      }
    } else {
      // iterate over the object using a for-in loop
      for (let key in collection) {
        // call the callback function with the current value and push the result into the new array
        newArray.push(callback(collection[key], key, collection));
      }
    }
    return newArray; // return the new array
}

function myReduce(collection, callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : Object.values(collection)[0];
  
    if (Array.isArray(collection)) {
      for (let i = initialValue !== undefined ? 0 : 1; i < collection.length; i++) {
        acc = callback(acc, collection[i], i, collection);
      }
    } else {
      let keys = Object.keys(collection);
      let startIndex = initialValue !== undefined ? 0 : 1;
  
      for (let i = startIndex; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], keys[i], collection);
      }
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    // check if the collection is an array or an object
    if (Array.isArray(collection)) {
      // iterate over the array using a for loop
      for (let i = 0; i < collection.length; i++) {
        // call the predicate function with the current element, return the element if the predicate is true
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      // iterate over the object using a for-in loop
      for (let key in collection) {
        // call the predicate function with the current value, return the value if the predicate is true
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
 } // return undefined if no value passes the predicate

function myFilter(collection, predicate) {
    let filteredArray = [];
    // check if the collection is an array or an object
    if (Array.isArray(collection)) {
      // iterate over the array using a for loop
      for (let i = 0; i < collection.length; i++) {
        // if the predicate is true for the current element, add it to the filteredArray
        if (predicate(collection[i], i, collection)) {
          filteredArray.push(collection[i]);
        }
      }
    } else {
      // iterate over the object using a for-in loop
      for (let key in collection) {
        // if the predicate is true for the current value, add it to the filteredArray
        if (predicate(collection[key], key, collection)) {
          filteredArray.push(collection[key]);
        }
      }
    }
    return filteredArray; // return the filteredArray
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      // If the collection is an array, simply return its length
      return collection.length;
    } else {
      // If the collection is an object, use Object.keys() to get an array of its keys and return its length
      return Object.keys(collection).length;
    }
  }

function myFirst(arr, n = 1) {
    if (n === 1) {
      return arr[0];
    } else {
      return arr.slice(0, n);
    }
  }

function myLast(array, n) {
    if (!Array.isArray(array)) {
      throw new TypeError('First parameter must be an array');
    }
    if (n === 0) {
      return [];
    }
    if (n) {
      return array.slice(-n);
    } else {
      return array.slice(-1)[0];
    }
  }

function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

function myValues(obj) {
    return Object.values(obj);
  }

