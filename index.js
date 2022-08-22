function pt2(a , b ,c ){
	if (a == 0){
		if (b==0){
			console.log("vo so nghiem");
			return;
		}
		console.log("x =", -c/b);
		return;
	}
	const delta=Math.sqrt(b*b -4*a*c);
	if (delta < 0){
		console.log("vo nghiem");
		return;
	}
	if (delta ==0){
		console.log("x=",-b/(2*a));
	}
	if (delta > 0){
		console.log("x1 =",(-b+Math.sqrt(delta))/(2*a));
		console.log("x2 =",(-b-Math.sqrt(delta))/(2*a));
	}
}
pt2("1",2,null)