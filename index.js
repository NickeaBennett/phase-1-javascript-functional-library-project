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
     let counter;
     let final;
     
     if (acc === undefined) {
         acc = col[0];
         for (let i = 1; i < newArr.length; i++) {
             let acc = callBack(acc, newArr[i], collection);
         }
         
     }
     return acc
 }