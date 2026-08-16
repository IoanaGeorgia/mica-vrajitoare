import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="no-found-page page">
      <p>Pagina nu a fost gasita</p>
      <Link href="/" className='btn-default'>
        Inapoi la pagina principala
      </Link>
    </div>
  );
}