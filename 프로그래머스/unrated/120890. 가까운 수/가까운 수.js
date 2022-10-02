function solution(array, n) {
    var arr = array.map(v => Math.abs(v - n));
    return array[arr.indexOf(Math.min(...arr))];
}