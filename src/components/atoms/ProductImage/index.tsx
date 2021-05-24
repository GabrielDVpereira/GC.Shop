
import { Container } from './styles'; 

interface ProductImageProps {
  url: string; 
  alt: string; 
}

export function ProductImage({url, alt}: ProductImageProps){
  return(
    <Container>
      <img src={url} alt={alt}/>
    </Container>
  )
}