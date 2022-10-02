function solution(numbers, direction) {
    
    // numbers.splice(6,1, ...(numbers.splice(0,1)))
    
    
    
    return direction == 'left' ? numbers.slice(1, numbers.length).concat(numbers.slice(0,1)) : numbers.slice(-1).concat(numbers.slice(0, numbers.length-1));
}