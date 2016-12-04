function validate(evnt){
    var eventToValidate = evnt || window.event;
    var key = eventToValidate.keyCode || eventToValidate.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
       eventToValidate.returnValue = false;
       if(eventToValidate.preventDefault) eventToValidate.preventDefault();
    }
}

function dropdown(){
  document.getElementById("myDropdown").classList.toggle("show");
}

function changeDropDown(time){
  var $dropdown = $('.dropbtn');
  $dropdown['0'].textContent = time;
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event){
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function calculate(){
  var $principal = $('#principal')['0'].value;
  var $added = $('#added')['0'].value;
  var $years = $('#timeToCalc')['0'].value;
  var $roi = $('#roi')['0'].value;
  var $interval = $('.dropbtn')['0'].textContent;
  console.log($interval);
  //Turning roi into a percentage
  roi = roi/100;

}
  function calculate(principal, added, years, roi, interval){

  }
