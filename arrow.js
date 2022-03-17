//Print odd numbers in an array

  //ARROW FUNCTIONS

  var oddarr=[];
  var getodd=((array)=>{
      for(i=0;i<array.length;i++){
      if(array[i]%2!==0)
      {
        oddarr.push(array[i]);
      }
    }
    console.log(oddarr); ;
  })
    getodd([1,2,3,4,5]) ;

    //RESULT-[1,3,5]

 //Convert all the strings to title caps in a string array
    var titleCase=((string)=> {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
           sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
     document.write(sentence.join(" "));
     return sentence;
     })
     titleCase("my name is swathy");

     //RESULTS-My Name Is Swathy

//Sum of all numbers in an array

   var sum=((array)=>{
    sumOf=0;
    for(i=0;i<array.length;i++){
        sumOf=sumOf+array[i];
    }
    console.log(sumOf);
})
sum([1,2,3,4,5]);

//RESULTS-15

//Return all the prime numbers in an array
var prime=((array)=>{
    var primeArray=[];
for(i=0;i<array.length;i++){
    var count=0;
    for(j=1;j<=i+1;j++)
    if(array[i]%j===0){
        count++;
    }
    if(count===2){
        primeArray.push(array[i]);
    }
}
console.log(primeArray);
})
prime([1,2,3,4,5,6,7,8,9,10,105,109]);

//RESULT-[2, 3, 5, 7]



var palindrome=((array)=>{
    var palArray=[];
    for(i=0;i<array.length;i++){
    var string=array[i];
    if (string == string.split('').reverse().join('')) {
        palArray.push(array[i]);
    }
}

console.log(palArray);
});
palindrome(["madam","swathy","radar","22022","rotor","12345","hey","mom"]);

//RESULTS- ['madam', 'radar', '22022', 'rotor', 'mom']

