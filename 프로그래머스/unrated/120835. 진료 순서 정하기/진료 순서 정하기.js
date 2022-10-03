function solution(emergency) {
   
    var answer = emergency.map(v=>v);
    
    answer.sort((a,b) => b-a);
    
    return emergency.map((v, i) => answer.indexOf(v) + 1);
}