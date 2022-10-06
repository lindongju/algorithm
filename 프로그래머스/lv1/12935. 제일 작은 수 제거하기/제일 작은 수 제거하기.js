function solution(arr) {
    
    let tmpArr = arr.slice();
    
    tmpArr.sort(function(a,b) {return a-b});
    
    arr.length == 1 ? arr.fill(-1) : arr.splice(arr.indexOf(tmpArr[0]), 1);
    
    return arr;
}