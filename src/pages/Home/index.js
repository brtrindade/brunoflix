import React from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import data from '../../data/dados_iniciais.json';

const AppWrapper = styled.div`
  background-color: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={"Primeiro vídeo da semana!"}
      />
      <Carousel
        ignoreFirstVideo
        category={data.categorias[0]}
      />

      <Carousel
        category={data.categorias[1]}
      />

      <Carousel
        category={data.categorias[2]}
      />      

      <Carousel
        category={data.categorias[3]}
      />      

      <Carousel
        category={data.categorias[4]}
      />      

      <Carousel
        category={data.categorias[5]}
      />  
      <Footer />
    </AppWrapper>
  );
}

export default Home;
