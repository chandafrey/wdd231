const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('org-title'));
console.log(myInfo.get('email'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('business-name'));
console.log(myInfo.get('membership-level'));
console.log(myInfo.get('org-description'));


// On the "thankyou.html" page, you will display the form information 
// entered by the user for all "required" form fields (first name, 
// last name, email, mobile number, business name, and current date timestamp 
// from the hidden field). Style and display the information as you practiced 
// when you completed the "Advanced Forms" learning activity.

document.querySelector("#results").innerHTML = `
<p>Membership: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Title: ${myInfo.get('org-title')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Cell:  ${myInfo.get('phone')}</p>
<p>Business/Organization's Name:  ${myInfo.get('business-name')}</p>
<p>Membership Level:  ${myInfo.get('membership-level')}</p>
<p>Description:  ${myInfo.get('org-description')}</p>
<p>Timestamp: ${myInfo.get('timestamp')}</p>
`;