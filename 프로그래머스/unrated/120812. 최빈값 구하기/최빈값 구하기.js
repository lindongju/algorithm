function solution(array) {
 
    let setArr = [...new Set(array)];
    
    let calArr = setArr.map((v,i) => array.filter(dv => dv == v).length);
    
    let rsltArr = calArr.map((mv,mi) => { if(mv == Math.max(...calArr)) return mi; return -1}).filter(v => v != -1)
    
    return rsltArr.length > 1 ? -1 : setArr[rsltArr[0]];
}