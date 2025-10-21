"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    
    const pathname = usePathname();

    return (
        <nav id="site-menu" aria-expanded="false">
            <button className="menu-toggle" aria-label="Abrir menu">
                <img src="/Index/menu.png" alt="Menu" />
            </button>
            <h1 className="nome-site"> Lê-Vou </h1>

            <Link 
              className={pathname === '/' ? 'ativo' : ''} 
              href="/">
                Início
            </Link>
            
            <Link 
              className={pathname === '/livros' ? 'ativo' : ''} 
              href="/livros">
                Livros
            </Link>
            
            <Link 
              className={pathname === '/meus-livros' ? 'ativo' : ''} 
              href="/meus-livros">
                Meus Livros
            </Link>
            
            <Link 
              className={pathname === '/conta' ? 'ativo' : ''} 
              href="/conta">
                Conta
            </Link>

            <Link 
              className={`botao_carrinho ${pathname === '/carrinho' ? 'ativo' : ''}`} 
              href="/carrinho">
                <img className="carrinho" src="/Index/carrinho.png" alt="Carrinho" />
            </Link>
        </nav>
    );
}