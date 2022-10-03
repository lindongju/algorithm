function solution(board) {
    
    let danger = [[-1,-1], [-1,0], [-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    
    for (let i = 0; i < board.length; i++) {
        
        for(let j = 0; j < board.length; j++) {
            
            if(board[i][j] === 1) {
             
                for(let k = 0; k < danger.length; k++) {
                       
                    let ci = i + danger[k][0];
                    let cj = j + danger[k][1];
                    
                    
                    
                    if ( ci < 0 || ci >= board.length || cj < 0 || cj >= board.length || board[ci][cj] === 1) 
                        continue;
                    
                    board[ci][cj] = -1;
                }
            }
        }
    }
    
    return board.map(v => v.filter(v => v !== 0).length).reduce((a,b) => a-b, board.length*board.length);
   
}