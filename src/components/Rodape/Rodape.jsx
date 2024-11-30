import Image from 'next/image';
import React from 'react';
import estilos from './Rodape.module.css';
import logo from '../../../public/logo.png';
import rede1 from '../../../public/facebook.png';
import rede2 from '../../../public/twitter.png';
import rede3 from '../../../public/linkedin.png';
import rede4 from '../../../public/dribble.png';
import rede5 from '../../../public/behance.png';
import rede6 from '../../../public/google.png';

const Rodape = () => {
  return (
    <footer className={estilos.rodape}>
      <article className={`${estilos.rodapeContainer} container`}>
        <Image src={logo} />
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online ultilizamos estrategias, ferramentas e tecnologias
          personalizadas
        </p>
        <ul className={estilos.redes}>
          <li>
            <a href="">
              <Image src={rede1} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={rede2} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={rede3} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={rede4} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={rede5} />
            </a>
          </li>
          <li>
            <a href="">
              <Image src={rede6} />
            </a>
          </li>
        </ul>
      </article>
      <div className={estilos.copy}>
        <p>
          Copyright 2024 © - Todos os direitos reservados a{' '}
          <strong>Eduardo Rodrigues Rangel Malaquias</strong>
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
