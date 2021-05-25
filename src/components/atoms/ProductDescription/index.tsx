import { Container } from './styles'

interface ProductDescriptionProps {
  description: string; 
}
export function ProductDescription({ description }: ProductDescriptionProps){

  // TODO - this could be more generic, we can pass size, text, color using props
  const sliceDescription = (title: string) => {
    return title.slice(0, 50) + "..."
  }
  return(
    <Container>
      <span>{sliceDescription(description)}</span>
    </Container>
  )
}