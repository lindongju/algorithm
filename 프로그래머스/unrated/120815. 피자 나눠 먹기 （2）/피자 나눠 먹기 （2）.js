function solution(n) {
    //6번 이내에 정답이 나옴
    return Array(6).fill(n).map((v,idx) => v = v * (idx + 1)).find((v) => v % 6 === 0 ) / 6;
}