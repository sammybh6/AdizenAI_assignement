import React from 'react'
import { useSelector } from 'react-redux'
import Album from './utils/Album'

export default function Favorites() {

    const favoriteMovies = useSelector(state => state.favoriteMovies)
    console.log(favoriteMovies)

  return (
    <div>
        <Album cards={favoriteMovies}/>
    </div>
  )
}
