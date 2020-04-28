function myKeyPress(e){
    var mytextbox = document.getElementById('textinput').value;
    console.log(mytextbox);

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
  }
  
  function formatPhoneNumber(value){

    if(value.length == 3 || value.length == 7 )
      value = value + '-';

    return value;
  }