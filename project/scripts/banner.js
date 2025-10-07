/* ---------------------------Banner----------------------------- */

document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dayOfWeek = today.getDay();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      document.getElementById("banner").style.display = "block";
    }
  
    document.getElementById("close-banner").addEventListener("click", function() {
      document.getElementById("banner").style.display = "none";
    });
  });



  /* document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("banner").style.display = "block";
  
    document.getElementById("close-banner").addEventListener("click", function() {
      document.getElementById("banner").style.display = "none";
    });
  });
  */