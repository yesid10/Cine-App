import React, { useEffect, useState } from 'react'
import './home.scss'
import { CircularProgress, Stack } from '@mui/material';

const Home = ({ movieList }) => {
  const [posters, setPosters] = useState([]);
  useEffect(() => {
    if (!posters.length) {
      setTimeout(() => {
        const playNow = getPosters(movieList);
        setPosters(playNow);
      }, 1500);
      
    }
    console.log(posters);
  }, [movieList, posters]);

  const getPosters = (arrayMovies) => {

    const posters = arrayMovies.map(item => {
      const urlBase = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
      return {
        id: item.id,
        image: `${urlBase}/${item.poster_path}`,
        title: item.title
      }
    });
    return posters;
  }

  return (
    <main className='main'>
      <h1>Cartelera</h1>
      <p>Estas son todas las películas disponibles</p>
      <section className={posters.length ? "main__cards" : "main__spin"}>{posters.length ?

        posters.map(item => (
          <figure key={item.id}>
            <img src={item.image} alt={item.title} />
          </figure>
        )) : <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
          <CircularProgress color="secondary" />
        </Stack>
      }
      </section>
    </main>
  )
}

export default Home