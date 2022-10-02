function solution(my_string, n) {
    
    //for문으로 풀기?
    let strArr = my_string.split("");
    //아니면?
    return my_string.repeat(n).split("").map((v,idx) => strArr[Math.floor((idx)/n)]).join("");
}