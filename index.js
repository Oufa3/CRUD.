var inputName = document.getElementById("inputName");
var inputSite = document.getElementById("inputSite");
var addBtn = document.getElementById("addBtn")
var updatebtn = document.getElementById("updateBtn")
// var closeBtn = document.getElementById("closeBtn");
var elBox = document.querySelector(".box")
var validatorName;
var validatorUrl;

var productsContainer = [] ;

if (localStorage.getItem("product")!==null) {
  productsContainer = JSON.parse(localStorage.getItem("product"))
  displayProduct()
}
// console.log(inputName,inputSite);
function validatorName() {
  var regex = /^[A-Z][a-z]{2}/;
  if (regex.test(inputName.value)) {
    return true
  }else{
    return false
  }
}
function validatorUrl() {
  var regex = /(https|http|www)/;
  if (regex.test(inputName.value)) {
    return true
  }else{
    return false
  }
}
function validInputs(element) {
  var regex = {
    inputName : /^[A-Z][a-z]{2}/,
    inputSite : /(https|http|www)/
  }
  if(regex[element.id].test(element.value)) 
  {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    // console.log("match");
  }else{
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    // console.log("no match");
  }  
  // console.log(element);
}

function submitbtn() {
  if (validatorName()) {
    var product = {
      code : inputName.value,
      url : inputSite.value
    }
    productsContainer.push(product)
    localStorage.setItem("product" , JSON.stringify(productsContainer));
    // clearForm()
    displayProduct()
  }else{
    elBox.classList.remove("d-none")
  }

} 






function visitSite() {
  inputSite.value
  window.open(inputSite.value,"_blank");
}








function displayProduct() {
    var cartoona = ``;
    for(i=0;i<productsContainer.length;i++){
        cartoona+=`<tr>
        <td>${(i+1)}</td>
        <td>${productsContainer[i].code}</td>
        <td><a href="${productsContainer[i].url}" target="_blank" class="btn btn-visit  bg-success text-white">
        <i class="fa-solid fa-eye pe-2"></i>Visit></a></td>

        <td><button class="btn  bg-secondary text-white pe-2" onclick="setUpdate(${i})">
        <i class="fa-solid fa-wrench"></i>
          Update
        </button></td>

        <td><button class="btn btn-delete bg-danger text-white pe-2" onclick="deleteProduct(${i})">
          <i class="fa-solid fa-trash-can"></i>
          Delete
        </button></td>
      </tr>`
    }
    document.getElementById("tableContent").innerHTML = cartoona
}

function clearForm() {
    inputName.value = null;
    inputSite.value = null;
}



var updateIndex;









function deleteProduct(id) {
    // console.log(id);
    productsContainer.splice(id , 1)
    localStorage.setItem("product" , JSON.stringify(productsContainer));
    displayProduct()
}









function setUpdate(i) {
  updateIndex = i
  addBtn.classList.add("d-none")
  updatebtn.classList.remove("d-none")
 inputName.value = productsContainer[i].code ;
 inputSite.value = productsContainer[i].url ;
}  
function updateProduct() {
  addBtn.classList.remove("d-none")
  updatebtn.classList.add("d-none")
productsContainer[updateIndex].code =inputName.value
productsContainer[updateIndex].url =inputSite.value
displayProduct()
clearForm()
localStorage.setItem("product" , JSON.stringify(productsContainer));
}


function closeBtn() {
  elBox.classList.add("d-none")  
}



















