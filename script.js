window.onload = function () {//this function delays the running of the code below until the page content is fully loaded, so that the variables will have something to bind to

  /* global variables */
  var root = document.querySelector(':root');//this one makes all of the below style functions possible by finding the html CSS element, :root, so we can change it in the functions
  var hidden = document.getElementById('hidden-features');//gets the hidden feature tray
  var showFeatures = document.getElementById('show-features');//gets button
  var larger = document.getElementById('large-text');//gets button
  var smaller = document.getElementById('small-text');//gets button

  /* input */
  showFeatures.addEventListener('click', toggleVisibility);//this listens for the button click from the user
  larger.addEventListener('click', enlargeAll);//listens for user button click
  smaller.addEventListener('click', minimizeAll);//listens for user button click

  /* output */
  function toggleVisibility() {//opens and closes the mobile menu
    if (hidden.classList == 'visually-hidden') {//this is the default state of the hidden aside
      hidden.style.height = '50px';
      hidden.classList.remove('visually-hidden');
      hidden.classList.add('revealed');
    } else {
      hidden.style.height = '1px';
      setTimeout(function() {//sets a delay so the height can animate to 1px before the nav disappears completely
        hidden.classList.remove('revealed');
        hidden.classList.add('visually-hidden');
      }, 300);//the time of delay in ms which matches nav's CSS transition
    }//end if statement
  };//end toggleVisibility

  function enlargeAll() {//causes visual sizes of the below elements to double their size
    root.style.setProperty('--h1', '3em');
    root.style.setProperty('--h2', '2.2em');
    root.style.setProperty('--main-h1', '3vw');
    root.style.setProperty('--p', '1.8em');
    root.style.setProperty('--b', '1.8em');
    root.style.setProperty('--mh1-width', '75%');
    root.style.setProperty('--px100', '150px');
    root.style.setProperty('--px50', '75px');
    hidden.style.height = '75px';
  }//end enlargeAll

  function minimizeAll() {//causes sizes to be halved
    root.style.setProperty('--h1', '2em');
    root.style.setProperty('--h2', '1.7em');
    root.style.setProperty('--main-h1', '2.5vw');
    root.style.setProperty('--p', '1.2em');
    root.style.setProperty('--b', '1.2em');
    root.style.setProperty('--mh1-width', '60%');
    root.style.setProperty('--px100', '100px');
    root.style.setProperty('--px50', '50px');
    hidden.style.height = '50px';
  }//end minimizeAll

};//end the initial delay function
