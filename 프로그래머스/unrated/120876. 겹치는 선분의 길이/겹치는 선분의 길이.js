function solution(lines) {
    
    let calFilter = [];
    let setFilter = []; 
    let cnt = 0;
    
    //[0,1,2,3,4,5], [3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9,10]
    let arr = Array(3).fill().map((v,i) => lines[i].sort((a,b) => a -b)).map((dv,di) => Array(dv[1]-dv[0] + 1).fill().map((ddv,ddi)=> dv[0] + ddi))

    
    for (let i = 0; i < arr.length; i++) {
        
        let dupFilter = [];
        
        for(let j = i + 1; j < arr.length; j++) {
            
            //일치하는 부분 필터 배열
            calFilter = arr[i].filter(v => v === parseInt(arr[j].filter(dv => dv == v)));
            
            if (calFilter.length === 0) continue;
            
            //중복되는 부분 필터 배열
            dupFilter = setFilter.filter(v => v === parseInt(calFilter.filter(dv => dv == v)));
            
            //중복되는 부분 중복제거 배열
            setFilter = [...new Set(calFilter.concat(setFilter))];
            
            cnt += (calFilter.length - 1) - (dupFilter.length === 0 ? 0 : dupFilter.length - 1);        
            
        }
        
    }
   
    return cnt;
}