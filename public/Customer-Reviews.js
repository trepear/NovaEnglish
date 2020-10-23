$(document).ready(function (){

// GET route for getting all comments
const getComments = () => {
    return $.ajax({
        url: "/api/comments",
        method: "GET",
    }).then(function(comment){
        for (let i = 0; i < comment.length; i++) {
            let name = comment[i].name;
            let service = comment[i].title
            let body = comment[i].body;
            let id = comment[i].id;
         
            var commentContainer = $("<div>").attr("class", "u-container-style u-list-item u-repeater-item u-list-item-2");
            var containerLayout = $("<div>").attr("class", "u-container-layout u-similar-container u-valign-top u-container-layout-2");
            var commentImg = $("<div>").attr({"class":"u-align-left u-image u-image-circle u-image-1", "data-image-width":"1280", "data-image-height":"1280"});
            var anotherDiv = $("<div>").attr("class", "u-container-style u-expanded-width-xs u-group u-group-2");
            var contentDiv = $("<div>").attr("class", "u-container-layout u-valign-top u-container-layout-3");
            var reviewText = $("<p>").attr("class", "u-text u-text-2")
            var serviceText = $("<h6>").attr("class", "u-text u-text-3")
            var nameText = $("<h5>").attr("class", "u-text u-text-4")

            reviewText.text("'" + body + "'");
            serviceText.text("Service Used: " + service);
            nameText.text( " -" + name);
            
            $(contentDiv).append(reviewText);
            $(contentDiv).append(serviceText);
            $(contentDiv).append(nameText);
            
            $(anotherDiv).append(contentDiv);
            $(containerLayout).append(commentImg);
            $(containerLayout).append(anotherDiv);
            $(commentContainer).append(containerLayout);
            $("#heading").append(commentContainer);
    }

    })

}
getComments();


// POST route for posting new review
$("#submit-btn").on("click", postComment);
function postComment(event) {
    event.preventDefault();
var settings = {
    "url": "/api/comments",
    "method": "POST",
    "timeout": 0,
    "data": {
      "name": $("#formName").val(),
      "title": $("#formSelect").val(),
      "body": $("#formMessage").val(),
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}

})