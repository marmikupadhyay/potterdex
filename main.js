var charbox = document.querySelector(".charecters");
var housebox = document.querySelector(".houses");
var spellbox = document.querySelector(".spells");
var hat = document.getElementById("result");
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
  })
  .catch(err => {
    console.log(err);
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
  })
  .catch(err => {
    console.log(err);
  });

fetch(
  "https://www.potterapi.com/v1/spells?key=$2a$10$s78rAWXa..azjMNgt6KtreK1wkbcWHe7mMp39o7/S1gQgTsAxROFO"
)
  .then(res => res.json())
  .then(data => {
    var spells = data;
    spells.forEach(spell => {
      var spellcard = document.createElement("div");
      spellcard.className = "card z-depth-2 hoverable spell-card";
      spellcard.innerHTML = `<div class="card-content">
              <span class="card-title">${spell.spell}</span>
                <ul class="collection">
                    <li class="collection-item">Type -${spell.type}</li>
                    <li class="collection-item">Effect -${spell.effect}</li>
                </ul>
          </div>`;
      spellbox.appendChild(spellcard);
    });
  })
  .catch(err => {
    console.log(err);
  });

function sortingHat() {
  fetch("https://www.potterapi.com/v1/sortinghat")
    .then(res => res.json())
    .then(data => {
      var housename = data;
      result.innerHTML = `The Sorting Hat Says ... ${housename} !!!`;
    })
    .catch(err => {
      console.log(err);
    });
}
