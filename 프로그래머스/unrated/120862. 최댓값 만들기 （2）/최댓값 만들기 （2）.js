function solution(numbers) {
  
    //Math.max(...numbers.map((v,idx) =>  Math.max(...numbers.filter((dv, dIdx) => dIdx != idx).map(s => s * v) ) ))
    return Math.max(...numbers.map((v,idx) =>  Math.max(...numbers.filter((dv, dIdx) => dIdx != idx).map(s => s * v) ) )) 
}