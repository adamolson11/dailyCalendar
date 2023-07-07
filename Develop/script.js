// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// $(document).ready(function)(){});
// $(function(nothing goes in here) {


//https://www.w3schools.com/jquery/jquery_syntax.asp#:~:text=The%20Document%20Ready%20Event&text=This%20is%20to%20prevent%20any,ready%20before%20working%20with%20it.


$(function () {
  let html = ""
  for (let i = 9; i < 18; i++) {
    html += ` <div id="hour-${i}" class="row time-block past">
    <div class="col-2 col-md-1 hour text-center py-3">${i}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
`

  }
 
  $(".container").html(html)

  $(".container").on("click",".saveBtn",function(){
    var userEntry= $(this).siblings("textarea").val()
    var timeBlock = $(this).parent().attr("id")
    console.log("save",timeBlock,userEntry)
  })
  // TODO: Add a listener for click events on the save button. 
  // element.addEventListener("click", myFunction)
  // time-block.addEventListener("click",)
  //This code should use the id in the containing time-block as a key to save the user input in
  // local storage.

  // HINT: What does `this` reference in the click listenerfunction? How can DOM traversal be used to get the "hour-x" id of the

  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));//TODO: Add code to display the current date in the header of the page.
});
// }); these are for the document ready function...