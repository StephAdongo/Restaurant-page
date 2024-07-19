export default function menu () {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-div');
    function menuCard(name, description, price) {
      const card = document.createElement('div');
      card.classList.add('menu-card');
  
      const title = document.createElement('h1');
      title.textContent = name;
      title.classList.add('name');
      card.appendChild(title);
  
      const cardContent = document.createElement('p');
      cardContent.textContent = description;
      cardContent.classList.add('description');
      card.appendChild(cardContent);
  
      const cost = document.createElement('p');
      cost.textContent = price;
      cost.classList.add('price');
      card.appendChild(cost);
  
      return card;
    }
    const risotto = menuCard('Risotto', 'A rich and creamy rice dish cooked in chicken broth. Contains dairy', '$20.00');
    const pozole = menuCard('Pozole Verde', 'Our favorite healthy and hearty Mexican stew, filled with bold flavors and green chile, chicken, and hominy', '$17.00');
    const shortrib = menuCard('Short Ribs', 'Tender cooked ribs in a delicious, rich sauce, served over creamy mashed potatoes. All cooked in just one pot!', '$22.00');
    const beet = menuCard('Beet Salad', 'Reset with this healthy superfood salad featuring raw beets, carrot, quinoa, spinach, edamame and avocado. It\'s as colorful as it is nutritious!', '$15.00');
    const ratatouille = menuCard('Ratatouille', 'Ripe summer tomatoes, zucchini, eggplant, and bell pepper in a delicious version of the classic French vegetable stew.', '$17.00');
    menuContainer.appendChild(risotto);
    menuContainer.appendChild(pozole); 
    menuContainer.appendChild(shortrib);
  menuContainer.appendChild(beet);
  menuContainer.appendChild(ratatouille);
  
  return menuContainer;
} 
