function solution(dots) {
    
   dots.sort((a,b) => a[0] - b[0])
    
   let num1 = dots[dots.length-1][0] - dots[0][0];
    
   dots.sort((a,b) => a[1] - b[1]);
    
   let num2 = dots[dots.length-1][1] - dots[0][1];
     
   return num1 * num2;
}