const data = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

console.log(data);

const characters = data.characters;
console.log(characters);

const containerDiv = document.getElementById("card-container");
const radioButtonsContainer = document.getElementById(
  "homeworld-radio-buttons"
);
const button = document.getElementById("button");

let isActive = false;
console.log(isActive);

const renderChars = (renderCharacters = characters) => {
  const row = document.createElement("div");
  row.classList.add("row", "d-flex", "justify-content-center", "m-2");
  containerDiv.append(row);

  for (i = 0; i < characters.length; i++) {
    //console.log(characters[i].pic, characters[i].name, characters[i].homeworld);
    let pic = renderCharacters[i].pic;
    let name = renderCharacters[i].name;
    let homeworld = (renderCharacters[i].homeworld ?? "other").toLowerCase();
    let cardHTMLData = `
    <div class="row m-2">
            <div class="card" style="width: 18rem;">
                <img src="${pic}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${homeworld}</p>
                </div>
            </div>
        </div>
    `;

    row.innerHTML += cardHTMLData;
  }
};

const removeChars = () => {
  const row = document.querySelector(".row");
  row.remove();
};

const changeCharVisibility = () => {
  if (!isActive) {
    renderChars();
    isActive = true;
    button.innerHTML = "Hide Characters";
    button.classList.replace("btn-primary", "btn-danger");
  } else {
    removeChars();
    isActive = false;
    button.innerHTML = "Show Characters";
    button.classList.replace("btn-danger", "btn-primary");
    console.log(isActive);
  }
};

const getUniqueHomeWorld = () => {
  const homeworldRaw = characters.map(
    (character) => character.homeworld ?? "other"
  );
  const homeworldRawLowerCase = homeworldRaw.map((homeworld) =>
    homeworld.toLowerCase()
  );
  const uniqueHomeworldList = [...new Set(homeworldRawLowerCase)];
  console.log("homeworldRaw   ----->    " + homeworldRaw);
  console.log("homeworldRawLowerCase   ----->    " + homeworldRawLowerCase);
  console.log("uniqueHomeworldList   ----->    " + uniqueHomeworldList);
  return uniqueHomeworldList;
};

const renderFilters = () => {
  homeworldList = getUniqueHomeWorld();
  homeworldList.push("all");

  for (i = 0; i < homeworldList.length; i++) {
    let homeworldInput = document.createElement("input");
    let homeworldInputLabel = document.createElement("label");
    homeworldInput.setAttribute("type", "radio");
    homeworldInput.name = "homeworldInput";
    homeworldInput.value = homeworldList[i];
    homeworldInput.classList.add("form-check-input");
    homeworldInputLabel.classList.add("form-check-label");
    homeworldInputLabel = homeworldList[i];
    homeworldInputLabel.htmlFor = homeworldList[i];
    console.log("homeworldInput label  ---->   " + homeworldInputLabel);
    const div = document.createElement("div");
    containerDiv.append(div);
    containerDiv.append(homeworldInput);
    containerDiv.append(homeworldInputLabel);
    if (homeworldInput.value === "all") {
      homeworldInput.checked = true;
    }

    /* homeworldInput.addEventListener("click", () => {
      let filteredHomeworld;
      if (homeworldInput.value === "other") {
        filteredHomeworld = characters.filter((character) => {
          character.homeworld === undefined;
          console.log("1 " + filteredHomeworld);
        });
      } else if (homeworldInput.value === "all") {
        filteredHomeworld = characters;
        console.log("2 " + filteredHomeworld);
      } else {
        filteredHomeworld = characters.filter(
          (character) => character.homeworld === homeworldList[i]
        );
        console.log("3 " + filteredHomeworld);
      }
      removeChars();
      console.log(
        "filteredHomeworld =    " +
        filteredHomeworld.homeworld +
          " " +
          homeworldInputLabel
      );
      renderChars(filteredHomeworld);
    }); */
  }
  let radioButtons = document.getElementsByName("homeworldInput");
  let prev = null;

  let filteredHomeworld;
  let radioButtonValue;
  for (i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
      prev ? console.log("Previous value = " + prev.value) : null;
      if (this !== prev) {
        prev = this;
        radioButtonValue = this.value;
      }
      if (radioButtonValue === "all") {
        filteredHomeworld = characters;
        console.log("1 " + "filteredHomeworld = " + filteredHomeworld);
      } else if (radioButtonValue === "other") {
        filteredHomeworld = characters.filter(
          (character) => character.homeworld === undefined
        );
        console.log("2 " + "filteredHomeworld = " + filteredHomeworld);
      } else {
        filteredHomeworld = characters.filter(
          (character) => character.homeworld?.toLocaleLowerCase() === radioButtonValue
        );
        console.log("3 " + "filteredHomeworld = " + filteredHomeworld);
      }
      removeChars();
      renderChars(filteredHomeworld);
    });
  }
};

renderFilters();
