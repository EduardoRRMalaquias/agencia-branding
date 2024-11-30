import Image from 'next/image';
import esilos from './page.module.css';
import SecaoBanner from '@/components/SecaoBanner/SecaoBanner';

export default function Home() {
  return (
    <main className={`${esilos.main} ${true ? "ligh" : "dark"}`}>
      <SecaoBanner />
    </main>
  );
}
