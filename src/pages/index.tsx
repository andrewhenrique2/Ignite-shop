// pages/index.tsx
import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green300',
  padding: 10 ,
  borderRadius: 10,
})


export default function Home() {
  return (
    <Button >
      <h1>Hello, Next.js!</h1>
    </Button>
  );
}
