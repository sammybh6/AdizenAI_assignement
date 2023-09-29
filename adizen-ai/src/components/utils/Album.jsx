import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"




export default function Album({cards}) {
  return (
        <div style={{ margin: "0px", display: "flex", justifyContent: "center", padding: "20px" }}>
          <Grid container spacing={4}>
            {cards && cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
              <Link to={`/movie/${card.id}`} style={{ textDecoration: "none" }}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
                      {card.original_title}
                    </Typography>
                    <Typography>
                      {card.release_date}
                    </Typography>

                    <div style={{display:"flex", flexDirection:"column"}}>

                        <Typography>
                            {card.overview}
                        </Typography>
                    </div>

                  </CardContent>
                  <CardActions>
                    <Button size="small">Add To Favorites</Button>
                    <Link to={`/movie/${card.id}`} style={{ textDecoration: "none" }}><Button size="small">More Info</Button></Link>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

        </div>
      
  );
}