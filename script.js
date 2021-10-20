import movies from "./data.js";
const fil = document.querySelector("#fil")
const div = document.querySelector(".para")

fil.addEventListener('input', function (e) {
    // 'input' to track every character being typed
    const value = e.target.value

    div.innerHTML = ""

    const resultMovies = movies.filter(valu => {
        if(value === "") return div.innerHTML = ""
        return (valu.title.includes(value))
    })
    
    resultMovies.map(movie => {
            let movieList = document.createElement('p')
            movieList.innerHTML = movie.title
            div.append(movieList)
    })
})


