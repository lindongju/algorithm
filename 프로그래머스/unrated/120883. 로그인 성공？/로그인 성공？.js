function solution(id_pw, db) {
    
    let rtnArr = ['fail', 'wrong pw', 'login'];
    
    let arr = db.map((v,i) => {
        if (v[0] != id_pw[0]) return 0;
        else if (v[1] != id_pw[1]) return 1;
        return 2; 
    })
    
    return rtnArr[Math.max(...arr)];
}