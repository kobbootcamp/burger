//make sure the DOM is full loaded
$(function () {

  $(".devourIt").on("click", function (event) {

    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var newdevouredState = {
      devoured: true
    };
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(
      function () {
        console.log("changed devoured to", devoured);
        // Reload the page to get the updated list
        location.reload();
      })
  })

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
  
    var newBurger = {
      name: $("#newBurger").val().trim()
    }
  
    $.ajax("/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function () {
      alert("Added new burger")
      location.reload();
    })
  })
})


