import Link from "next/link"
import { useRouter } from "next/router";


function Home() {

    const router = useRouter();

    function handleClick() {
        console.log("Order placed successfully");
        router.push('/product');
    }

    return(
        <>
        <h1>Home page</h1>
        <Link href = "/blog">
            <a>Blog</a>
        </Link>
        <Link href = "/product">
            <a>Product</a>
        </Link>

       <button onClick={handleClick}>Place order</button>

        </>
    )
}

export default Home;