console.log("working");

$(document).ready(function (){

    $("#contact").click(function (event){
        event.preventDefault()
        console.log("clicked")
    })

    var name = $(".name").val();
    console.log(name);
    var email = $(".email").val();
    var message = $(".message").val();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
        event.preventDefault()
        console.log ("good on ya!");
    } else {
        console.log ("you suck");
    }

    if (name.length >= 5) {
        event.preventDefault()
        console.log ("good on ya!");
    } else {
        console.log ("you suck");
    }

    if (message.length >= 5) {
        event.preventDefault()
        console.log ("good on ya!");
    } else {
        console.log ("you suck");
    }

})