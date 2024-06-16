// pages/index.tsx
import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$rocketseat'
})


export default function Home() {
  return (
    <Button >
      <h1>Hello, Next.js!</h1>
    </Button>
  );
}
