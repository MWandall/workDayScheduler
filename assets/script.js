
var saveButton = $('.saveBtn')

var hourNine = $('#hour-9')
var hourTen = $('#hour-10')
var hourEleven = $('#hour-11')
var hourTwelve = $('#hour-12')
var hourOne = $('#hour-13')
var hourTwo = $('#hour-14')
var hourThree = $('#hour-15')
var hourFour = $('#hour-16')
var hourFive = $('#hour-17')

var textInput = $('.description')


var currentTimeHours = dayjs().hour();


function timeColors() {
    textInput.each(function () {
        var timeBlock = $(this).attr("id");
   
    if (currentTimeHours > timeBlock) {
        $(this).addClass("past");
    } else if (currentTimeHours === timeBlock) {
        $(this).addClass("present");
        $(this).remove("past");
    } else {
        $(this).addClass("future");
        $(this).remove("present");
        $(this).remove("past");
    }
    
})};




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // *var textInput = $('.description')
    // *var saveButton = $('.saveBtn') written at top, just a reminder of names
    // *var hourNine = $('hour-9')

    // saveButton.on('click', function() {
    //     var text = hourNine.value;
    //     localStorage.setItem('userTextInput', JSON.stringify(text))

    // });

    // var storedText = localStorage.getItem(text);
    // if (storedText) {
    //     var pulledText = JSON.parse(savedText);
    //     hourNine.value = pulledText;
    // }

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    function timeColors() {
        textInput.each(function () {
            var timeBlock = $(this).attr("id");
       

        if (currentTimeHours === timeBlock) {
                $(this).addClass("present");
        
        } else if (currentTimeHours < timeBlock) {
            $(this).addClass("future");
            $(this).remove("present");
        } else {
            $(this).addClass("past");
            $(this).remove("present");
            $(this).remove("future");
        }
        
    })};
    

   
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //




    // TODO: Add code to display the current date in the header of the page.
    var timeDisplayEl = $('#clock')
    var currentDayEl = $('#currentDay')
  
    function displayTime() {
  
    var currentTime = dayjs().format('MMM DD [-] hh:mm:ss a');
    timeDisplayEl.text(currentTime);
    dayOfWeek = dayjs().format('dddd')
    currentDayEl.text(dayOfWeek)
    }

    
  displayTime();
  setInterval(displayTime, 1000);

  timeColors()


  });






//   var timeDisplayEl = $('#clock')
//   var currentDayEl = $('#currentDay')

//   function displayTime() {

//   var currentTime = dayjs().format('MMM DD [-] hh:mm:ss a');
//   timeDisplayEl.text(currentTime);
//   dayOfWeek = dayjs().format('dddd')
//   currentDayEl.text(dayOfWeek)
//   }

//   displayTime();
// setInterval(displayTime, 1000);

// timeColors()
