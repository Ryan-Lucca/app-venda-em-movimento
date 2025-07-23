import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Icon } from '../../assets/icon';

interface HeaderProps {
  reload?: boolean;
  show?: boolean;
  title?: string; // Novo: título personalizado
}

export default function Header({ reload = true, show = true, title }: HeaderProps) {
  const [nomeExecutivo, setNomeExecutivo] = useState('');

  const buscarNome = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?nat=br');
      const data = await response.json();

      const nome = data.results[0].name;
      const nomeCompleto = `${nome.first} ${nome.last}`;
      setNomeExecutivo(nomeCompleto);
    } catch (error) {
      console.error('Erro ao buscar nome:', error);
    }
  };

  useEffect(() => {
    if (show) buscarNome();
  }, [show]);

  if (!show) return null;

  const primeiroNome = nomeExecutivo?.split(' ')[0] || 'Carregando...';

  const iniciais = nomeExecutivo
    ? nomeExecutivo
        .split(' ')
        .slice(0, 2)
        .map((parte) => parte[0]?.toUpperCase() || '')
        .join('')
    : '--';

  // Novo: definir título
  const tituloFinal = title || `Olá, ${primeiroNome}`;

  return (
    <header className={styles.container}>
      <h1>{tituloFinal}</h1>
      <div className={styles.actions}>
        {reload && (
          <button
            className={styles.reloadButton}
            onClick={buscarNome}
            aria-label="Recarregar nome"
          >
            <Icon name="reload" size="25" />
          </button>
        )}
        <div className={styles.perfil}>{iniciais}</div>
      </div>
    </header>
  );
}
