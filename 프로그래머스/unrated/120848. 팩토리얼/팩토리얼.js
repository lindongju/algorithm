function solution(n) {
    
    return Array(11).fill(1).map((v,i) => v + i).reduce((a,b,i,arr) => { if(a*b > n) {arr.splice(i); return i  ;} ; return a*b;})   
}