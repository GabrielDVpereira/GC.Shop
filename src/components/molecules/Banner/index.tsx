import { Container } from './styles'
import { Image, Description } from '../../atoms'; 

interface BannerProps {
  img: string
  text: string
}

export function Banner({img, text}: BannerProps){
  return(
   <Container>
      <Image src={img} alt={text} className="banner" />
      <Description description={text} className="dark"/>
   </Container>
  )
}