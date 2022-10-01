function solution(n, t) {
    return n * Array(t).fill(2).reduce((a,b) => a * b);
}