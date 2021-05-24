import React from 'react'; 
import { Logo, SiteName } from '../../atoms'; 

import { Container } from "./styles";

export function HeaderTitle(){
  return(
    <Container>
      <Logo />
      <SiteName />
    </Container>
  )
}