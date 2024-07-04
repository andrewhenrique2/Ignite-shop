import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" passHref>
         
            <Image src={logoImg} alt="Ignite Shop Logo" />
          
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
