import './globals.css';
import Topo from '@/components/Topo/Topo';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${true ? 'ligh' : 'dark'}`}>
        <Topo />
        {children}
      </body>
    </html>
  );
}
