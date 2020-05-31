var charbox = document.querySelector(".charecters");

var housebox = document.querySelector(".houses");
var charecters = [];
fetch(
  "https://www.potterapi.com/v1/characters?key=$2a$10$s78rAWXa..azjMNgt6KtreK1wkbcWHe7mMp39o7/S1gQgTsAxROFO"
)
  .then(res => res.json())
  .then(data => {
    charecters = data;
    charecters.forEach(charecter => {
      var charcard = document.createElement("div");
      charcard.className = "card z-depth-2 hoverable char-card";
      charcard.innerHTML = `
          <div class="card-content">
              <span class="card-title">${charecter.name}</span>
                <ul class="collection">
                    <li class="collection-item">Role -${charecter.role}</li>
                    <li class="collection-item">House -${charecter.house}</li>
                    <li class="collection-item">School -${charecter.school}</li>
                    <li class="collection-item">Ministry Of Magic -${charecter.ministryOfMagic}</li>
                    <li class="collection-item">Order Of The Phoenix -${charecter.orderOfThePhoenix}</li>
                    <li class="collection-item">Dumbledores Army -${charecter.dumbledoresArmy}</li>
                    <li class="collection-item">Death Eater -${charecter.deathEater}</li>
                    <li class="collection-item">Blood Status -${charecter.bloodStatus}</li>
                    <li class="collection-item">Species -${charecter.species}</li>
                </ul>
          </div>
        `;
      charbox.appendChild(charcard);
    });
  });

fetch(
  "https://www.potterapi.com/v1/houses?key=$2a$10$s78rAWXa..azjMNgt6KtreK1wkbcWHe7mMp39o7/S1gQgTsAxROFO"
)
  .then(res => res.json())
  .then(data => {
    var houses = data;
    console.log(houses);
    houses.forEach((house, index) => {
      var housecard = document.createElement("div");
      housecard.className = "card z-depth-2 hoverable house-card";
      housecard.innerHTML = `<div class="card-image">
            <img src="imgs/house${index + 1}.jpg" alt="" />
            <span class="card-title">${house.name}</span>
          </div>
          <div class="card-content">
            <ul class="collection">
                    <li class="collection-item">Mascot -${house.mascot}</li>
                    <li class="collection-item">Head of House -${
                      house.headOfHouse
                    }</li>
                    <li class="collection-item">House Ghost -${
                      house.houseGhost
                    }</li>
                    <li class="collection-item">Founder -${house.founder}</li>
                    <li class="collection-item">School-${house.school}</li>
            </ul>
          </div>`;
      housebox.appendChild(housecard);
    });
  });
