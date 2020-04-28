

function myKeyPress(e){

    /* TODO: retrieve the value from the text input */

    var mytextbox = document.getElementById('textinput').value;
    console.log(mytextbox);
  
  
    // TODO: set the value of the textbox with the formatted value
  
    var keyPressed;
    if(window.event) { // IE
      keyPressed = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keyPressed = e.which;
    }
  
    var x = String.fromCharCode(keyPressed);
    var y = formatPhoneNumber(mytextbox);

    console.log("Key Pressed = " + x);
    console.log("  Formatted = " + y);
  
    
    if(mytextbox.length >= 12){
      return false
    }
    document.getElementById('textinput').value = y;
    // TODO: Add a condition to ignore entries beyond 10 digits
  
  }
  
  function formatPhoneNumber(value){
  
    /* TODO:  Use replace function to ignore extra - character */
    
    if(value.length == 3 || value.length == 7 )
      value = value + '-';

    return value;
  }