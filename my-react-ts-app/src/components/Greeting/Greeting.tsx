import React, { FC } from 'react';
import { GreetingWrapper } from './Greeting.styled';

interface GreetingProps {
   name: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => (
 <GreetingWrapper data-testid="Greeting">
    Greeting Component
    <h1>Hello, {name}!</h1>
 </GreetingWrapper>
);

export default Greeting;
