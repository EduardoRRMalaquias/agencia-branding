import React from 'react';
import estilos from './SecaoExperienciaTrabalho.module.css'

const SecaoExperienciaTrabalho = () => {
  return (
    <section className={estilos.secaoExperienciaTrabalho}>
      <div className={`${estilos.secaoTrabalho} container`}>
        <h2>Experiencias de trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Design Grafico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes
        </p>
      </div>
      <div className={`${estilos.secaoExperiencia} container`}></div>
    </section>
  );
};

export default SecaoExperienciaTrabalho;
