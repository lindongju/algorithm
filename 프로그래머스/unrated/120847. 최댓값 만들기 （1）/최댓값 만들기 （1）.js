function solution(numbers) {
    
   return numbers.sort((a,b) => b-a).filter((v,idx) => idx < 2 ).reduce((a,b) => a * b, 1);
}