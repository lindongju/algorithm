function solution(my_str, n) {
    
    //"abc1Addfggg4556b".match(/[A-Za-z0-9]{1,6}/g)
    
    return Array(Math.ceil(my_str.length / n)).fill(1).map((v,i) => my_str.substr(i*n, n));
}