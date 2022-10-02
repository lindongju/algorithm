function solution(sides) {
    
    return sides.sort((a,b) => b-a).reduce((a,b) => a -b) < 0 ? 1 : 2;
}