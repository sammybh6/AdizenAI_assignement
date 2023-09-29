import React from 'react'
import Album from './utils/Album'


export default function HomePage() {

    const [movieData, setMovieData] = React.useState([])

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
    }
    };

    const getMovieData = async () => {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovieData(data.results)
    }

    React.useEffect(() => {
        getMovieData()
    }, [])

    console.log(movieData)


    

  return (
    <div>
        <Album cards={movieData}/>
    </div>
  )
}
