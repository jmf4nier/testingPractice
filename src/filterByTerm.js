function filterByTerm(inputArr, searchTerm) {
    if (!inputArr.length) throw Error("inputArr cannot be empty");
    if (!searchTerm) throw Error("Search Cannot be Empty");
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}
module.exports = filterByTerm;
