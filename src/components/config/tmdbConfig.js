const tmdbConfig = {
    base_url: "https://api.themoviedb.org/3",
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default tmdbConfig;