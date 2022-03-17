//Print odd numbers in an array

 //IIFE 
    (function(array){
  var oddarr=[];
    for(i=0;i<array.length;i++){
      if(array[i]%2!==0)
     {
        oddarr.push(array[i]);
     }
     }
     console.log(oddarr);
     })([1,2,3,4,5]);

//RESULT-[1,3,5]

//Convert all the strings to title caps in a string array
    (function(string){
     var sentence = string.toLowerCase().split(" ");
     for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    })("my name is swathy");
    
//RESULTS-My Name Is Swathy

//Sum of all numbers in an array

    (function(array){
    sumOf=0;
    for(i=0;i<array.length;i++){
      sumOf=sumOf+array[i];
    }
    console.log(sumOf);
    })([1,2,3,4,5]);

//RESULTS-15

//Return all the prime numbers in an array
(function(array){
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
})([1,2,3,4,5,6,7,8,9,10,105,109]);

//RESULT-[2, 3, 5, 7]


(function(array){
  var palArray=[];
    for(i=0;i<array.length;i++){
    var string=array[i];
    if (string == string.split('').reverse().join('')) {
        palArray.push(array[i]);
    }
}
console.log(palArray);
})(["madam","swathy","radar","22022","rotor","12345","hey","mom"]);


//RESULTS- ['madam', 'radar', '22022', 'rotor', 'mom']

(function(arr1,arr2){
  var arr3=arr1.concat(arr2);
  arr3.sort();
 // console.log(arr3);
  if(arr3.length%2===0){
      console.log("median:"+(arr3[(arr3.length/2)-1] + arr3[(arr3.length/2)])/2);
  }else{
      console.log("median:"+arr3[Math.floor(arr3.length/2)]);
  }
}([1,2,3],[1,6,9]));

//RESULT:median:2.5
 
//rotate an array k times
(function arrayRotate(arr,k) {
  for(i=0;i<k;i++){
    arr.unshift(arr.pop());
  }
  //return arr;
  console.log(arr);
})([1,2,3,4,5],2);

//RESULTS-[4, 5, 1, 2, 3]

//Remove duplicates from an array   
(function(data){
    let array=[];
    for(let i of data){
        if(array.indexOf(i)===-1){
            array.push(i);
        }
    }
  console.log(array);
  })([1,1,2,2,3,3,4,5,6,9,9]);

  //RESULTS- [1, 2, 3, 4, 5, 6, 9]










