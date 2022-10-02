function solution(my_string) {
   return my_string.split(/[a-z]|[A-Z]/g).reduce((a,b) => { if(b.length == 0 ) b = 0; return parseInt(a) + parseInt(b)}, 0);
}