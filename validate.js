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
