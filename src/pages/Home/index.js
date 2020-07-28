import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import data from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
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
    </div>
  );
}

export default Home;
