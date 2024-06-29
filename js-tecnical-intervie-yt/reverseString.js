let str = "Happy Birthday"
let revStr="";

for(let i=str.length-1; i>=0;i--){
    revStr = revStr+str[i]
    
}
console.log(revStr)

// type2 

let rev = str.split("").reverse().join("");
console.log('type 2 js functions: ',rev)