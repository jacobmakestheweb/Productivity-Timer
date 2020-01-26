  /////////////////////////
 ///////// TODO //////////
/////////////////////////
// 1.) Integrte sounds
// 2.) integrate nes.css progress bar  
// 2.) Solve use case for more than 30 minutes without refreshing the page (react?)


                                                    // TIME VARIABLES //
//  DEBUG VAR
// var timeleft = 5;

//  WORK TIME = 25 mins
var timeleft = 1500;

//  BREAK TIME = 5 mins
var breakTime = 300;
// DEBUG VAR
// var breakTime = 5;


var startTime = 0;
var breakStart = 0;
var currentTime = 0;

                                          //  Time Conversion So Timer Is Formatted //

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}
                                          
                                            // NOTTIFICATION MODALS //
var modal = document.querySelector(".modal");
var modal2 = document.querySelector(".modal2");

                                          // Displays Work Message //
function showWorkMessage() {
  

  
  let workMessage = document.getElementsByClassName("hide-message")[0];
  

  
  if ((workMessage.style.display = "none")) {
    workMessage.style.display = "block";
  } else {
    workMessage.style.display = "none";
        }
  }



 
function setup() {
  
                                          //   Init Stuff //
  var aud = new Audio('https://cdn.glitch.com/6214863c-1f14-499e-9aa1-88164119cf65%2Fding.mp3?v=1579845108375');


  
  noCanvas();
  startTime = null;
  breakStart = null;

  var startButton = select("#start-timer");

  window.check = false;

  startButton.mousePressed(startWork);
  
                                  // Timer Functionality Begins //
                           
                                  //   Inits Break Function //
  function beginBreak() {
    window.onBreak = true;
    modal.style.display = "none";
    if (window.onBreak == true) {
      breakStart = millis();
      window.interval2 = setInterval(startBreak, 1000);
    }
  }
                                // Inits Work Function //
  function startWork() {
    startTime = millis();

    window.interval1 = setInterval(timeIt, 1000);
    

    
  }

  

  var timer = select("#timer");
  timer.html(convertSeconds(timeleft - currentTime));

  let close = document.getElementsByClassName("close")[0];
  let close2 = document.getElementsByClassName("close2")[0];
  var timer2 = select("#timer2");
  
                                 // BREAK FUNCTION //
  
  function startBreak() {
    if (window.onBreak == true) {
      currentTime = floor((millis() - breakStart) / 1000);
      timer2.html(convertSeconds(breakTime - currentTime));
      if (currentTime == breakTime) {
        clearInterval(window.interval2);
        startTime = null;
                      //         Back To Work Modal
         function toggleModal2() {
        modal2.classList.toggle("show-modal");
      }
        aud.play();
        toggleModal2();
         

      }
          close2.onclick = function closeModal() {
      modal2.style.display = "none";
      window.onBreak = false;

              
   
      startTime = millis();
      window.interval1 = setInterval(timeIt, 1000);
      document.getElementById("timer2").innerHTML = "Get To Work !";
            //Refresh the current page.
window.location.reload(false);
      };
    }
  }    
  
  
  
  
                                // WORK FUNCTION //
  function timeIt() {

    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    if (currentTime === timeleft) {
      clearInterval(window.interval1);

      //      bring up 'go on break' modal
      function toggleModal() {
        
        modal.classList.toggle("show-modal");
          

      }
      aud.play();
      
      toggleModal();
     
    
    } 
    
                                     // STARTS BREAK //
    close.onclick = function closeModal() {
      modal.style.display = "none";
      window.onBreak = true;

              
      window.onBreak = true;
      breakStart = millis();
      window.interval2 = setInterval(startBreak, 1000);
      document.getElementById("timer").innerHTML = "Enjoy Your Break !";
    };
  }
  

}


