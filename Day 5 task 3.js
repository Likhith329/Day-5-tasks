console.log("Q 1.a using arrow function")   
// PRINTING THE ODD NUMBERS IN AN ARRAY
let onea=()=>{
    let ar=[1,2,3,4,5,6,7,8,9]
    for(let i=0;i<ar.length-1;i++){
        if(i%2!=0){
           console.log(i)
        }
    }

}
onea();
console.log("............*************..............")


console.log("Q 1.b using arrow function")
//  CONVERTING THE STRING ARRAY ELEMENTS TO TITLE CASE
let oneb=()=>{
let arr=["my","first","javascript","program"]
for(let i=0;i<arr.length;i++){
    let str=arr[i]
    let l=str.length
    arr[i]=str.charAt(0).toUpperCase()+str.substring(1,l)
}
console.log(arr)
}
oneb()
console.log("............*************..............")

console.log("Q 1.c using arrow fn")
// SUM OF ALL ELEMENTS IN AN ARRAY
let onec=()=>{
    let arrr=[1,2,3,4,5,6,7,8,9]
    let sum=0
    for(let i=0;i<arrr.length;i++){
         sum+=arrr[i]
    }
    console.log("sum is "+sum)
}
onec()
console.log("............*************..............")

console.log("Q 1.d using arrow fn")
// PRINTING THE ODD NUMBERS IN AN ARRAY
let oned=()=>{
let ara=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
for(let i=0;i<ara.length;i++){
    let c=0
    for(let j=1;j<=ara[i];j++){
        if(ara[i]%j==0){
            c+=1
        }
    }
    if(c==2){
        console.log(ara[i])
    }
}
}
oned()
console.log("............***************............")

console.log("Q 1.e using arrow fn")
// PRINTING THE PALINDROMES IN AN ARRAY
let onee=(num)=>{
  let num1=num
  let tar=num
  let c=0
  while(num1!=0){
    num1=Math.floor(num1/10)
    c+=1
  }
  let st=""
  while(num!=0){
    let r=num%10
    num=Math.floor(num/10)
    st+=r
  }
  return st==tar
}

let arrrr=[121,123,454,12321,12345,45654,45678]
for(let i=0;i<arrrr.length;i++){
    if(onee(arrrr[i])==true){
        console.log(arrrr[i])
    }
}


