function solution(quiz) {
   return quiz.map((v,i) => eval(v.split('=')[0].trim()) == eval(v.split('=')[1]) ? 'O' : 'X');
}