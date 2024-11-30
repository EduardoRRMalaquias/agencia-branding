import React from 'react';
import estilos from './Card.module.css'

const Card = ({ data, cargo, empresa, descricao }) => {
  return (
    <div className={estilos.card}>
      <span>{data}</span>
      <h3>{cargo}</h3>
      <small>{empresa}</small>
      <p>{descricao}</p>
    </div>
  );
};

export default Card;
