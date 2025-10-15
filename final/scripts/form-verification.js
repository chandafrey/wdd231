const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('language'));
console.log(myInfo.get('comments'));


// On the "thankyou.html" page, you will display the form information 
// entered by the user for all "required" form fields (first name, 
// last name, email, mobile number, business name, and current date timestamp 
// from the hidden field). Style and display the information as you practiced 
// when you completed the "Advanced Forms" learning activity.

document.querySelector("#results").innerHTML = `
<p><span>Name: </span>${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><span>Email: </span>${myInfo.get('email')}</p>
<p><span>Cell:  </span>${myInfo.get('phone')}</p>
<p><span>Web Language:  </span>${myInfo.get('language')}</p>
<p><span>Description:  </span>${myInfo.get('comments')}</p>
<p><span>Timestamp: </span>${myInfo.get('timestamp')}</p>
`;