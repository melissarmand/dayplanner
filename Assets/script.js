$(document).ready(function () {
    // This adds a listener event for the save button on each hour
    $('.saveBtn').on('click', function () {
      // This defines the value (text written) and time (the hour in which the text was written)
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // This saves the information in our local storage
      localStorage.setItem(time, value);
  
      // This gives you the notification that your appointment has been added 
      $('.notification').addClass('show');
  
      // This removes the notification after 5 seconds
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function hourUpdater() {
      // This checks the current time....
      var currentHour = moment().hours();
  
      // ....vs each time block (the loops allows us to check each one)
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        // This allows us to compare the current hour to the time block hour time in the planner and updates the colors accordingly
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // This allows us to load any information that was saved in our local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // This displays the current date in the format of full day name, full month name and the date
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });
  