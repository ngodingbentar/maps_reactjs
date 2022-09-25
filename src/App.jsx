import { CssBaseline, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

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
  // },[coordinates, bounds])
  const getResto = () => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setPlaces(data)
      })
  }
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <button onClick={() => getResto()}>get</button>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App