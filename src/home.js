import image from './homepage.jpg';

export default function home (){
const element = document.createElement('div');
const imageContainer = document.createElement('div');
imageContainer.classList.add ('image-container');

const img = new Image()
img.src = image;
imageContainer.appendChild(img);

const imgcaption = document.createElement('p');
imgcaption.classList.add('imgcaption');
  imageContainer.appendChild(imgcaption);

element.appendChild(imageContainer);

const headline = document.createElement('h1');
headline.textContent = 'Come have mouthwatering delicacies!';
headline.classList.add('headline');
element.appendChild(headline);

const info = document.createElement('p');
info.classList.add('info');
info.textContent = 'Our cozy restaurant provides a fine dining experience at unbeatable prices. Experience our exquisite menu with the whole family! Healthy and delicious, serving lunch and dinner 6 days per week.'
element.appendChild(info);

const hours = document.createElement('h2');
hours.classList.add('hours');
hours.textContent = 'Hours';
element.appendChild(hours);

const schedule = document.createElement('ul');
const sunday = document.createElement('li');
sunday.textContent = 'Sunday: Closed';
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