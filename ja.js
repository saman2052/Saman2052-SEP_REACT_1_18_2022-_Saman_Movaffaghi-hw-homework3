const arr = [1, 2, 3];

//Map 
Array.prototype.myMap = function (cb) {
    const resultArr = [];
    for (let i = 0; i < this.length; i++) {
        resultArr.push(cb(this[i], i, this));
    }
    return resultArr;
}
console.log(arr.myMap(((num) => num * 10)));


//Filter 
Array.prototype.myFilter = function (cb) {
    const filterdArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            filterdArr.push(this[i]);
        }
    }
    return filterdArr;
}
console.log(arr.myFilter((num) => (num < 3)));

//reduce 
Array.prototype.myReduce = function (cb, init) {
    for (let i = 0; i < this.length; i++) {
        init = cb(init, this[i], i, this);
    }
    return init;
}

console.log(arr.myReduce((acc, curr) => (acc += curr), 0));

//some
Array.prototype.mySome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true;
        }
    }
    return false;
}
console.log(arr.mySome((cur) => (cur > 1)));

//every 
Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false;
        }
    }
    return true;

}
console.log(arr.myEvery((curr) => curr < 4));