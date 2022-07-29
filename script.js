const movies = {
  Aftershock: { price: 10 },
  Alice: { price: 11 },
  Descendant: { price: 12 },
};

const movieDropdown = document.getElementById("movieDropdown");
let options = "";

console.log(object.keys(movies));
console.log(Object.values(movies));
console.log(object.entries(movies));

for (const movie of Object.keys(movies)) {
  options += "<options>" + movieTitle + "";
}

for (const [key, value] of Object.entries(movies)) {
  console.log(key, value);
  options += "<options>" + key + "($" + value.price + ")" + "</option>";
}

movieDropdown.interHTML = options;

const generateSeats = () => {
  for (const movie of Object.values(movies)) {
    for (let numRows = 0; numRows < 8; numRows++) {
      let row = [];
      for (let numCols = 0; numCols < 8; numCol++) {
        row.push({ occupied: false, selected: false });
      }
      movie.seats.push(row);
    }
  }
};
console.log(movies);
movieDropdown.innerHTML = options;

movieDropdown.addEventListener("change, ");
