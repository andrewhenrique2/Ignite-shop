import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import Link from "next/link";
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'

import 'keen-slider/keen-slider.min.css'

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider ({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })



  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>
  
    <HomeContainer ref={sliderRef} className="keen-slider">
    {products.map(product => {
      return (
        <Link href={`/product/${product.id}`} key={product.id} prefetch={false} >
          <Product className="keen-slider__slide">
           <Image src={product.imageUrl } width={520} height={480} alt=""/>
           <footer>
             <strong>{product.name}</strong>
             <span>{product.price}</span>
           </footer>
          </Product>
       </Link>
      )
    })}
    </HomeContainer>

    </>
  );
}

export const getStaticProps : GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    
    const price = product.default_price as Stripe.Price

    const unitAmount = price.unit_amount ?? 0;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL',
      }).format(unitAmount / 100),
      
    }
  })

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 2,
  } 
}
