function pt2(a, b ,c ){
	if (a == 0){
		if (b==0){
			console.log("vo so nghiem");
			return;
		}
		console.log("x =", -c/b);
		return;
	}
	const delta=b*b - 4*a*c;
	console.log(delta);
	if (delta < 0){
		console.log("vo nghiem");
		return;
	}
	if (delta ==0){
		console.log("x=",-b/(2*a));
		return;
	}
	if (delta > 0){
		console.log("x1 =",(-b+Math.sqrt(delta))/(2*a));
		console.log("x2 =",(-b-Math.sqrt(delta))/(2*a));
		return;
	}
}
pt2(1,2,1)