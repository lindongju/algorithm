function solution(n) {
    
    
    return +n.toString().split("").sort(function(a,b) {return b-a;}).join("");
}