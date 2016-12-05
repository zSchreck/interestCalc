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
  // Preventing loading of page when button is clicked
  $(".dropbtn").click(function( event ) {
    event.preventDefault();
  });
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
  // Preventing loading of page when button is clicked
  $("#calculateButton").click(function( event ) {
    event.preventDefault();
  });

  var $principal = $('#principal')['0'].value;
  var $added = $('#added')['0'].value;
  var $years = $('#years')['0'].value;
  var $roi = $('#roi')['0'].value;
  var $interval = $('.dropbtn')['0'].textContent;

  //Converting to ammount added in a year
  if($interval === 'Week'){
    $added = $added * 52;
  }

  if ($interval === 'Month') {
    $added = $added * 12;
  }

  var balance = $principal/1;
  $roi /= 100;
  $roi += 1;
  for (var i = 0; i < $years; i++){
    balance += $added;
    console.log(balance);
    balance *= $roi;
  }
console.log(balance);
}
