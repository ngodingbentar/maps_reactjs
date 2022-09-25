import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './Styles'

function List({places}) {
  const classes = useStyles()
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  // const places = [
  //   { name: 'Cool Place' },
  //   { name: 'Best Beer' },
  //   { name: 'Best Steak' },
  // ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurant, hotel</Typography>
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
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list} >
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List