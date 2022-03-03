import {useRouter} from 'next/router'

function reviews() {
    const router = useRouter();
    const {productId, reviewId} = router.query;
    return <h1>This is product {productId} and review {reviewId}</h1>
}

export default reviews;