import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import PostCard from './PostCard'

function topProducts() {
	return (
		<>
			<Grid container>
				<Grid
					item
					xs={12}
					style={{ height: '25vh', display: 'grid', placeItems: 'center' }}
				>
				{/*
					<Typography variant='h3'>Insta Carousel</Typography>
				*/}
				</Grid>
			
				<Grid item container xs={12} justifyContent='center'>
					<Grid item xs={3}>
						<PostCard />{' '}
					</Grid>
				</Grid>
			</Grid>
            </>
	)
}

export default topProducts;