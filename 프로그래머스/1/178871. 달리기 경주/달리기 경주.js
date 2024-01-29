function solution(players, callings) {
    let obj = {}

    //순위 오브젝트로 담기
    for(let i = 0 ; i<players.length ; i++){
        obj[players[i]] = i
    }

   //호출된 선수와 앞선수 순위 교체
	for(let j = 0; j<callings.length ; j++){
		let idx = obj[callings[j]];
		let temp = players[idx-1];
					
		players[idx-1] = players[idx];
		players[idx] = temp;
		
		obj[callings[j]] = idx-1
		obj[temp] = idx
	}
	

    return players;
}


