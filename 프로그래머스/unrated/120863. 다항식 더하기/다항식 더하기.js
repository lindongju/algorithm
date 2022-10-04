function solution(polynomial) {
    
    let strCal = '';
    let numCal = -1;
   
    //영어와 숫자만 
    polynomial.split(" ").filter(v => v.match(/x|^[0-9]*$/g)).forEach(v => {
        
        if(v.indexOf('x') > -1) {
            
            if(strCal === '') strCal += v;
            else {
                
                strCal = parseInt(strCal.length === 1 ? 1 : strCal.split(/[A-Z|a-z]/g)[0]) + parseInt(v.length === 1 ? 1 : v.split(/[A-Z|a-z]/g)[0]) + "x";
            }
                
        } else {
            
            if(numCal === -1) numCal = parseInt(v);
            else  numCal += parseInt(v);
        }
        
    })

    return numCal === -1 ? strCal : strCal === '' ? ""+numCal : strCal + " + " + numCal ;
}
