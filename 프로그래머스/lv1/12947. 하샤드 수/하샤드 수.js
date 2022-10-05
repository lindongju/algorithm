function solution(x) {
   
    var numSum = [...x.toString()].reduce( (a,b) => parseInt(a) + parseInt(b));
    
    return x % numSum <= 0;
    
}