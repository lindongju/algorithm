function solution(s){
  
    var splitArr = s.toString().split("");
    var yCnt = splitArr.filter(word => word.toUpperCase() === 'Y').length;
    var pCnt = splitArr.filter(word => word.toUpperCase() === 'P').length;
    

    return yCnt === pCnt;
}