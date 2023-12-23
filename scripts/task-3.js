
let books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    year: 2005,
  },
];

const stringReverse = function (string) {
    return string.split("").reverse().join("");
};

const filterStep_1 = books.filter(({year}) => year > 2000);
const filterStep_2 = filterStep_1.sort((a,b) => a.year - b.year);
const filterStep_3 = filterStep_2.map(x => ({Title: stringReverse(x.title), Year: x.year}));

console.table(filterStep_3);
