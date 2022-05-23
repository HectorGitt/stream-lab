
import {createContext, useContext, useState, useEffect} from 'react';
import axiosClient from '../components/config/axiosClient';
//get movies from tmdb api  https://developers.themoviedb.org/3/getting-started/introduction

const MoviesContext = createContext();

export const useTmdbApi = () => {
    return useContext(MoviesContext)
}

export const category = {
    movie: 'movie',
    tv: 'tv',
}
const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}
const tvType = {
    upcoming: 'upcoming',
    popular: 'popular',
    on_the_air: 'on_the_air',
}

export const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (type, id) => {
        const url = category[type]  + '/' + id + '/videos';
        return axiosClient.get(url, {params: { } });
    },
    search: (type, params) => {
        const url = 'search/' + category[type];
        return axiosClient.get(url, params);
    },
    detail: (type,id, params) => {
        const url = category[type] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (type, id) => {
        const url = category[type] + '/' + id + '/credits' ;
        return axiosClient.get(url, {params: { } });
    },
    similar: (type, id) => {
        const url = category[type] + '/' + id + '/similar' ;
        return axiosClient.get(url, {params: { } });
    },
}



export const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState({});
    const [top_rated, setTop_rated] = useState({});
    const [page, setPage] = useState(1);

    //fetch movies from tmdb api
    const fetchMovies = async () => {
        const params = {page: 1}
        try {
            await tmdbApi.getMoviesList(movieType.popular, {params}).then((response) => {
                setMovies(response.results)
                
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    const fetchTopRatedMovies = async () => {
        const params = {page: 1}
        try {
            await tmdbApi.getMoviesList(movieType.top_rated, {params}).then((response) => {
                setTop_rated(response.results)
                
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    const fetchMore = async () => {
        
        const params = {page: page + 1}
        try {
            await tmdbApi.getMoviesList(movieType.top_rated, {params}).then((response) => {
                console.log(response.results)
                setTop_rated([...top_rated , ...response.results])
                console.log(top_rated)
                
            })
            setPage((page)=> ++page)
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchMovies();
        fetchTopRatedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const value = {
        fetchMovies,
        tmdbApi,
        movies,
        top_rated,
        fetchMore,
    }

    return(
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    )

}
