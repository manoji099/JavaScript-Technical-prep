let str = 'I love JavaScript'
let long = "";

let strSplit = str.split(" ")

for(let word of strSplit){
    if(word.length > strSplit.length){
        long = word
        
    }
}
console.log(long)