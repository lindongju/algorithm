function solution(n) {
    
    return Array(n).fill(1).map((v,i) => v+i).filter((v,i) => n % v === 0).reduce((a,b) => a+b, 0);
}