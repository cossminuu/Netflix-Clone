

const API_KEY = "a7ab62d8f4c9caafb9d10021129a5c7b";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}


// const requests = [
//     {
//         fetch: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//         category: "Netflix Originals"
//     },
//     {
//         fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//         category: "Trending"
//     },
// ]


export default requests;