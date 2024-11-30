'use client';
import './globals.css';
import Topo from '@/components/Topo/Topo';
import Rodape from '@/components/Rodape/Rodape';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [tema, setTema] = useState(true);

  return (
    <html lang="pt-br">
      <body className={`${tema ? 'ligh' : 'dark'}`}>
        <Topo tema={tema} setTema={setTema} />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
