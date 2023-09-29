import React from 'react'
import {Grid,Typography,Avatar} from '@mui/material'
import { useParams } from 'react-router-dom';

export default function SingleMoviePage() {

    const {id} = useParams();


    const [detailData, setDetailData] = React.useState([]);
    const [castData, setCastData] = React.useState([]);

    const detailUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const detailOptions = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTZjNTQ1NjU2YjRhM2IzZGFhMTM3ODFmMzIzZmFiZCIsInN1YiI6IjY1MTY1ZGYyOWI4NjE2MDExYzQ4M2M2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvPCIOChudFJjdWW52216U8VxgvYiuG92jfJh9h0oYo'
        }
    };

    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const castOptions = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTZjNTQ1NjU2YjRhM2IzZGFhMTM3ODFmMzIzZmFiZCIsInN1YiI6IjY1MTY1ZGYyOWI4NjE2MDExYzQ4M2M2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvPCIOChudFJjdWW52216U8VxgvYiuG92jfJh9h0oYo'
        }
    };

    const getCastData = async () => {
        const response = await fetch(castUrl, castOptions);
        const data = await response.json();
        setCastData(data.cast)
    }

    const getDetailData = async () => {
        const response = await fetch(detailUrl, detailOptions);
        const data = await response.json();
        setDetailData(data)
    }

    React.useEffect(() => {
        getDetailData()
        getCastData()
    }, [])

    console.log(castData)

    


  return (
    <div style={{padding:"20px"}}>
        <Grid container={true} spacing={3}>
            <Grid item={true} md={3}>
                {detailData && <img src={`https://image.tmdb.org/t/p/w300${detailData.poster_path}`} alt="" />}
            </Grid>
            <Grid item={true} md={9}>
                <Typography variant="h1" component="h3">
                    {detailData.original_title}
                </Typography>
                <Typography variant="h6" component="h6" sx={{marginBottom:"10px"}}>
                    <i>{detailData.tagline}</i>
                </Typography>
                
                {detailData.genres && detailData.genres.map((genre) => (
                    <span style={{fontWeight:"bold", marginRight:"5px"}}>
                        {genre.name}
                    </span>
                ))}

                <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                    {detailData.overview}
                </Typography>

                <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                    <span style={{fontWeight:"bold"}}>Release Date:</span> {detailData.release_date}
                </Typography>

                <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                    <span style={{fontWeight:"bold"}}>Runtime:</span> {detailData.runtime} mins
                </Typography>

                <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                    <span style={{fontWeight:"bold"}}>Status:</span> {detailData.status}
                </Typography>

                <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                    <span style={{fontWeight:"bold"}}>Production:</span> {detailData.production_companies && detailData.production_companies.map((company) => (
                        <span style={{fontWeight:"bold", marginRight:"5px"}}>
                            {company.name}
                        </span>
                    ))}
                </Typography>
            </Grid>
            <Grid item={true} md={12}>
                <Typography variant="h2" component="h3" >
                    Cast/Crew
                </Typography>
                <div style={{marginTop:"10px", display:"flex", flexDirection:"row", overflowX:"scroll", maxWidth:"90vw"}}>
                    {castData && castData.map((cast) => (
                        <Grid item={true} md={3} sx={{margin:"10px"}}>
                            <Avatar sx={{width:"150px", height:"150px"}} alt="" src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} />
                            
                            <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                                {cast.name}
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{marginTop:"10px"}}>
                                {cast.character}
                            </Typography>
                        </Grid>
                    ))}
                </div>
            </Grid>
        </Grid>
    </div>
  )
}