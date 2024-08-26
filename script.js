const arr = [1,2,3,4,5];
console.log("Original Array => "+arr);
let inbuiltMap = arr.map((item,index,array) => item*2);
console.log("Inbuilt map method used: Array => "+inbuiltMap);

Array.prototype.myMap = function(cb){
   const arr = this;
   let n = arr.length;
   const result = [];
   for(let i = 0;i<n;i++){
      result[i] = cb(arr[i],i,arr);
   }
   return result;
}

let customMap = arr.myMap((item,index,array) => item*2);
console.log("Polyfill map method used: Array => "+customMap);

// ============================================== //
{
const arr = [1,2,3,4,5];
let inbuiltFilter = arr.filter((item,index,array) => item%2==0);
console.log("Inbuilt filter method used: Array => "+inbuiltFilter);

Array.prototype.myFilter = function(cb){
   const arr = this;
   let n = arr.length;
   const result = [];
   let j = 0;
   for(let i = 0;i<n;i++){
    if(cb(arr[i],i,arr)){
        result[j++] = arr[i];
    }  
   }
   return result;
}

let customFilter = arr.myFilter((item,index,array) => item%2==0);
console.log("Polyfill filter method used: Array => "+customFilter);

}
// ============================================== //
{
    const arr = [1,2,3,4,5];
    let inbuiltReduce= arr.reduce((acc,item,array) => acc+item);
    console.log("Inbuilt Reduce method used: Array => "+inbuiltReduce);
    
    Array.prototype.myReduce = function(cb,initial=null){
       const arr = this;
       let n = arr.length;
       // initial can be handled better (conditional starting index)
       let acc = initial==null?arr[0]:cb(initial,arr[0],arr);
       for(let i = 1;i<n;i++){
        acc = cb(acc,arr[i],arr);
       }
       return acc;
    }
    
    let customReduce = arr.myReduce((acc,item,array) => acc+item);
    console.log("Polyfill Reduce method used: Array => "+customReduce);
    
}