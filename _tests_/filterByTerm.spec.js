const filterByTerm = require("../src/filterByTerm")
  

describe("Filter function", () => {
    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
    ];
    test("it should filter by a search term (url)", () => {
        const output = [{ id: 1, url: "https://www.url1.dev" }];
        expect(filterByTerm(input, "uRl1")).toEqual(output);
    });
    test("it should filter by a search term (Link)", () =>{
        const output = [{ id: 3, url: "https://www.link3.dev" }]
        expect(filterByTerm(input, "LiNk")).toEqual(output)
    })
    test("it should look for an empty search term", () =>{
        const output = new Error("Search Cannot be Empty")
        expect( () => filterByTerm(input, "")).toThrow(output)
    })
    test("it should ensure input is not empty array", ()=>{
        const output = new Error("inputArr cannot be empty")
        expect(() => filterByTerm([], "a")).toThrow(output)
    })
});
