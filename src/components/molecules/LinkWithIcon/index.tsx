import { Container } from './styles'; 
import { ReactNode } from 'react';
import { Link } from 'react-router-dom'; 

interface ButtomWithIconProps {
  icon: ReactNode; 
  title: string; 
  path: string
}

export function LinkWithIcon({icon, title, path}:ButtomWithIconProps){
  
  return(
     <Container>
       <Link to={path}>
          {icon}
          <span>{title}</span>
       </Link>
     </Container>
     )
}