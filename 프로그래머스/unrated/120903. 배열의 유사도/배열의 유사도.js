function solution(s1, s2) {
    
    return s1.concat(s2).length - [...new Set(s1.concat(s2))].length;
}