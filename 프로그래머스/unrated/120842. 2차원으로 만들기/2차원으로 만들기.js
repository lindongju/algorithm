function solution(num_list, n) {
    
    return Array(Math.ceil(num_list.length/n)).fill().map((v,i) => num_list.filter((dv, di) =>  Math.floor(di / n) === i));
}