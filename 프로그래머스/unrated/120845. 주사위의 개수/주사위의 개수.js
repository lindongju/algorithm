function solution(box, n) {
    
    // 직육면체 부피 ( 가로 * 세로 * 높이 )
    // 정육면체 부피 ( 가로 * 세로 * 높이 )
    // 직육면체 가로 세로 높이를 정육면체의 한면에 맞추고 나눈다.
   return box.map(v => v - (v%n)).reduce((a,b) => a * b) / Math.pow(n,3)
}