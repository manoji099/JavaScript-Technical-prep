let words='hello world'
let count =0
let vowels = ['a','e','i','o','u']

for(char1 of words){
    if(vowels.includes(char1)){
        count++
    }
}

console.log(count)