


var tab = [5,0,9,1,7,4,2,6,3,8];

function sorting(array){
	for(i=0;i<array.length;i++){
		for(j=0; j<array.length;j++){
			if(array[i]>array[j]){
				var c;
				c=array[j];
				array[j]=array[i];
				array[i]=c
			}
		}
	}
	console.log(array);
}
