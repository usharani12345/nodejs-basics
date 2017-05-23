var fs= require("fs");
var filepath="./sample2.txt"
console.log("Start Writing file !!!")
fs.writeFile(filepath,"Hello Tech Minds",function(err,data){
	if(err){
		console.log(err);
	}
	console.log(data)
})
console.log("Done writing file!!!!")
