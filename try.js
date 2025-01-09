function FormValidation(){
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(name == ""){
        alert("Name can't be empty!");
        return false;
    }
    else if(password.length < 6){
        alert("Password must be atleast 6 chatacters long!");
        return false;
    }
    return true;
}
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
