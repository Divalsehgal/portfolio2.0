

let temp = [];
function flatt(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") {
      temp.push(arr[i]);
    } else {
      return temp.push(flatt([...arr[i]]));
    }
  }

  return temp;
}


//[8, 2, 3, 4, 6]
