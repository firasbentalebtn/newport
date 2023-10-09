//Get all needed elements from the DOM
const contactForm = document.querySelector ("#contact-form") ;
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector ("#name") ;
const emailInput = document.querySelector ("#email") ;
const messageInput = document.querySelector("#message") ;
//Get needed data from email IS
const publicKey = "-_FH85no-F3o0EH_C" ;
const serviceID="service_wazlpu6";
const templateID="template_tsx4ye8";

// Initialise email JS service With the public key
emailjs.init(publicKey)

// add submit event to the contact form
contactForm.addEventListener("submit",e => {
 // prevent default form behaviour
 e.preventDefault();
 submitBtn.innerText="just a sec..."
 //get input from field values
 const inputFields={
    name:nameInput.value,
    email:emailInput.value,
    message:messageInput.value
 }
 emailjs.send(serviceID,templateID,inputFields).then(() =>{
    submitBtn.innerText="Delivered"
    //clear fileds
    nameInput.value="",
    emailInput.value="",
    messageInput.value=""
 },(error) =>{
    console.log(error)
    submitBtn.innerText="Error"
 })
})