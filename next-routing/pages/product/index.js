import Link from "next/link";

function productList( {productId = 1000} ) {
    return (<>

        <Link href="/">HOME</Link>

        <h2>
        <Link href="/product/1"><a>Product1</a></Link>
        </h2>
        <h2>
        <Link href="/product/2"><a>Product2</a></Link>
        </h2>
        <h2>
        <Link href="/product/3" replace ><a>Product3</a></Link>
        </h2>

        {/* replace will return to the root and will not go back */}

        <h2>
        <Link href={`/product/${productId}`}><a>Product  {productId}</a></Link>
        </h2>
        
    </>
    );
}

export default productList;