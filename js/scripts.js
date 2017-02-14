$(function() {
  $("#survey").submit(function(event){
    var person1Input = $("input#student1").val();

    $(".name1").text(person1Input);

    $("#thankyou").show();

    event.preventDefault();
  });
});
