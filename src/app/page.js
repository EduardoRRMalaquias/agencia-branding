import Image from 'next/image';
import esilos from './page.module.css';
import SecaoBanner from '@/components/SecaoBanner/SecaoBanner';
import SecaoExperienciaTrabalho from '@/components/SecaoExperienciaTrabalho/SecaoExperienciaTrabalho';

export default function Home() {
  return (
    <main className={`${esilos.main} ${false ? "ligh" : "dark"}`}>
      <SecaoBanner />
      <SecaoExperienciaTrabalho />
    </main>
  );
}
