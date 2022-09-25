import React from 'react'
import useStyles from './Styles'
import GoogleMapReact from 'google-map-react'
import { useMediaQuery } from '@material-ui/core'

function Map() {
  const isMobile = useMediaQuery('(min-width:600px)')
  const classes = useStyles()
  const coordinates = { lat: 0, lng: 0 }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: ''}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map