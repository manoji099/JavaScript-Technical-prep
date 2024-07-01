let numbers=[1,2,4,4,5,9]

let largestNum=numbers[0]
let final

for(let i=0; i<numbers.length;i++){
    if(numbers[i]>largestNum)
        {
            final = largestNum=numbers[i]
        }
}

console.log(final)