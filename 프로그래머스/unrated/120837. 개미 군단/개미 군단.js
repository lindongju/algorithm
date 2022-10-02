function solution(hp) {
    
    return [5, 3, 1].reduce((acc, attack) => {
        const [totalHp, count] = acc; console.log(acc);
        const totalAttack = (totalHp - (totalHp % attack));
        const antCount = totalAttack / attack;

        return [
            totalHp - totalAttack,
            count + antCount
        ]

    }, [hp, 0])[1];
}