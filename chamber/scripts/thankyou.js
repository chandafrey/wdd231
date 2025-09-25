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


document.querySelector("#results").innerHTML = `
<p>Membership: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Title: ${myInfo.get('org-title')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Cell:  ${myInfo.get('phone')}</p>
<p>Business/Organization's Name:  ${myInfo.get('business-name')}</p>
<p>Membership Level:  ${myInfo.get('membership-level')}
<p>Description:  ${myInfo.get('org-description')}`