
exports.min = function min (array) {
	    let arr = array.sort(function(a, b) {
		return(a - b);
	});
	return(arr[0]);
}
  

exports.max = function max (array) {
	let arr = array.sort(function(a, b){
		return(b - a);
	});
  return(arr[0]);
}

exports.avg = function avg (array) {
	let arr = array;
	let len = arr.length;
	let sum = 0;
	for(let i = 0; i < len;i++) {
		sum += arr[i];
	}
  return(sum / len);
}
