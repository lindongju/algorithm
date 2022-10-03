function solution(common) {
    
    let num1 = common[common.length-1];
    let num2 = common[common.length-2];
    let num3 = common[common.length-3];
    let rslt = 0;
    
    if (num2 - num3 == num1 - num2) {
        
        rslt = num1 + (num1 - num2);
    }
    
    if (num2 / num3 == num1 / num2) {
        
        rslt = num1 * (num1 / num2);
    }
    
    return rslt;
    
}