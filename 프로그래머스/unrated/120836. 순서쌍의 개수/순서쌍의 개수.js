function solution(n) {
//    n이 매개변수로 주어질때 곱이 n
//    for문으로 구할 때 
//    let cnt = 0;
//    for(let i = 1; i<=n; i++){
        
//        if (n % i === 0) {
//            cnt++;
//        }
//    }
//    return cnt;

//    for문으로 안구할 때
      return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length;
    
}