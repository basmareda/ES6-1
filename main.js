//lab1 ES6
 
  //task1
  var a = "mona";
  var b = "ali";
   document.write("Before swapping"+ " "+ a + " " +b);
  [a,b] = [b,a];
  document.write("</br>");
  document.write("After swapping"+ " " + a + " " +b); 


   //task2
   var array = []; 
   var size = 5; 
   for (var a = 0; a < size; a++) {
      array[a] = prompt('Enter the array Element ' + (a + 1));
   }
 
   var Max_array = Math.max(...array);
      document.write("The maximum value in the array is: ");
   document.write(Max_array);


 var min_array = Math.min(...array);
      document.write("The minumim value in the array is: ");
   document.write(min_array);
   

//task3

var fruits = ["apple","strawberry","banana","orange","mango"];
 //a
 var result1=function check(x) {
          return x.every(i => (typeof i === "string"));
        }
//b
var result2 = fruits.some((item, index) => {
     return item.startsWith("a");
    });

 //c
 var result3 = fruits.some((item, index) => {
      return item.startsWith("s")|| item.startsWith("b");
      
     });

//d
var result4 = fruits.map((item, index) => {
      return `i like ${item}`;
    });

 //e
 fruits.forEach((item, index) => {
   console.log(item, index);
   });    
 



  