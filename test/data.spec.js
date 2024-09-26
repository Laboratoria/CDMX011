import { filterByTeam } from '../src/data.js';


describe("filterByTeam", () =>{
  it ("is a function", () => {
    expect(typeof filterByTeam).toBe("function");
  });
  it ("returns 'dataByTeam'", () => {
    expect(typeof filterByTeam).toBe("function");
  });
});

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/