import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer/index'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 94px;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 800px) {
    padding-top: 40px
  }
`;

export default function PageDefault({children}) {
  return (
    <>
     <Menu />
      <Main>
        {children}
      </Main>
     <Footer /> 
    </>
  )
}
