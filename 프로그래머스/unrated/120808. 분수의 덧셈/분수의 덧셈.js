function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    //num의 최소공배수 구하기
    let lcmRslt = lcm(num1, num2);

    answer = Array(2).fill().map((v,i) => {
        if(i == 0) {
            return denum1 * (lcmRslt / num1) + denum2 * (lcmRslt / num2)
        } else 
            return num1 * (lcmRslt / num1)
    });
    
    while (gcd(answer[0], answer[1]) > 1) {
        
        let gcdRslt = gcd(answer[0], answer[1]);
        answer[0] /= gcdRslt;
        answer[1] /= gcdRslt;
        
    }
    
    return answer;
    
}

//최소공배수
const lcm = (num1, num2) => {
    return (num1 * num2) / gcd(num1, num2);
}

//최대공약수
const gcd = (num1, num2) => {
   
    while (num2 > 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    
    return num1;
}