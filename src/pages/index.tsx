import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Stripe from "stripe";
import Link from "next/link";
import { useKeenSlider } from 'keen-slider/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importando ícones de seta

import { stripe } from "../lib/stripe";
import { HomeContainer, Product, ArrowContainer, Arrow } from "../styles/pages/home";

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

  const [sliderRef, instanceRef] = useKeenSlider({
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

      <HomeContainer>
        <ArrowContainer onClick={() => instanceRef.current?.prev()}>
          <Arrow as={FiChevronLeft} />
        </ArrowContainer>
        <div ref={sliderRef} className="keen-slider">
          {products.map(product => (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt={product.name} />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          ))}
        </div>
        <ArrowContainer onClick={() =>  instanceRef.current?.next()}>
          <Arrow as={FiChevronRight} />
        </ArrowContainer>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    const unitAmount = price.unit_amount ?? 0

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
