class SmartCalculator {
  constructor(initialValue) {
    this.result = [].concat([initialValue]);
  }

  add(number) {
    this.result.push("+", number);
    return this;
  }

  subtract(number) {
    this.result.push("-", number);
    return this;
  }

  multiply(number) {
    this.result.push("*", number);
    return this;
  }

  devide(number) {
    this.result.push("/", number);
    return this;
  }

  pow(number) {
    this.result.push("^", number);
    return this;
  }

  valueOf() {

    var arr = this.result;
    var arrLength = this.result.length;
    
    for(var i = arrLength; i >= 0; i--) {
      if(arr[i] == "^") {
        arr.splice(i - 1, 3, Math.pow(arr[i - 1], arr[i + 1]));
        i = arrLength;
      }
      arrLength = arr.length;
    }

    for(var i = arrLength; i >= 0; i--) {
      if(arr[i] == "*") {
        arr.splice(i - 1, 3, arr[i - 1] * arr[i + 1]);
        i = arrLength;
      } else if (arr[i] == "/") {
        arr.splice(i - 1, 3, arr[i - 1] / arr[i + 1]);
        i = arrLength;
      }
      arrLength = arr.length;
    }
    
    for(var i = 0; i < arrLength; i++) {
      if(arr[i] == "+") {
        arr.splice(i - 1, 3, +arr[i - 1] + +arr[i + 1]);
        i = 0;
      } else if (arr[i] == "-"){
        arr.splice(i - 1, 3, arr[i - 1] - arr[i + 1]);
        i = 0;
      }
      arrLength = arr.length;
    }

    return arr[0];
  }
}

module.exports = SmartCalculator;