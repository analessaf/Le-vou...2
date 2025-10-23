"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Header() {
    
    const pathname = usePathname();
    const navRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const toggle = toggleRef.current;

        if (!nav || !toggle) return;

        const setOpen = (open) => {
            nav.setAttribute('aria-expanded', String(open));
        };

        const handleToggleClick = () => {
            const open = nav.getAttribute('aria-expanded') === 'true';
            setOpen(!open);
        };

        const handleDocumentClick = (e) => {
            const open = nav.getAttribute('aria-expanded') === 'true';
            if (open && !nav.contains(e.target)) {
                setOpen(false);
            }
        };

        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };

        toggle.addEventListener('click', handleToggleClick);
        const links = nav.querySelectorAll('a');
        const handleLinkClick = () => setOpen(false);
        links.forEach((a) => a.addEventListener('click', handleLinkClick));
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('keydown', handleKeydown);

        return () => {
            toggle.removeEventListener('click', handleToggleClick);
            links.forEach((a) => a.removeEventListener('click', handleLinkClick));
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    useEffect(() => {
        const nav = navRef.current;
        if (nav) nav.setAttribute('aria-expanded', 'false');
    }, [pathname]);

    return (
        <nav id="site-menu" aria-expanded="false" ref={navRef}>
            <button className="menu-toggle" aria-label="Abrir menu" ref={toggleRef}>
                <Image src="/Index/menu.png" alt="Menu" width={32} height={32} />
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
              className={pathname === '/meusLivros' ? 'ativo' : ''} 
              href="/meusLivros">
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
                <Image className="carrinho" src="/Index/carrinho.png" alt="Carrinho" width={40} height={40} />
            </Link>
        </nav>
    );
}