function solution(num, k) {
   
    let chkIndex = num.toString().indexOf(k);
    return chkIndex > -1 ? chkIndex +1 : -1;
}