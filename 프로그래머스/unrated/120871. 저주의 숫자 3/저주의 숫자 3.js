function solution(n) {
    let cnt = 0;
    for(let i = 1; i <= n; i++) {
        
        cnt++;
        while(String(cnt).indexOf('3') > -1 || cnt % 3 === 0) {
            
            cnt++;
        }
    }
    
    return cnt;
}