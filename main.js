let newList=document.querySelector(".table")
let inputText = document.querySelector(".tasks")
let deleteX = document.querySelector(".delete")
let tbody = document.querySelector('.tbody')
document.querySelector(".add").addEventListener("click",function(){
if(inputText.value.length===0){
    alert("Add a task!!!")
}else{
    let newRow = document.createElement("tr")
    let newTasks=document.createElement("td");
    newTasks.setAttribute("class","d-flex justify-content-between")
    // newRow.setAttribute("class","d-flex")
    newTasks.innerHTML=`<span lass="col-8">${inputText.value} </span><span class="deleteitem text-danger " onclick="this.parentElement.remove()">X</span>`
    inputText.value=''
    newRow.appendChild(newTasks)
    tbody.appendChild(newRow)
}
})
deleteX.addEventListener("click",function(){
    let arr = newList.children
    for(let i = 0 ; i<arr.length ; i++){
        newList.innerHTML=""
    }
})
































// let input = document.querySelector("input");
// let button = document.querySelector("button");
// var ul = document.querySelector("ul");
// var span = document.querySelectorAll("span");
// console.log(span);
// ​
// // function deleteItem(i) {
// //   let ul = document.querySelector("ul");
// //   let newArray = ul.children;
// ​
// //   console.log(newArray);
// // }
// ​
// button.addEventListener("click", add);
// ​
// function add() {
//   if (!input.value.length) {
//     console.log("Value daxil edin");
//   } else {
//     let newElement = document.createElement("li");
//     newElement.innerHTML = `${input.value}  <span onclick="this.parentElement.remove()">Delete</span>`;
//     ul.appendChild(newElement);
//     input.value = "";
//   }
// ​
//   setTimeout(() => {
//     span = document.querySelectorAll("span");
//     console.log(span);
//   }, 2000);
// }
// ​
// // for (let i = 0; i < span.length; i++) {
// //   span[i].addEventListener("click", function (e) {
// //     this.parentElement.remove();
// //   });
// // }
// ​
// document.querySelector("#allDelete").addEventListener("click", deleteAll);
// ​
// function deleteAll() {
//   let ul = document.querySelector("ul");
//   // 1 ci usul
//   ul.innerHTML = "";
// ​
//   // 2 ci usul
//   //   while (ul.firstChild) {
//   //     ul.removeChild(ul.lastChild);
//   //   }
// ​
//   // 3-cu usul
//   //   for (let i = 0; i < ul.children.length; i++) {
//   //     ul.children[i].style.display = "none";
//   //   }
// ​
//   //   console.log(ul.children);
// }