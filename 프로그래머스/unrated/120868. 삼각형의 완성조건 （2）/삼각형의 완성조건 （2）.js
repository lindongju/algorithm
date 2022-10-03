function solution(sides) {
    
    sides.sort((a,b) => b - a);
    
    return sides[1] + sides[1] -1;
}


