function solution(my_string) {
    
    let arr = my_string.match(/[^aeiou]/g);
    
    return arr === null ? "" : arr.join("");
;
}