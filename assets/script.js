
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
var saveButton = $('.saveBtn')


var currentTimeHours = dayjs().hour();



$(function () {

    console.log(savedSchedule())

//saving any user input to respective time keys
    var saveButton = $('.saveBtn');
    saveButton.on("click", function () {
        // event.preventDefault();
        var buttonId = $(this).attr("id")
        var userInputField = $(this).siblings(".description").val();
        
        localStorage.setItem(buttonId, userInputField);
        savedSchedule();

    });

    savedSchedule();

//loop intended to append to page
    function savedSchedule() {
        for (var i = 9; i <= 17; i++) {

            
            var scheduleEntry = localStorage.getItem(i);
            $("#" + i + "").text(scheduleEntry);
        }

    }




//dynamic color change added

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
    


    // Add code to display the current date 
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

  savedSchedule()


  });


