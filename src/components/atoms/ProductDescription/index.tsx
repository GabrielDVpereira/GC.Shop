import { Container } from './styles'

interface ProductDescriptionProps {
  description: string; 
}
export function ProductDescription({ description }: ProductDescriptionProps){
  return(
    <Container>
      <span>{description}</span>
    </Container>
  )
}