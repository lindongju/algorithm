function solution(num, total) {
    
    arr = []
 
    let check = num*(num+1) / 2;
    
    let start = (total - check) / num + 1;
    
    for (let i = 0; i < num; i++) {
       arr.push(start + i);
    }
    
    return arr;
}