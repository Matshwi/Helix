const searchForm = document.querySelector(".microphone"); // <=> document.querySelector("#search-form input");


// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  // recognition.lang = "en-US";

  
  

  const micBtn = document.querySelector(".microphone");



  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micBtn.classList.contains("microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micBtn.classList.remove("microphone");
    micBtn.classList.add("microphoneon");
    //searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micBtn.classList.remove("microphoneon");
    micBtn.classList.add("microphone");
    //searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    if(transcript.toLowerCase().trim()==="set appointment") {
      //recognition.stop();
      console.log(transcript + "this befor the popup function");
location.href = "https://www.google.com";
      $(document).ready(function(){
    $(".popup-content").animate({
      left: '100%',
      opacity: '0',
      height: '150px',
      width: '150px'
    });
     $(".popup-content1").show();
});
      console.log(transcript + "this after the popup function");
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
      console.log(transcript + "this searchFormInput.value function");
    }
    else {
      console.log(transcript + "this else function");
      if(transcript.toLowerCase().trim()==="go") {
        searchForm.submit();
        console.log(transcript + "this nested if function");
      }
      else if(transcript.toLowerCase().trim()==="reset input") {
        searchFormInput.value = "";
        console.log(transcript + "this searchFormInput.nullvalue function");
      }
      else {
        searchFormInput.value = transcript;
        console.log(transcript + "this value function");
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  }
  
  info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}