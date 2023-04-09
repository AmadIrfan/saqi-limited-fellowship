// @ts-ignore

$(document).ready(function () {
  // @ts-ignore
  $("#ans-button").click(function () {
    // @ts-ignore
    let answer = $("#quiz-Box").val();
    console.log(answer);
    if (answer === "Lahore" || answer === "lahore") {
      // @ts-ignore
      $("#div-wrong-ans").remove();
      // @ts-ignore
      $("#ans-result").text("your answers is correct");
    } else {
      // @ts-ignore
      $("#div-wrong-ans").remove();
      // @ts-ignore
      $("#ans-result").before(
        '<div id="div-wrong-ans" style="color:red;"> your answers is wrong </div>'
      );
      // @ts-ignore
      $("#ans-result").text("Correct Answer is Lahore ");
      //        $('#ans-correct').text('Correct answer is Lahore ');
      // @ts-ignore
      let link = $("div > a").attr("href");
      console.log(link);
    }
  });
});
