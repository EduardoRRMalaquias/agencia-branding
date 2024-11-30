import "./globals.css";
import Topo from '@/components/Topo/Topo';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={``}>
      <Topo />
        {children}
      </body>
    </html>
  );
}
