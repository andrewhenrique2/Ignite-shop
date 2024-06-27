import { GetServerSideProps } from "next";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/1.png'
import camiseta2 from '../assets/2.png'
import camiseta3 from '../assets/3.png'

import 'keen-slider/keen-slider.min.css'



export default function Home(props) {

  const [sliderRef] = useKeenSlider ({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })



  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
       <Image src={camiseta1} width={520} height={480} alt=""/>
       <footer>
        <strong>Camise X</strong>
        <span>R$ 79,90</span>
       </footer>
      </Product>

      <Product className="keen-slider__slide">
       <Image src={camiseta2} width={520} height={480} alt=""/>
       <footer>
        <strong>Camise X</strong>
        <span>R$ 79,90</span>
       </footer>
      </Product>

      <Product className="keen-slider__slide">
       <Image src={camiseta3} width={520} height={480} alt=""/>
       <footer>
        <strong>Camise X</strong>
        <span>R$ 79,90</span>
       </footer>
      </Product>
      <Product className="keen-slider__slide">
       <Image src={camiseta3} width={520} height={480} alt=""/>
       <footer>
        <strong>Camise X</strong>
        <span>R$ 79,90</span>
       </footer>
      </Product>

      <Product className="keen-slider__slide">
       <Image src={camiseta3} width={520} height={480} alt=""/>
       <footer>
        <strong>Camise X</strong>
        <span>R$ 79,90</span>
       </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await stripe.products.list()
  return {
    props: {
      list: [1,2,3]
    }
  } 
}
