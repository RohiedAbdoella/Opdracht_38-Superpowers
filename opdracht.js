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


/*
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
    .map (superhero => superhero.name)    
}
console.log("Names of superheroes that weigh 200 pounds:",superheroesThatWeigh200Pounds());

//4 deze goed checken
const ComicsFirstAppearences = () => {
    return superheroes.map (superhero => superhero.first_appearance)
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

console.log("Published by DC Comics:",superheroesThatArePublishedByDCComics());
console.log("Published by Marvel Comics:",superheroesThatArePublishedByMarvelComics());


//6 niet af check de oplossing
const superWeight = function () {
    return superheroes.filter (superhero => superhero.publisher === "DC Comics")
    .map (superhero => superhero.weight);
}

const combinedWeightDCComics = function () {
    if {
        superWeight.reduce ((accumulator, currentValue) => {
       return accumulator + currentValue;
        });
         
})
    }

console.log("Combined weight of superheroes from DC Comics:",combinedWeightDCComics);

//7 niet af check de oplossing
const superWeight = function () {
    return superheroes.filter (superhero => superhero.publisher === "Marvel Comics")
    .map (superhero => superhero.weight);
}

const combinedWeightMarvelComics = function () {
    if {
        superWeight.reduce ((accumulator, currentValue) => {
       return accumulator + currentValue;
        });
         
})
    }

console.log("Combined weight of superheroes from Marvel Comics:",combinedWeightMarvelComics);

*/

//8 niet af check de oplossing
const heaviestSuperhero = function () {
    superheroes.map (superhero => superhero.weight);
    return 
}