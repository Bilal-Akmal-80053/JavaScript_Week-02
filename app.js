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