function solution(spell, dic) {
    
    return dic.map ( v => v.split("").sort().join("")).indexOf(spell.sort().join("")) > -1 ? 1 :2
}