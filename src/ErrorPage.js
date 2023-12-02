import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './style/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
        <div className="container">
            <div>
                <h2>404</h2>
                <h2>Oooppp! you lost here</h2>
                <p>the page you are looking doesn't exist. if want to go back please click on home button</p>

                <NavLink to ="/">
                    <Button> Go To Home</Button>
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
.container{
    padding: 9rem 0;
    text-align: center;

    h2{
        font-size: 5rem;
    }
    p{
        margin: 2rem 0;
    }
}
`;

export default ErrorPage
