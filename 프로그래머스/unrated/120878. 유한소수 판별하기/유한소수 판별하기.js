function solution(a, b) {
   
    for(let k=2; k<=Math.min(a, b); k++){
		while((a % k == 0) && (b % k == 0)) {
		   a = Math.floor(a / k); 
		   b = Math.floor(b / k);
		}
	  }
    
    
    while(b % 2 == 0 || b % 5 ==0 ) {
        
        if( b % 2 == 0) b = Math.floor(b / 2);
        
        if( b % 5 == 0) b = Math.floor(b / 5);
        
    }
    
    return b == 1 ? 1 : 2
        
    
    
}