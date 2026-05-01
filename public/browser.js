// console.log("FrontEND JS ishga tushdi")
// const { response } = require("../app");
// function itemTemplate(item){
//     return`<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
//   <span class="item-text">${item.reja}</span>
//   <div>
//     <button   data-id="${item._id}"class="edit-me btn btn-secondary btn-sm mr-1">ozgatrirish</button>
//     <button style="background-color: red; color: white;" co data-id="${item._id}" class="delete-me btn btn-denger btn-sm">Ochirish</button>
// </li>`;
// }
// console.log('Frontend JS ishga tushdi');

// let createField = document.getElementById("create-field");
// document.getElementById("create-form").addEventListener("submit", function(e){
//     e.preventDefault();

//     axios
//     .post("/create-item", {reja: createField.value})
//     .then((response)=>{
//        document
//        .getElementById("item-list")
//        .insertAdjacentHTML("beforeend",itemTemplate(response.data));
//        createField.value = "";
//        createField.focus();
//     })
//     .catch(err=>{
//         console.log("Iltimos qaytadan harakat qiling")
//     });
// });

console.log("FrontEND Js ishga tushdi");

function itemTemplate(item){
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
  <span class="item-text">${item.reja}</span>
  <div>
    <button  data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
    <button data-id="${item._id}"  style="background-color: red; color: white;"  class="delete-me btn btn-denger btn-sm">Delete</button>
</li>`;
}

let createField = document.getElementById("create-field")
document.getElementById("create-form")
.addEventListener("submit", function(e){
  e.preventDefault();


  axios
  .post("/create-item",{reja: createField.value})
  .then((response)=>{
    document
    .getElementById("item-list")
    .insertAdjacentHTML("beforeend",itemTemplate(response.data));
    createField.value ="";
    createField.focus();
  })
  .catch(err=>{
    console.log(" WRONG!!! Please try again")
  })
});

document.addEventListener("click", function(e){
    //delete oper
    console.log(e.target);
    if(e.target.classList.contains("delete-me")){
      if(confirm("Are you sure to delete?")){
        axios.post("/delete-item",{id:e.target.getAttribute("data-id")})
        .then(response=>{
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
        })
        .catch(err=>{
        console.log("Please try again")
        })
      }
    }
    //edit oper
    if(e.target.classList.contains("edit-me")){
        alert('siz edit tugmasini bosdingiz')
    }
})