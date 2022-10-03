function solution(score) {
    let answer = [];
    
    //1. 정렬한다
    //2. 순서를 구한다.
    //3. 순서에 맞춰 출력한다.
    score.map(v => v.reduce((a,b) => a+b)).sort((a,b) => b - a).forEach((v,i) => {
        
        answer.push([v, i+1]);
        
        if(i-1 >= 0 && answer[i][0] == answer[i-1][0]) {
            
            answer[i][1] = answer[i-1][1];
        }
        
    })
      
   return score.map(v => v.reduce((a,b) => a+b)).map((v,i) => answer.filter((dv) => dv[0] == v)[0][1])
}