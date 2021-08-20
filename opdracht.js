//const superheroes = require ('./superheroes');

const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]



//1
const superheroNames = () => {
    return superheroes.map (superhero => superhero.name);
}

console.log("All the names of the Superheroes:",superheroNames());

//2
const superheroLightWeight = () => {
    return superheroes.filter (superhero => superhero.weight < 190);
}

console.log("Superheroes under 190 pounds:",superheroLightWeight());

//3
const superheroesThatWeigh200Pounds = () => {
    return superheroes.filter (superhero => superhero.weight === "200")
    .map (superhero => superhero.name);  
}
console.log("Names of superheroes that weigh 200 pounds:",superheroesThatWeigh200Pounds());

//4 
const ComicsFirstAppearences = () => {
    return superheroes.map (superhero => superhero.first_appearance);
}

console.log("All Comics where Superheroes made their first appearences:",ComicsFirstAppearences());

//5 
const superheroesThatArePublishedByDCComics = () => {
    return superheroes.filter (superhero => superhero.publisher === "DC Comics")
    .map (superhero => superhero.name)
}

const superheroesThatArePublishedByMarvelComics = () => {
    return superheroes.filter (superhero => superhero.publisher === "Marvel Comics")
    .map (superhero => superhero.name)
}

console.log("Published by DC Comics:",superheroesThatArePublishedByDCComics(),
"Published by Marvel Comics:",superheroesThatArePublishedByMarvelComics());


//6
const DCComics = superheroes.filter(superheroes => superheroes.publisher === "DC Comics");

const heroWeights = DCComics.map(superheroes => {
    if (superheroes.weight !== "unknown") {
      // de Hero weights zijn in de data opgenamen als strings, e.g: '40'
      // Deze moet je even parsen naar een integer, zodat je er mee kunt rekenen.
      return parseInt(superheroes.weight, 10);
    } else {
      // wanneer het gewicht dus "unknown" is, dan wil je het gewicht van 0 optellen.
      return 0;
    }
  });
  
  const addedWeightOfHeroes = heroWeights.reduce((accumulative, currentValue) => {
    return accumulative + currentValue;
  });
  
  console.log("Combined weight of superheroes from DC Comics:", addedWeightOfHeroes);

  //verkorte oplossing:
  const addedWeightDC = DCComics.map(superheroes => {
    return superheroes.weight !== "unknown" ? parseInt(superheroes.weight, 10) : 0;
  }).reduce((accumulative, currentValue) => accumulative + currentValue);

  console.log("Combined weight of superheroes from DC Comics:", addedWeightDC);


  //7
const MarvelComics = superheroes.filter(superheroes => superheroes.publisher === "Marvel Comics");

const heroWeightsMarvel = MarvelComics.map(superheroes => {
    if (superheroes.weight !== "unknown") {
      // de Hero weights zijn in de data opgenamen als strings, e.g: '40'
      // Deze moet je even parsen naar een integer, zodat je er mee kunt rekenen.
      return parseInt(superheroes.weight, 10);
    } else {
      // wanneer het gewicht dus "unknown" is, dan wil je het gewicht van 0 optellen.
      return 0;
    }
  });
  
  const addedWeightOfMarvelHeroes = heroWeightsMarvel.reduce((accumulative, currentValue) => {
    return accumulative + currentValue;
  });
  
  console.log("Combined weight of superheroes from Marvel Comics:", addedWeightOfMarvelHeroes);

  //verkorte oplossing:
  const addedWeightMarvel = MarvelComics.map(superheroes => {
    return superheroes.weight !== "unknown" ? parseInt(superheroes.weight, 10) : 0;
  }).reduce((accumulative, currentValue) => accumulative + currentValue);

  console.log("Combined weight of superheroes from Marvel Comics:", addedWeightMarvel);
  

// 8 Bonus: vind de zwaarste superheld!
// First cast all values to a number or 0 if unknown
const allHeroes = superheroes.map(hero => {
    const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
    hero.weight = weight;
    return hero;
  });
  // next, use reduce to find the largest value
  const heaviestHero = allHeroes.reduce(
    (currentHeaviestHero, currentHero) => {
      if (currentHero.weight > currentHeaviestHero.weight) {
        return currentHero;
      } else {
        return currentHeaviestHero;
      }
    },
    allHeroes[0]
    // met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie
  );
  
  console.log("Heaviest her0000o:", heaviestHero);