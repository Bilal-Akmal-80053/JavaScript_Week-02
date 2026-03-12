// this is the code related to the validation for the form /

let validationForm = (e)=>{

e.preventDefault()

let isValid = true
let name = document.getElementById("name")
let email = document.getElementById("email").value
let message = document.getElementById("message")
let nameError = document.getElementById("name-error")
let emailError = document.getElementById("email-error")
let messageError = document.getElementById("message-error")

if(name.value.length<3){
nameError.innerText = "Name should be at least 3 char long."
isValid = false;
}else{
    nameError.innerText = ""
}

if(email.includes("@") && email.includes(".")){
    emailError.innerText = ""
}else{
emailError.innerText = "Email format should be correct."

isValid = false;
}

if(message.value.length===0){
messageError.innerText = "Message field is required."

isValid = false;
}else{
    messageError.innerText = ""
}

if(isValid){
    alert("Form submitted successfully.")
}

}







// this code is related to search concepts using javascript//
let search = document.getElementById("search")

search.addEventListener("keyup",()=>{
    let value = search.value.toLowerCase()
    let products = document.querySelectorAll("#products li")

    products.forEach(product=>{
        let productValue = product.innerHTML.toLocaleLowerCase();
        if(productValue.includes(value)){
            product.style.display = "block"
        }else{
            product.style.display = "none"
        }
    })
})

// THIS IS THE USAGE OF CLOSURE 

// we take number as an argument and multiplies it with another number 
function makeMultiplier(n) {
    return function(x) {
        return x * n;
    };
}

const multiplyBy3 = makeMultiplier(3); //we set the initial n or value or argument as 3
console.log(multiplyBy3(5)); //return 15

// nby using this our argument value is secure and can't used in the global



//this is for the api call and error catch and loading
const status = document.getElementById("status")
const usersList = document.getElementById("users")

async function fetchUsers() {
    status.textContent = "Loading users...";
    try {
        const res = await fetch("https://dummyjson.com/users")
        if(!res.ok){
              throw new Error("Api call failed.")
        }

        const data = await res.json()

          console.log(data)
       
    status.textContent = "";

    data.users.forEach(user=>{
        const li = document.createElement("li")
        li.textContent = user.firstName + " " + user.lastName;
        usersList.appendChild(li)
    })
        
    } catch (error) {
          console.log(error)
          
    status.textContent = "Error: "+ error.message;
    }
}
fetchUsers()