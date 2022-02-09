function bindEvents() {

function newCard(name, image, phone, email, description) {
    return `<div class="card">
    <div class="basic-info">
    <div class="image-thumb">
      <img src=${image} class="image-thumb" />
     </div>
      <div class="contact-info" >
        <p>${name} </p>
        <p>${phone}</p>
        <p>${email}</p> 
      </div>
    </div>
    <div class="text-content">
    <p>${description}</p>
    </div>
    
  </div>
    `;
  }
  const names = [
    "Abhinav Mishra",
    "Mukul Agarwal",
    "Navneet Kaur",
    "Dhruv Dogra",
    "Bharat Rajmalani"
  ];
  
  const numbers = [
    "111-222-333",
    "444-555-666",
    "666-777-777",
    "999-999-999",
    "456-767-676"
  ];
  
  const emails = [
    "test_email@test.com",
    "bbb@gmail.com",
    "hello@hello.com",
    "aggag@gmail.com",
    "testemail@test.com"
  ];
  
  function addHTML(e) {
    var idx = Math.floor(Math.random() * 5);
    const removeButton = document.getElementById("remove");
    if (removeButton.classList.contains("disabled")) {
      removeButton.classList.remove("disabled");
    }
    var name = names[idx];
    var email = emails[idx];
    var phone = numbers[idx];
    var image = `https://picsum.photos/200/300?q=${new Date().getTime()}`;
  
    var container = document.getElementById("container");
    var description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, earum.";
    var newHTML = newCard(name, image, phone, email, description);
  
    container.insertAdjacentHTML("beforeend", newHTML);
  }
  
  function removeHTML() {
    const cards = document.querySelectorAll(".card");
    const removeButton = document.getElementById("remove");
    if (cards && cards.length >= 1) {
      if(cards && cards.length == 1) {
        removeButton.classList.add("disabled")
      }
      cards[cards.length - 1].remove();
      
    } 
    
  }
  
  document.getElementById("add").onclick = addHTML;
  document.getElementById("remove").onclick = removeHTML;
  
}
window.addEventListener('DOMContentLoaded', () => bindEvents())
