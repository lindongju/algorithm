function solution(order) {
    
    return [...order.toString()].filter(v => v != 0 && parseInt(v) % 3 === 0).length;
}