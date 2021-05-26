import styled from 'styled-components'; 


interface TextProps {
  size: 'lg' | 'md'| 'sm'
}

const fontSizes = {
  'lg': '1.5rem', 
  'md': '1rem', 
  'sm': '0.8rem'
}

export const Text = styled.span<TextProps>`
    font-size: ${({size}) => fontSizes[size]};
    &.dark {
      color: var(--dark)
    }
    &.primary {
      color: var(--primary)
    }
    &.gray {
      color: var(--gray)
    }
`