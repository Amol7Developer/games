function myMove() {
    let id = null;
    const elem = document.getElementById("animate");  
    const elem1 = document.getElementById("animate1"); 
    const elem2 = document.getElementById("animate2");  
    const elem3 = document.getElementById("animate3");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
        elem1.style.top = pos + "px"; 
        elem1.style.left = pos + "px"; 
        elem2.style.top = pos + "px"; 
        elem2.style.left = pos + "px"; 
        elem3.style.top = pos + "px"; 
        elem3.style.left = pos + "px"; 
      }
    }
  }
  