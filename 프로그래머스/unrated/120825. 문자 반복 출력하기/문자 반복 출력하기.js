function solution(my_string, n) {
    
    //아니면?
    return  [...my_string].map(v => v.repeat(n)).join("");
}