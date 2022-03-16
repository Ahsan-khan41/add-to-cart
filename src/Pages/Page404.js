import React from 'react'
import {Typography, Box, Grid} from '@mui/material'

const Page404 = () => {
  return (
    <>
    <Grid container direction='column' justify="center" alignItems="center" >
      <Grid item>
        <Box sx={{padding: "10vh"}} >
          <Typography variant="h1" >
            Error 404
          </Typography>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default Page404