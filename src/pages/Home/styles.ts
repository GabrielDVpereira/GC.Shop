import styled, {keyframes} from 'styled-components'; 

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

`; 

export const Container = styled.div`
  margin-top: 8rem;
  animation: ${fadeIn} 0.5s ease-in;
`;