const countDown = (function(){

  // function to return difference in days between now and the date passed 
  const daysLeft = function(toDate) {
    dt1 = new Date();
    dt2 = new Date(toDate);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  // create the html for the countdown digits
  const createDigits = function(toDate) {

    let countHTML = "";
    const daysLeftInt = daysLeft(toDate);
    const digitsArr = (daysLeftInt + '').split('');

    digitsArr.forEach(function (digit, index) {
      countHTML += `<div class="countdown__digit">${digit}</div>`;
    });
    
    // inject the html
    const countdownEl = document.querySelector('.countdown');
    countdownEl.innerHTML = countHTML;
  }

  
	return {
		init: function(date) {
      // put something here
      createDigits(date);
		}
	}

})();

// enter the date you're counting down to mm/dd/yyyy
countDown.init('09/30/2020');


