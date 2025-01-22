import React, { FC } from 'react';
import Greeting from '../../components/Greeting/Greeting';
import { HomeWrapper } from './Home.styled';

interface HomeProps {
  
}

const Home: FC<HomeProps> = () => {

   return (
      <HomeWrapper data-testid="Home">
         Home Component
         // Usage in a parent component
        <Greeting name="Alice" />
      </HomeWrapper>
     );
}

export default Home;
