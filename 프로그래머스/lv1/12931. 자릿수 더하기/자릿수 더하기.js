function solution(n)
{
    
    return  [...n.toString()].reduce((a,b) => a + Number(b) , 0);
}