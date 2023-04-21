import { Inter } from 'next/font/google'

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
    return (
        <div className={"bg-gray-100"}>
            <Head>
                <title>Amazone 2.0</title>
            </Head>
            <Header />
            <main className={"max-w-screen-2xl mx-auto"}>
                {/* banner*/}
                <Banner />

                {/* Product feed */}
                <ProductFeed products={products}/>
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );
    return { props: { products } };
}
