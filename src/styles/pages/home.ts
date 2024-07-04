import { styled } from "..";

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  margin: '0 auto',
  minHeight: 656,

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    minHeight: 'auto',
  }
});

export const SliderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
});

export const ArrowContainer = styled('div', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  cursor: 'pointer',
  zIndex: 10,
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  '&:first-of-type': {
    left: '8rem', 
  },
  '&:last-of-type': {
    right: '8rem', 
  },

  '@media (max-width: 768px)': {
    '&:first-of-type': {
      left: '.4rem', 
    },
    '&:last-of-type': {
      right: '.4rem', 
    },
  }
});

export const Arrow = styled('div', {
  fontSize: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  }
});

export const Product = styled('div', {
  position: 'relative',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  },

  '@media (max-width: 768px)': {
    footer: {
      padding: '1rem',
    },

    strong: {
      fontSize: '$md',
    },

    span: {
      fontSize: '$lg',
    },
  }
});
