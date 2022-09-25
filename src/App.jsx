import { CssBaseline, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //   setCoordinates({ lat: latitude, lng: longitude })
    //   console.log('useEffect', coordinates)
    // })
    setCoordinates({lat: 51.507351, lng: -0.127758})
  },[])

  // useEffect(() => {
  //   getPlacesData(bounds.sw, bounds.ne)
  //     .then((data) => {
  //       console.log(data)
  //       setPlaces(data)
  //     })
  // },[type, coordinates, bounds])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)
    setFilteredPlaces(filteredPlaces)
  },[rating])
  const getResto = () => {
    setIsLoading(true)
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setPlaces(data)
        setFilteredPlaces([])
        setIsLoading(false)
      })
  }
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <button onClick={() => getResto()}>get</button>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App