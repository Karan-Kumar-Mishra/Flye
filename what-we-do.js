document.addEventListener('DOMContentLoaded', () => {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let rplaceimg = document.querySelectorAll('.rplace-img');

    let box = `
      <div class="img-content">
          <div class="content2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>
              <h3>WEB DEVELOPMENT</h3>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque
          </div>
          <div class="button">
             <a href="https://fylehq.com" target="_blank">   READ MORE  </a>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg>
          </div>
      </div>
    `;

    let div = document.createElement('div');
    div.innerHTML = box;

    btn1.addEventListener('click', () => {
        document.getElementById('targetSection').scrollBy({ left: -1550, behavior: 'smooth' });
        console.log("try to scrolling btn1 ..");
    });

    btn2.addEventListener('click', () => {
        document.getElementById('targetSection').scrollBy({ left: 1550, behavior: 'smooth' });
        document.getElementById('targetSection').scrollBy({ left: -1550, behavior: 'smooth' });
        console.log("try to scrolling btn2 ..");
    });

    btn3.addEventListener('click', () => {
        document.getElementById('targetSection').scrollBy({ left: 300, behavior: 'smooth' });
        console.log("try to scrolling btn3 ..");
    });

    rplaceimg.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            console.log("enter..");
            const newDiv = div.cloneNode(true);
            element.parentNode.replaceChild(newDiv, element);
            setTimeout(() => {
                newDiv.parentNode.replaceChild(element, newDiv);
            }, 800);
        });
    });
});
