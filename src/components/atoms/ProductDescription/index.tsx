import { Container } from './styles'

interface ProductDescriptionProps {
  description: string; 
}
export function ProductDescription({ description }: ProductDescriptionProps){
  const sliceDescription = (title: string) => {
    return title.slice(0, 50) + "..."
  }
  return(
    <Container>
      <span>{sliceDescription(description)}</span>
    </Container>
  )
}