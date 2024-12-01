import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import lua from '../../../public/moon.png';
import sol from '../../../public/sun.png';
import estilos from './Topo.module.css';

const Topo = ({ tema, setTema }) => {
  return (
    <header className={estilos.topo}>
      <div className={`${estilos.topoContainer} container`}>
        <Image src={logo} alt='M. Design' />
        <button className={estilos.btnTema} onClick={() => setTema(!tema)}>
          <Image src={tema ? lua : sol} alt={tema ? "lua" : "sol"} />
        </button>
      </div>
    </header>
  );
};

export default Topo;
