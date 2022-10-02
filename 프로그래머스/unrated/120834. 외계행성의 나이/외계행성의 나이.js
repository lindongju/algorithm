function solution(age) {
    var arr = ['a','b','c','d','e','f','g','h','i','j'];
    
    return [...age.toString()].map((v,i) => arr[v]).join("");
}