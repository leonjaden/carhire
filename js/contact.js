
const contactAlert = (e) => {
    e.preventDefault();

    const form = document.getElementById("#frm");
    const firstName = document.getElementById("fname").val;
    console.log("firstName")
    const lastName = document.getElementById("lname").val;
    const fullName = firstName + " " + lastName;

    if (firstName|| lastName) {
        alert("Thank you" + fullName + " for contacting Fab Car Hire; We will contact you shortly; Have a lovely day.");
    } else {
        alert("Please enter your full names");
  }
document.querySelector("#frm").addEventListener('submit', contactAlert);  
}