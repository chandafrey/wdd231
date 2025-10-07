const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('degree-cert'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('membership-level'));
console.log(myInfo.get('org-description'));


// On the "thankyou.html" page, you will display the form information 
// entered by the user for all "required" form fields (first name, 
// last name, email, mobile number, business name, and current date timestamp 
// from the hidden field). Style and display the information as you practiced 
// when you completed the "Advanced Forms" learning activity.

document.querySelector("#results").innerHTML = `
<p><span>Name: </span>${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><span>Degree/Certificate: </span>${myInfo.get('degree-cert')}</p>
<p><span>Email: </span>${myInfo.get('email')}</p>
<p><span>Cell:  </span>${myInfo.get('phone')}</p>
<p><span>Education Completed:  </span>${myInfo.get('membership-level')}</p>
<p><span>Description:  </span>${myInfo.get('org-description')}</p>
<p><span>Timestamp: </span>${myInfo.get('timestamp')}</p>
`;