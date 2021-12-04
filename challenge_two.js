function viralAdvertising(n) {
	// Write your code here
	let invitations = 5;
	let dayOne = 2;
	let likes = 2;
	if (n === 1) {
		return dayOne;
	}
	for (let i = 1; i < n; i++) {
		let todayLikes = ((Math.floor(invitations / 2)));
		invitations = todayLikes * 3;
		likes += (Math.floor(invitations / 2));
	}

	return likes;

}
console.log(viralAdvertising(4));