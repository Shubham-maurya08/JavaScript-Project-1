function showTime() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
  
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
      hrs = hrs - 12;
      session = "PM";
    }
  
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    document.getElementById("hours").innerText = hrs;
    document.getElementById("min").innerText = min;
    document.getElementById("sec").innerText = sec;
    document.getElementById("AM-PM").innerText = session;
    setTimeout(showTime, 1000);
  }
  showTime();
  
  function printVal() {
    const textChange = document.getElementById("quote"); 
    const picChange = document.getElementById("img_section"); 
    const wakeUp = document.querySelector("#dropdown_1").value;
    const lunch = document.querySelector("#dropdown_2").value;
    const nap = document.querySelector("#dropdown_3").value;
    const dinner = document.querySelector("#dropdown_4").value;
  
    const w_t = document.querySelector("#display_1").innerText = wakeUp;
    const l_t = document.querySelector("#display_2").innerText = lunch;
    const n_t = document.querySelector("#display_3").innerText = nap;
    const d_t = document.querySelector("#display_4").innerText = dinner;
  
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
  
    if (hrs == 0){
        hrs = 12;
    } 
    if (hrs > 12) {
      hrs = hrs - 12;
      session = "PM";
    }
  
    document.getElementById("hours").innerText = hrs;
    document.getElementById("min").innerText = min;
    document.getElementById("sec").innerText = sec;
    document.getElementById("AM-PM").innerText = session; 
  
    let match = `${hrs}${session}-${parseInt(hrs)+1}${session}`;
    if (w_t == match) {
      textChange.innerText = "Grab Some Healthy Breakfast";
      picChange.src = "./images/Tea.jpg";
    }
    if (l_t == match) {
      textChange.innerText = "Grab Some Healthy Food";
      picChange.src = "./images/food.jpg";
    }
    if (n_t == match) {
      textChange.innerText = "Snacks and Tea Time";
      picChange.src = "./images/Tea.jpg";
    }
    if (d_t == match) {
      textChange.innerText = "Sleeping Time";
      picChange.src = "./images/Sleeptime.jpeg"
    }
  }

