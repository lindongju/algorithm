function solution(babbling) {
    
    let arr = babbling.map(v => Array.isArray(v.match(/(aya)|(ye)|(woo)|(ma)/g)) ? v.match(/(aya)|(ye)|(woo)|(ma)/g) : []) ;
    let cnt = 0;
    
    arr.forEach((val,idx) => 
              babbling[idx].length === val.filter((vall,idx) => vall != val[idx+1]).join("").length ? cnt++ :
             '') ;
    
    return cnt;
}