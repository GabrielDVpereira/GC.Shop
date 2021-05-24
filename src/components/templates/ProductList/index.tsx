import { ProductCard } from '../../organisms';
import { Container } from './styles'; 

const DATA = [
  {
    "id": 1,
    "title": "Smartphone Positivo Twist 4 Fit 32GB Dual Chip Android 10 Tela 5'Quad-Core 1,3 GHz 3G 8MP - Black Piano",
    "price": 519,
    "url": "https://images-americanas.b2w.io/produtos/01/00/img/2966382/5/2966382570G1.jpg"
  },
  {
    "id": 629.1,
    "title": "Smartphone Samsung Galaxy A01 32GB 4G Wi-Fi Tela 5.7'' Dual Chip 2GB RAM Câmera Dupla + Selfie 5MP - Red",
    "price": 519,
    "url": "https://images-americanas.b2w.io/produtos/01/00/img/1448008/2/1448008246_1GG.jpg"
  },
  {
    "id": 3,
    "title": "Smartphone Samsung Galaxy A01 Core 32GB 4G Wi-Fi Tela 5.3'' Dual Chip 2GB RAM Câmera 8MP + Selfie 5MP - Preto",
    "price": 599,
    "url": "https://images-americanas.b2w.io/produtos/01/00/img/1834712/0/1834712080_1GG.jpg"
  },
  {
    "id": 4,
    "title": "Smartphone Motorola E7 Power 32GB 4G Wi-Fi Tela 6.5'' Dual Chip 2GB RAM Câmera Dupla + Selfie 5MP - Azul Metálico",
    "price": 836.07,
    "url": "https://images-americanas.b2w.io/produtos/01/00/img/2910438/8/2910438853_1GG.jpg"
  },
  {
    "id": 5,
    "title": "Smartphone Motorola E6i 32GB 4G Wi-Fi Tela 6.1'' Dual Chip 2GB RAM Câmera Dupla + Selfie 5MP - Cinza Titanium",
    "price": 809.1,
    "url": "https://images-americanas.b2w.io/produtos/01/00/img/2910437/8/2910437800_1GG.jpg"
  },
  {
    "id": 6,
    "title": "Smartphone Motorola E6i 32GB 4G Wi-Fi Tela 6.1'' Dual Chip 2GB RAM Câmera Dupla + Selfie 5MP - Pink",
    "price": 809.1,
    "url": "https://images-americanas.b2w.io/produtos/01/00/img/2910438/4/2910438431_1GG.jpg"
  },
]

export function ProductList(){
  return(
    <Container>
      {
        DATA.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })
      }
    </Container>
  )
}