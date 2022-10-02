function solution(A, B) {
    
    let arr = [...A]
    
    let rtn = Array(A.length).fill().map((v,i) => {arr : arr.unshift(arr.pop()); return arr.join("");}).indexOf(B);
    
    return rtn > -1 ? (rtn + 1) % A.length : rtn
}