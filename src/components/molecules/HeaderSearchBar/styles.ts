import styled from 'styled-components'; 

export const Container = styled.div`
  width: 40%;
  height: 3rem;
  position: relative;

  input {
    &::placeholder {
      color: var(--gray);
    }
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 5px;
    font-size: 1.1rem;
    padding-left: 3rem;
  
  }

  svg {
    position: absolute;
    top: calc((3rem - 30px) / 2); 
    left: 0.5rem;
    font-size: 30px;
    color: var(--dark)
  }
`