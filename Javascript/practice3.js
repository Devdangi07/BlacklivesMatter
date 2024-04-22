const mean=(a,b,c,d,e)=>{
    console.log ((a+b+d+e)/5)
}
console.log(mean(2,3,4,5,6))

// problem 3
let CN=30
let a
a=prompt("enter the number")
while(a!==CN)
{
    console.log("try again")
   console.log("you entered the wrong number")
}
console.log("you entered the correct number")