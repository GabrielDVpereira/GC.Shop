
import { HtmlHTMLAttributes } from 'react';
import { ImageContainer } from './styles'; 

interface ProductImageProps extends  HtmlHTMLAttributes<HTMLElement>{
  src: string; 
  alt: string; 
  className: 'card' | 'banner' 
}

export function Image({src, alt, className, ...rest}: ProductImageProps){
  return(
      <ImageContainer src={src} alt={alt} className={className} {...rest}/>
  )
}