import {useRouter} from 'next/router'

function productDetail() {
    const router = useRouter();
    const productID = router.query.productId;
    return <h1>This is product {productID} detail</h1>
}

export default productDetail;