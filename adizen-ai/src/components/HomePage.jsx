import React from 'react'
import Album from './utils/Album'


export default function HomePage() {

    const [movieData, setMovieData] = React.useState([])

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTZjNTQ1NjU2YjRhM2IzZGFhMTM3ODFmMzIzZmFiZCIsInN1YiI6IjY1MTY1ZGYyOWI4NjE2MDExYzQ4M2M2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvPCIOChudFJjdWW52216U8VxgvYiuG92jfJh9h0oYo'
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
