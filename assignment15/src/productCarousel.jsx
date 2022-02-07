import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function productCarousel() {
    return (
        <>
        <h1>abcd</h1>
        <div className='App'>
            <Grid container>
                <Grid item xs={12} style={{height: '25vh', display: 'grid', placeItems: 'center'}}>
                    <Typography variant='h3'>Product Carousel</Typography>
                </Grid>
            </Grid>
        
        </div>
        </>
    );
}

export default productCarousel;

