import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import { Autocomplete } from '@react-google-maps/api'
import React, { useState } from 'react'
import useStyles from './Styles'

// function Header({ onPlaceChanged, onLoad }) {
function Header({setCoordinates}) {
  const classes = useStyles()
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Travel
          </Typography>
          <Box display='flex'>
            <Typography variant='h6' className={classes.title}>
              Explore
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchOutlined />
                </div>
                <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header