// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function() {
     let sortedMovies=sortMoviesByAttr(movies,'rank')
    // Display Movies list
    displayMovies(sortedMovies);
}

/**
 * Display list of movies in a table
 */
function displayMovies(movies){
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


/**
 * Sort movies by rank from greatest to smallest 
 */
function sortMoviesByRank(movies){
  for (let j = 0; j < movies.length - 1; j++) {

      let max_obj = movies[j];
      let max_location = j;

      for (let i = j; i < movies.length; i++) {
          if (movies[i].rank > max_obj.rank) {
              max_obj = movies[i]
              max_location = i
          }
      }
      // swap the first and the last
      movies[max_location] = movies[j] // --> 10
      movies[j] = max_obj
  }

  return movies
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr){
  for (let j = 0; j < movies.length - 1; j++) {

    let max_obj = movies[j];
    let max_location = j;
    let max=getMaxMovieObject(movies, j, sortAttr)
    max_obj=max.max_obj
    max_location=max.max_index
    movies[max_location] = movies[j] // --> 10
    movies[j] = max_obj
}

return movies
}


/**
 * Retrieve the max movie object based on attribute
 */
function getMaxMovieObject(movies, start, sortAttr){
  let max_obj = movies[start];
  let max_location = start

  for (let i = start; i < movies.length; i++) {
      if (movies[i][sortAttr] > max_obj[sortAttr]) {
          max_obj = movies[i]
          max_location = i
      }
  }
  return {max_obj: max_obj, max_index: max_location}
}


