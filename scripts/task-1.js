

const movies = {
  action: ["Die Hard", "John Wick", "The Matrix"],
  comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
  drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
  horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
  
  getBookByGenre(ganre){
    return movies[ganre];
  }
};

console.log(movies.getBookByGenre('action'));
console.log(movies.getBookByGenre('drama'));
console.log(movies.getBookByGenre('thriller'));