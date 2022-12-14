import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import React, { useState, useEffect, createRef } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './Styles'

function List({places, childClicked, isLoading, type, setType, rating, setRating}) {
  const classes = useStyles()
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);


  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurant, hotel</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">hotels</MenuItem>
              <MenuItem value="attractions">attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={4.5}>4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list} >
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default List