function solution(chicken) {
    let answer = 0;
    let rem = 0;
    
    while(chicken >= 10) {
        
        rem += Math.floor(chicken/10);
      
        chicken = Math.floor(chicken/10) + chicken % 10;
        
    }
    
    return rem;
}