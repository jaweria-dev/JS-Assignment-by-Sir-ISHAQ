// =========================================ASSIGNMENT 2 START=================================================
// Question 1
// let value_one = +prompt("Enter Num 1");
// let value_two = +prompt("Enter Num 2");
// function add(no1){
//         return function(no2){
//             console.log(no1+no2);
//          
//         }
    
//     }
// let yourInput_1 =add(value_one);
//  let  yourInput_2= yourInput_1 (value_two);
//  ====================================End of Question 1===============================================================

//Question no 2

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
// function find(num){
//     if(arr > 1){
//         return arr.length * find(arr.length - 1);
//     }
//     return false;

// }
// console.log(find(arr.length));

// =====================================End of Question no 2=====================================================================

//Question 3

// let myInput = prompt("ENTER YOUR CONTENT:")
// let para = document.createElement("p");
//  let pHTML = document.getElementsByTagName("html")[0];

// function pWork(string) {
//         para.innerHTML = string;
//         pHTML.appendChild(para);
//         pHTML.insertAdjacentElement("afterbegin", para);
//      }
    
//      pWork(myInput);

//===================================End of Question no 3=============================================================


//Question 4
// let myFirtParent=document.getElementsByTagName("body")[0]
// let Input_2 = prompt("ENTER YOUR List:")
// let para_2 = document.createElement("li");
//  let pBody = document.createElement("ul");

// function myWork(string) {
//         para_2.innerHTML = string;
//         pBody.appendChild (para_2)
//         myFirtParent.appendChild(pBody);
//         myFirtParent.insertAdjacentElement("afterbegin",pBody  );
//         para.innerHTML=string; 
//     }
    
//     myWork(Input_2);

// ====================================End of Question no 4================================================


//Question 5
// let dom=document.getElementById("my-dom");
// dom.innerText = "Hello Sir Ishaq I hope you like my assignment";
// dom.style.fontSize = "35px";

// setInterval(function randomColor() {
//       let bgColor = Math.floor(Math.random() * 16777215).toString(16);
//       let textColor = Math.floor(Math.random()*16777215).toString(16);
//       dom.style.backgroundColor = "#" + bgColor;
//       dom.style.color = "#" + textColor;
    
//     }, 500);



// ========================================EnD================================================================

//Question NO 6

// let obj = {
//         name: "AREEBA",
//         age: 17,
//         id: 23045,
//         teacher: "Sir Ishaq",
//     }
//     function store(get , id){
//         let put = JSON.stringify(get);
//         localStorage.setItem("id" , put);
//     }
//     store(obj , "localStore");

// ==========================================================end========================================

//Question no 7


// let object_1 = {
//     name:"jaweria",     
//         age: 18,
//     phone_no:"032124t77989",
//     height:"5'7",
//     cnic: "098776544432",
    
// }


// let object_2 = {
//     name:"lisa",
//     age: 25,
//     phone_no:"032124t7798",
//     height:"5'8",
//     cnic: "64657887435-1",
    
// }


// let object_3 = {
//     name:"jiya",
//     age: 14,
//     phone_no:"0341678329",
//     height:"5'6",
//     cnic: "8058543456-9-0",
   
// }

// function save_object(key , value){
//     let objectNew = JSON.stringify(value);
//     localStorage.setItem(key, objectNew);
// }


// save_object("Data of jaweria" , object_1);
// save_object("Data of lisa", object_2 );
// save_object("Data of jiya", object_3 );

//End of Question7


// =====================================END======================================

//Question no 8


// function saveObjectToLocalStorage(obj) {
//     Object.keys(obj).forEach(function(key) {
//       localStorage.setItem(key, JSON.stringify(obj[key]));
//     });
    
//     let newObj = {};
//     Object.keys(obj).forEach(function(key) {
//       newObj[key] = JSON.parse(localStorage.getItem(key));
//     });
//     return newObj;
//   }

// =====================================END==============================================
  





