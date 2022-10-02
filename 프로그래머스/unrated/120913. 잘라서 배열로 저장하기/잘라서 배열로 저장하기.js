function solution(my_str, n) {
    
    return Array(Math.ceil(my_str.length / n)).fill(1).map((v,i) => my_str.substr(i*n, n))
}