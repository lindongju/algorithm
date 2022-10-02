function solution(my_string) {
    
    return [...my_string].map(v => v.match(/[a-z]/) === null ? v.toLowerCase() :v.toUpperCase() ).join("");
}