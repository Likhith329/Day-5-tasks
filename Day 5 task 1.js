console.log("Q 1.a using anonymous function")   
// PRINTING THE ODD NUMBERS IN AN ARRAY
let onea= function(){
    let ar=[1,2,3,4,5,6,7,8,9]
    for(let i=0;i<ar.length-1;i++){
        if(i%2!=0){
           console.log(i)
        }
    }

}
onea();

console.log("Q 1.a using IIFE");
(function(){
    let ar=[1,2,3,4,5,6,7,8,9]
    for(let i=0;i<ar.length-1;i++){
        if(i%2!=0){
           console.log(i)
        }
    }

})()
console.log("............*************..............")


console.log("Q 1.b using anonymous function")
//  CONVERTING THE STRING ARRAY ELEMENTS TO TITLE CASE
let oneb=function(){
let arr=["my","first","javascript","program"]
for(let i=0;i<arr.length;i++){
    let str=arr[i]
    let l=str.length
    arr[i]=str.charAt(0).toUpperCase()+str.substring(1,l)
}
console.log(arr)
}
oneb()


console.log("Q 1.b using IIFE");
(function(){
    let arr=["my","first","javascript","program"]
    for(let i=0;i<arr.length;i++){
        let str=arr[i]
        let l=str.length
        arr[i]=str.charAt(0).toUpperCase()+str.substring(1,l)
    }
    console.log(arr)
    })()
console.log("............*************..............")

console.log("Q 1.c using anonymous fn")
// SUM OF ALL ELEMENTS IN AN ARRAY
let onec=function(){
    let arrr=[1,2,3,4,5,6,7,8,9]
    let sum=0
    for(let i=0;i<arrr.length;i++){
         sum+=arrr[i]
    }
    console.log("sum is "+sum)
}
onec()

console.log("Q 1.c using IIFE");
(function(){
    let arrr=[1,2,3,4,5,6,7,8,9]
    let sum=0
    for(let i=0;i<arrr.length;i++){
         sum+=arrr[i]
    }
    console.log("sum is "+sum)
})()
console.log("............*************..............")

console.log("Q 1.d using anonymous fn")
// PRINTING THE ODD NUMBERS IN AN ARRAY
let oned=function(){
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


console.log("Q 1.d using IIFE");
(function(){
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
    })()
console.log("............***************............")

console.log("Q 1.e using anonymous fn")
// PRINTING THE PALINDROMES IN AN ARRAY
let onee=function(num){
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


console.log("Q 1.f using anonymous fn")
// FINDING THE MEDIAN OF TWO SORTED ARRAYS
let onef=function(){
    let sray1=[0,1,2,3,4]
    let sray2=[5,6,7,8,9]
    let l1=sray1.length
    let l2=sray2.length
    let i=0
    let j=0 
    let k=0
    let sray3=[]
    while(i<l1 && j<l2){
        if(sray1[i]<=sray2[j]){
            sray3[k]=sray1[i]
            k++
            i++
        }
        else{
            sray3[k]=sray2[j]
            k++
            j++
        }
    }
   while(i<l1){
    sray3[k]=sray1[i]
    k++
    i++
   }
   while(j<l2){
    sray3[k]=sray2[j]
    j++
    k++
   }
   if((l1+l2)%2==0){
     console.log((sray3[Math.floor((l1+l2)/2)]+sray3[Math.floor((l1+l2)/2-1)])/2)
   }
   else{
    console.log(sray3[Math.floor((l1+l2)/2)])
   }
}
onef()
console.log(".............***************.............")


console.log("Q 1.g using anonymous fn")
// REMOVING THE DUPLICATES IN AN ARRAY
let oneg=function(){
    let dup=[12,2,3,1,3,5,5,7,7,4,5,3,5,7,1]
    dup.sort(function(a,b){
        return a-b
    })
    let i=1
    let k=0
    dp1=[]
    while(i<dup.length){
        if(dup[i-1]!=dup[i]){
            dp1[k]=dup[i-1]
             k++
        }
        i++
    }
    dp1[k]=dup[dup.length-1]
    console.log(dp1)
}
oneg()
 
console.log("Q 1.g using IFFE");

(function(){
    let dup=[12,2,3,1,3,5,5,7,7,4,5,3,5,7,1]
    dup.sort(function(a,b){
        return a-b
    })
    let i=1
    let k=0
    dp1=[]
    while(i<dup.length){
        if(dup[i-1]!=dup[i]){
            dp1[k]=dup[i-1]
             k++
        }
        i++
    }
    dp1[k]=dup[dup.length-1]
    console.log(dp1)
})()

console.log("Q 1.h using anonymous fn")
// ROTATING THE ARRAY K TIMES
let oneh=function(){
   let array=[1,2,3,4,5,6,7,8]
   k=3
   let narray=[]
   for(let i=0;i<array.length;i++){
    let x=(i+k)%(array.length)
       narray[x]=array[i]
   }
   console.log(narray)
}
oneh()
console.log("Q 1.h using IFFE");
(function(){
    let array=[1,2,3,4,5,6,7,8]
    k=3
    let narray=[]
    for(let i=0;i<array.length;i++){
     let x=(i+k)%(array.length)
        narray[x]=array[i]
    }
    console.log(narray)
 })()
console.log("..............****************................")