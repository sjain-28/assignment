let navbar = document.querySelector(".navbar");
let name = document.getElementById("user_name");
let email = document.getElementById("user_email");
let city = document.getElementById("user_city");

var pointer = document.getElementsByClassName("pointer");
console.log(pointer);
// pointer.forEach(element => {
//     document.addEventListener("mousemove", function (e) {
//         element.style.left = e.pageX + "px";
//         element.style.top = e.pageY + "px";
//         // console.log(e.pageX);
//     });
// });
for (let element of pointer) {
    document.addEventListener("mousemove", function (e) {
        element.style.display = "block";
        element.style.left = e.pageX + 10 + "px";
        element.style.top = e.pageY + 20 + "px";
        // console.log(e.pageX);
    });
    document.addEventListener("mouseout", function (e) {
        element.style.display = "none";
    })
}

document.addEventListener("scroll", function () {
    if (window.pageYOffset > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

});


function sendMail() {
    var tempParams = {
        to_name: "Shubham",
        user_name: name.value,
        user_email: email.value,
        user_city: city.value
    }
    emailjs.send("service_zy5jf76", "template_4picust", tempParams, "user_Rug0qw1kZgxDpeEWKzU1V");
}





function validate() {
    document.getElementById("contact-button").addEventListener("click", (e) => {
        e.preventDefault();

        if (name.value === "" || email.value === "" || city.value === "") {
            inputEmpty();
        }
        else {
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))) {
                error();
            } else {
                sendMail();
                success();
                document.getElementById("lead_form").reset();
            }
        }

    });

}
validate();

function success() {
    swal({
        title: "Yay!",
        text: "Your response has been sent successfully!",
        icon: "success",
        button: "Ok",
    });
}

function error() {
    swal({
        title: "Oops!",
        text: "Invalid Email Address",
        icon: "error",
        button: "Ok",
    });
}

function inputEmpty() {
    swal({
        title: "Oops!",
        text: "Input fields are required",
        icon: "error",
        button: "Ok",
    });
}