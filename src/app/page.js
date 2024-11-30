import Image from 'next/image';
import esilos from './page.module.css';
import Topo from '@/components/Topo/Topo';

export default function Home() {
  return (
    <main className={`${esilos.main} ${true ? "ligh" : "dark"}`}>
      <Topo />
    </main>
  );
}
