export default function about () {
    const element = document.createElement('div');
    const contact = document.createElement('div');
    contact.classList.add('contact');

const title = document.createElement('h1');
title.classList.add('headline');
title.textContent = 'The Branch Restaurant';
contact.appendChild(title);

const number = document.createElement('p');
number.classList.add('info');
number.textContent = 'Phone number: +254 720030099';
number.appendChild(number);

const email = document.createElement('p');
email.classList.add('info');
email.textContent = 'Email : thebranchrestaurant99@gmail.com';
email.appendChild(email);

const location = document.createElement('p');
location.classList.add('info');
location.textContent = 'Location : 345 Kenyatta Avenue,Toers plaza first floor';
location.appendChild(location);

element.appendChild(contact);

const hours = document.createElement('h2');
hours.classList.add('hours');
hours.textContent = 'Hours';
element.appendChild(hours);

const schedule = document.createElement('ul');
const sunday = document.createElement('li');
sunday.textContent = 'Closed';
schedule.appendChild(sunday);
const monday = document.createElement('li');
monday.textContent = 'Monday: 6.00AM - 11.00PM';
schedule.appendChild(monday);
const tuesday = document.createElement('li');
tuesday.textContent = 'Tuesday: 6.00AM - 11.00PM';
schedule.appendChild(tuesday);
const wednesday = document.createElement('li');
wednesday.textContent = 'Wednesday: 6.00AM - 11.00PM';
schedule.appendChild(wednesday);
const thursday = document.createElement('li');
thursday.textContent = 'Thursday: 6.00AM - 11.00PM';
schedule.appendChild(thursday);
const friday = document.createElement('li');
friday.textContent = 'Friday: 6.00AM - 11.00PM';
schedule.appendChild(friday);
const saturday = document.createElement('li');
saturday.textContent = 'Saturday: 10.00AM - 9.00PM';
schedule.appendChild(saturday);
element.appendChild(schedule);

return element;
}
