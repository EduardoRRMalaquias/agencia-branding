import React from 'react';
import estilos from './SecaoExperienciaTrabalho.module.css';
import Card from '../Card/Card';

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
      <div className={`${estilos.secaoExperiencia} container`}>
        <Card
          data="JUNHO 2012 - 2016"
          cargo="Web Designer"
          empresa="Pied Piper StandUp"
          descricao="Criação de Landing Pages, sites intitucionais e E-commerces competamente personalizados e otimizados para buscadores"
        />
        <Card
          data="AGOSTO 2016 - 2019"
          cargo="Product Designer"
          empresa="E Corp"
          descricao="Criação de modelos estrategicos de converção identificando o cliente e mapeando toda a sua jornada de compra"
        />
        <Card
          data="FEVEREIRO 2019 - 2021"
          cargo="Arasaka Inc."
          empresa="Pied Piper StandUp"
          descricao="Consultoria em estrategias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
        />
      </div>
    </section>
  );
};

export default SecaoExperienciaTrabalho;
