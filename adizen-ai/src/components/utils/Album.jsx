import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import { colorTokens } from "../../theme"
import { useTheme } from '@emotion/react';
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../features/MovieSlice";
import { useLocation } from 'react-router-dom';


export default function Album({cards}) {

  const loc=useLocation();

    const dispatch = useDispatch();
    const handleFavorite = (card) => {
        console.log(card)
        dispatch(addFavorite(card))
    }
    

    const theme=useTheme();
    const colors = colorTokens(theme.palette.mode);
  return (
        <div style={{ margin: "0px", display: "flex", justifyContent: "center", padding: "20px" }}>
          <Grid container spacing={4}>
            {cards && cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>

                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: colors.primary[400] }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '150%',
                    }}
                    image={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>{card.original_title}</b>
                    </Typography>
                    <Typography>
                      <i>{card.release_date}</i>
                    </Typography>

                    <div style={{display:"flex", flexDirection:"column"}}>

                        <Typography>
                            {card.overview.trim().length > 100 ? card.overview.substring(0, 100) + "..." : card.overview}
                        </Typography>
                    </div>

                  </CardContent>
                  <CardActions>
                  {
                    loc.pathname=="/starred" ? <Button size="small"  sx={{
                        color: colors.grey[100],
                        padding: "5px 10px",
                        }} onClick={()=> dispatch(removeFavorite(card))}>Remove From Favorites</Button> : <Button size="small"  sx={{
                        color: colors.grey[100],
                        padding: "5px 10px",
                        }} onClick={()=> handleFavorite(card)}>Add To Favorites</Button>
        
                  }
                    
                    <Link to={`/movie/${card.id}`} style={{ textDecoration: "none" }}><Button size="small"  sx={{
                        color: colors.grey[100],
                        padding: "5px 10px",
                        }}>More Info</Button></Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </div>
      
  );
}