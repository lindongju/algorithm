function solution(box, n) {
    
    
   return box.map(v => v - (v%n)).reduce((a,b) => a * b) / Math.pow(n,3)
}