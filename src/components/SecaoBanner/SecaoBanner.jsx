import Image from 'next/image';
import React from 'react';
import banner from '../../../public/banner.jpg';
import estilos from './SecaoBanner.module.css';

const SecaoBanner = () => {
  return (
    <section className={estilos.secaoBanner}>
      <figure>
        <Image src={banner} />
      </figure>
      <div>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h1>
          Agencia de Branding <strong>e design digital</strong>
        </h1>
      </div>
    </section>
  );
};

export default SecaoBanner;
