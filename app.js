function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("check");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        console.log("yes");
      } else {
        text.style.display = "none";
        console.log("no");
      }
  }

 var x = document.getElementById("about");
  x.addEventListener("click", disappearfunc);
  
  function disappearfunc() {
    text.style.display = "none";
    console.log("clicked");
  }

  var y = document.getElementById("academics");
  y.addEventListener("click", disappearfunc);
  
  function disappearfunc() {
    text.style.display = "none";
    console.log("clicked");
  }

  var z = document.getElementById("skill-set");
  z.addEventListener("click", myfunc1);
  
  function myfunc1() {
    text.style.display = "none";
    console.log("clicked");
  }

  var a = document.getElementById("inte");
  a.addEventListener("click", myfunc2);
  
  function myfunc2() {
    text.style.display = "none";
    console.log("clicked");
  }