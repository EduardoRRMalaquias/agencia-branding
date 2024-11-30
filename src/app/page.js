import Image from 'next/image';
import esilos from './page.module.css';
import SecaoBanner from '@/components/SecaoBanner/SecaoBanner';
import SecaoExperienciaTrabalho from '@/components/SecaoExperienciaTrabalho/SecaoExperienciaTrabalho';
import Rodape from '@/components/Rodape/Rodape';


export default function Home() {
  return (
    <main>
      <SecaoBanner />
      <SecaoExperienciaTrabalho />
    </main>
  );
}
