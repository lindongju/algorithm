function solution(numbers) {
     const obj = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    
     const regex = new RegExp(Object.keys(obj).join('|'), 'g');

    return parseInt(numbers.replaceAll(regex, v => obj[v]));
}