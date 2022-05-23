function isArray(collection) {
    let newArr;
    if (Array.isArray(collection)) {
        newArr = collection;
    } else {
        newArr = Object.values(collection)
    }
    return newArr
}

function myEach(collection, callBack) {
    let newArr =  isArray(collection);
    
    for( let i=0; i < newArr.length; i++) {
            callBack(newArr[i]);
    }
    return collection
}

function myMap(collection, callBack ) {
    let newArr = isArray(collection);
    const stuff = [];

    for (let i=0; i < newArr.length; i++) {
        let final = callBack(newArr[i]);
        stuff.push(final);
    }
    return stuff;
 }

 function myReduce(collection, callBack, acc) {
     let newArr = isArray(collection); 
     if (acc === undefined) {
         acc = newArr[0];
         for (let i = 1; i < newArr.length; i++) {
            acc = callBack(acc, newArr[i], collection);
         }
    } else {
        for (let i = 0; i < newArr.length; i++) {
            acc = callBack(acc, newArr[i], callBack);
        }
    }
    return acc;
}