function getIndexToIns(arr, num) {

    for (let i = 0; i<arr.length; i++){
      for (let j = 0; j < arr.length - i - 1; j++){
      if (arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
  }
  const a = arr;
  console.log(a);
  for (let i= 0; i<a.length; i++){
    if(num > a[i] && num <= a[i+1]){
      return i+1
    }else if(num < a[i]){
      return 0;
    }
  }if(num > a[a.length-1]){
    a.push(num);
    return a.length-1
  }
  return 0;
}
