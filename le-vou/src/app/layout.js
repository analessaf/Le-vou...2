import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Lê-Vou',
  description: 'Sua livraria virtual!',
}

export default function LayoutBase({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        {/* 'children' é onde o conteúdo da sua página (page.js) será renderizado */}
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}