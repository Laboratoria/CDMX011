import { example } from '../src/data.js';
import { speciesFilter, genderFilter, sortFilter, episodesFilter } from '../src/data.js';


// funcion test ejemplo
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

// funciones de filtros 
describe('speciesFilter', () => {
  it('is a function', () => {
    expect(typeof speciesFilter).toBe('function');
  });
  it( "Deberia devolver especies", () => {
    const speciesVariety=[ 
     
      { name:"Morty",species:"Alien"},
      { name:"Armothy",species:"unknow"},
      { name:"Aqua",species:"Humanoid"},
      { name:"Bill",species:"Animal"},
      { name:"Summer",species:"Human"}
    ];

    const speciesSpecific=[
      { name: "Summer",species:"Human"}
      
    ];
      expect (speciesFilter(speciesVariety,"Human")).toStrictEqual(speciesSpecific);
      });
});

describe('genderFilter', () => {
  it('is a function', () => {
    expect(typeof genderFilter).toBe('function');
  });
  it( "Deberia devolver genero", () => {
    const genderVariety=[ 
      { name: "Rick",gender:"Male"},
      { name:"Armothy",gender:"unknown"},
      { name:"Aqua",gender:"Humanoid"},
      { name:"Bill",gender:"Animal"},
      { name:"Summer",gender:"Female"},
    ];

    const genderSpecific=[
      { name:"Summer",gender:"Female"},
  
    ];
      expect (genderFilter(genderVariety,"Female")).toStrictEqual(genderSpecific);
      });
});


describe('sortFilter', () => {
  it('is a function', () => {
    expect(typeof sortFilter).toBe('function');
  });
  it( "Deberia devolver orden alfabetico ascendente", () => {
    const azVariety=[ 
      { name: "Rick",value: 40},
      { name:"Armothy",value: 20},
      { name:"Aqua",value:10},
      { name:"Bill",value:50},
      { name:"Summer",value:30},
    ];

    const azOrder=[
      { name:"Aqua",value:10},
      { name:"Armothy",value: 20},
      { name:"Bill",value:50},
      { name: "Rick",value: 40},
      { name:"Summer",value:30},
  
    ];
      expect (sortFilter(azVariety,"upward")).toStrictEqual(azOrder);
      });
      it( "Deberia devolver orden alfabetico descendente", () => {
        const zaVariety=[ 
          { name: "Rick",value: 40},
          { name:"Armothy",value: 20},
          { name:"Aqua",value:10},
          { name:"Bill",value:50},
          { name:"Summer",value:30},
        ];
    
        const zaOrder=[
          { name:"Summer",value:30},
          { name: "Rick",value: 40},
          { name:"Bill",value:50},
          { name:"Armothy",value: 20},
          { name:"Aqua",value:10},
        ];
          expect (sortFilter(zaVariety,"downward")).toStrictEqual(zaOrder);
          });
});

describe('episodesFilter', () => {
  it('is a function', () => {
    expect(typeof episodesFilter).toBe('function');
  });
  it( "Deberia devolver personaje por episodio", () => {
    const episodeVariety=[ 
      { name: "Agency Director",episode:"https://rickandmortyapi.com/api/episode/24"},
      { name:"Albert Einstein",episode:"https://rickandmortyapi.com/api/episode/12"},
      { name:"Antenna Morty",episode:[
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/28"
    ]},
      { name:"Aqua Morty",episode:[
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22"
    ]},
      { name:"Aqua Rick",episode:[
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/28"
    ]},
    ];

    const episodeSpecific=[
      { name: "Agency Director",episode:"https://rickandmortyapi.com/api/episode/24"},
  
    ];
      expect (episodesFilter(episodeVariety,"https://rickandmortyapi.com/api/episode/24")).toStrictEqual(episodeSpecific);
      });
});
