import styled, {keyframes} from 'styled-components'; 

const bounce = keyframes`
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-20px);
  }

`; 

export const Container = styled.div`
  background: var(--white);
  padding: 20px 20px 30px 20px;
  display:inline-block;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 0;
  transition: transform ease-in 0.2s;
  &:hover {
    animation: .5s ${bounce} ease-out alternate infinite;
  }
`
