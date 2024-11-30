import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import lua from '../../../public/moon.png';
import sol from '../../../public/sun.png';
import estilos from './Topo.module.css'

const Topo = () => {
  return (
    <header className={estilos.topo}>
      <div className={`${estilos.topoContainer} container`}>
        <Image src={logo} />
        <button className={estilos.btnTema}>
          <Image src={true ? lua : sol} />
        </button>
      </div>
    </header>
  );
};

export default Topo;
