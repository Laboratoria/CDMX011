
import { maping, sortAscending, sortDescending, sortAphabetic, sortWorst, filterData, peopleArray, charactersCard, filterDataCharacters, score, computeStats } from '../src/data.js';

/*  peopleArray, charactersCard */



const movies = [
  {
    "title": "Castle in the Sky",
    "release_date": "1986",
    "rt_score": "95",
    "director": "Hayao Miyazaki",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
  },
  {
    "title": "Grave of the Fireflies",
    "release_date": "1988",
    "rt_score": "97",
    "director": "Isao Takahata",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
  },
  {
    "title": "Whisper of the Heart",
    "release_date": "1995",
    "rt_score": "91",
    "director": "Yoshifumi Kondō",
    "description": "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather."      
  },
  {
    "title": "The Cat Returns",
    "release_date": "2002",
    "rt_score": "89",
    "director": "Hiroyuki Morita",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world."    
  },   
  {
    "title": "Tales from Earthsea",
    "release_date": "2006",
     "rt_score": "41",
    "director": "Gorō Miyazaki",
    "description": "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged."
  },
  {
    "title": "The Secret World of Arrietty",
    "release_date": "2010",
    "rt_score": "95",
    "director": "Hiromasa Yonebayashi",
    "description": "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty."      
  }
] 

const characters = [
  {
    "name": "Pazu",
    "specie": "Human",
    "movie": "Castle in the Sky"
  },
  {
    "name": "Satsuki Kusakabe",
    "specie": "Human",
    "movie": "My Neighbor Totoro"
  },
  {
    "name": "Kiki",
    "specie": "Witch",
    "movie": "Kiki's Delivery Service"
  },
  {
    "name": "Seita Yokokawa",
    "specie": "Human",
    "movie": "Grave of the Fireflies"
  },
  {
    "name": "Taeko Okajima",
    "specie": "Human",
    "movie": "Only Yesterday"
  }
    
    

]



describe('maping', () => {
  it('is a function', () => {
    expect(typeof maping).toBe('function');
  });
});

describe('sortAscending', () => {
  it('is a function', () => {
    expect(typeof sortAscending).toBe('function');
  });
  it('returns an array sorted by release date in ascending order', () => {
    const expected = sortAscending(movies);
    expect(parseInt(expected[0].release_date)).toBe(1986);
    expect(parseInt(expected[1].release_date)).toBe(1988);
    expect(parseInt(expected[2].release_date)).toBe(1995);
    expect(parseInt(expected[3].release_date)).toBe(2002);
    expect(parseInt(expected[4].release_date)).toBe(2006);
    expect(parseInt(expected[5].release_date)).toBe(2010);
  });
});

describe('sortDescending', () => {
   it('is a function', () => {
    expect(typeof sortDescending).toBe('function');
   });
   it('returns an array sorted by release date in descending order', () => {
    const expected = sortDescending(movies);
    expect(parseInt(expected[0].release_date)).toBe(2010);
    expect(parseInt(expected[1].release_date)).toBe(2006);
    expect(parseInt(expected[2].release_date)).toBe(2002);
    expect(parseInt(expected[3].release_date)).toBe(1995);
    expect(parseInt(expected[4].release_date)).toBe(1988);
    expect(parseInt(expected[5].release_date)).toBe(1986);
  });
 });

  describe('sortAlphabetic', () => {
    it('is a function', () => {
      expect(typeof sortAphabetic).toBe('function');
    });
    it('returns an array sorted by release date in descending order', () => {
    const expected = sortAphabetic(movies);
    expect(expected[0].title).toBe("Castle in the Sky");
    expect(expected[1].title).toBe("Grave of the Fireflies");
    expect(expected[2].title).toBe("Tales from Earthsea");
    expect(expected[3].title).toBe("The Cat Returns");
    expect(expected[4].title).toBe("The Secret World of Arrietty");
    expect(expected[5].title).toBe("Whisper of the Heart");
  });
 }); 

 describe('sortWorst', () => {
  it('is a function', () => {
   expect(typeof sortWorst).toBe('function');
  });
  it('returns an array sorted by worst to best', () => {
   const expected = sortWorst(movies);
   expect(parseInt(expected[0].rt_score)).toBe(41);
   expect(parseInt(expected[1].rt_score)).toBe(89);
   expect(parseInt(expected[2].rt_score)).toBe(91);
   expect(parseInt(expected[3].rt_score)).toBe(95);
   expect(parseInt(expected[4].rt_score)).toBe(95);
   expect(parseInt(expected[5].rt_score)).toBe(97);
 });
});

describe('filterData', () => {
  it('is a function', () => {
   expect(typeof filterData).toBe('function');
  });

  it('returns director s movies selected', () => {
   expect(filterData(movies, "Hiroyuki Morita")).toStrictEqual([{
    "title": "The Cat Returns",
    "release_date": "2002",
    "rt_score": "89",
    "director": "Hiroyuki Morita",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world."    
  }])
  });
});

describe('peopleArray', () => {
  it('is a function', () => {
    expect(typeof peopleArray).toBe('function');
  });
});

describe('charactersCard', () => {
  it('is a function', () => {
    expect(typeof charactersCard).toBe('function');
  });
  it('returns an array sorted by worst to best', () => {
   const expected = sortWorst(movies);
   expect(parseInt(expected[0].rt_score)).toBe(41);
   expect(parseInt(expected[1].rt_score)).toBe(89);
   expect(parseInt(expected[2].rt_score)).toBe(91);
   expect(parseInt(expected[3].rt_score)).toBe(95);
   expect(parseInt(expected[4].rt_score)).toBe(95);
   expect(parseInt(expected[5].rt_score)).toBe(97);
 });
});

describe('filterDataCharacters', () => {
  it('is a function', () => {
   expect(typeof filterDataCharacters).toBe('function');
  });

  it('returns character s movie selected', () => {
   expect(filterDataCharacters(characters, "My Neighbor Totoro")).toStrictEqual([{
    "name": "Satsuki Kusakabe",
    "specie": "Human",
    "movie": "My Neighbor Totoro"
  }])

  });

})

describe('score', () => {
  it('is a function', () => {
    expect(typeof score).toBe('function');
  });  
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('returns the average of an array, should return "84.67" for [95,97,91,89,41,95]', () =>{
    expect(computeStats([95,97,91,89,41,95])).toBe("84.67");
  })
});
