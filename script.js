// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// $(document).ready(function)(){});
// $(function(nothing goes in here) {




$(function () {
  let html = ""
  let currentHour = dayjs().hour()
  console.log("current",currentHour)
  for (let i = 9; i < 18; i++) {
    var color =""
    if(i < currentHour){
      color = "past"
    }else if(i==currentHour){
      color= "present"
    }else{
      color= "future"
    }

    var currentTimeBlock =""
    if(i < 12){
      currentTimeBlock = i+" AM"
    }else if(i == 12){
      currentTimeBlock = i+" PM"
    }else{
      currentTimeBlock = (i-12)+" PM"
    }

    var storeEntries= localStorage.getItem("hour-"+i) || ""
    html += ` <div id="hour-${i}" class="row time-block ${color}">
    <div class="col-2 col-md-1 hour text-center py-3">${currentTimeBlock}</div>
    <textarea class="col-8 col-md-10 description" rows="3">${storeEntries} </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
` // html = html + ""

  }
 
  $(".container").html(html) //.innerHTML

  $(".container").on("click",".saveBtn",function(){
    var userEntry= $(this).siblings("textarea").val()
    var timeBlock = $(this).parent().attr("id")
    console.log("save",timeBlock,userEntry)
    localStorage.setItem(timeBlock,userEntry)
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