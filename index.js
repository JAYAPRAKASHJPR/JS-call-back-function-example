function myfunction(a,b, cb){
  console.log(a + b);
 var result = a + b;
 setTimeout(  () =>{
    cb(result);

 }, 5000);

   
}

myfunction(5,5, (cb) => {
console.log(cb/2); 
});  