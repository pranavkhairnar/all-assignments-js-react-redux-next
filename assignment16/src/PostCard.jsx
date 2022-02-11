import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'


import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useSelector } from "react-redux";

import SwiperCore, {
	Keyboard,
	Scrollbar,
	Pagination,
	Navigation,
} from 'swiper/core'


import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'



import { Link } from 'react-router-dom'


const useStyles = makeStyles({
	media: {
		height: '50%',
		paddingTop: '100%',
	},
	swiperContainer: {
		paddingBottom: '0rem',
		'& .swiper-pagination-bullet': {
			background: 'blue'

		},
		'& .swiper-button-next:after': {
			fontSize: '2rem !important',
		},
		'& .swiper-button-prev:after': {
			fontSize: '2rem !important',
		},
	},
})

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])



const PostCard = () => {
	const { media, swiperContainer } = useStyles();
	const dispatch = useDispatch();
	const actions = bindActionCreators(actionCreators, dispatch);
	const allItems = useSelector((state) => state.allItems);
	const images = [];
	/*	
	allItems.map((item) => (
	
		))
	*/
	return (
		<Card>
			{/* 

			<CardHeader

				title='product Carousel'

			/>
		*/}
			<Swiper
				grabCursor
				keyboard={{ enabled: true }}
				pagination={{ clickable: true }}
				navigation
				loop
				className={swiperContainer}
			>
				{allItems.map((item, index) => (
					<SwiperSlide key={index}>
						<h4 >{item.item}</h4>
						<CardMedia className={media} image={item.imgurl} />
						<h6>Price: ₹{item.price}</h6>
						<table>
							<col width="200px" />
							<col width="200px" />
							<tr>

								<th style={{ textAlign: "center" }}>
									<button
										onClick={() => {
											actions.addToCart(item.id);
										}}
										type="button"
										className="btn btn-secondary btn-sm"
									>Add to cart</button>
								</th>
								<th style={{ textAlign: "center" }}><button
									type="button"
									className="btn btn-secondary btn-sm"
								><Link to="/cart">
										Go to Cart
									</Link></button></th>
							</tr>
						</table>


					</SwiperSlide>

				))}
				<CardContent>
					<Typography variant='body1' color='textSecondary' component='p'>

					</Typography>
				</CardContent>

				<CardActions disableSpacing>
					<IconButton>

					</IconButton>

				</CardActions>
			</Swiper>




		</Card>
	)
}

export default PostCard