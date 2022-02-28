var main = $('main');
//var currentDay = $("#currentDay");
// document.querySelector('#currentDay')

var displayScheduler = function() {
  var weekDay = moment().format("dddd, MMMM Do");
  $('#currentDay').text(weekDay);

  // loop through hours from 9am to 5pm
  for(i=9; i <= 17; i++){
    // default hour to equal i and ampm to AM
    var hr = i;
    var ampm = "AM";

    // reset clock for PM 
    if (i/12 > 1) {
      hr = i%12;

    };
    // define afternoon times as PM 
    if(i/12 >= 1) {      
      ampm = "PM";
    }

    var currentTime = moment().hour();

    var hour = document.createElement('section');
    
    if(i < currentTime) {
          hour.innerHTML =   "<section class='row font-weight-bold justify-content-center'><label class='col-1 hour text-right py-3 pr-4'>" + hr + ampm + "</label><textarea class='col-8 row font-weight-bold justify-content-center past' id='h9'></textarea><button class='saveBtn col-1 fa-solid fa-floppy-disk mr-2'></button></section>";
      }   else if(i === currentTime) {
        hour.innerHTML =   "<section class='row font-weight-bold justify-content-center'><label class='col-1 hour text-right py-3 pr-4'>" + hr + ampm + "</label><textarea class='col-8 row font-weight-bold justify-content-center present' id='h9'></textarea><button class='saveBtn col-1 fa-solid fa-floppy-disk mr-2'></button></section>";
      }
    else {
        hour.innerHTML =   "<section class='row font-weight-bold justify-content-center'><label class='col-1 hour text-right py-3 pr-4'>" + hr + ampm + "</label><textarea class='col-8 row font-weight-bold justify-content-center future' id='h9'></textarea><button class='saveBtn col-1 fa-solid fa-floppy-disk mr-2'></button></section>";
        }    

    $(main).append(hour);
  }
}

displayScheduler();