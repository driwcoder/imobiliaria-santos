import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='py-10 w-full flex flex-col items-center justify-center bg-blue-400' id='header'>
      <Link href='#header'>
      <Image 
      src='/logo.png'
      width='200'
      height='200'
      alt='Logotipo da empresa'
      />

      </Link>
      <nav className='text-slate-900 font-bold underline'>
        <Link href='#sobre' className='px-2'>Sobre</Link>
        <Link href='#servicos' className='px-2'>Serviços</Link>
        <Link href='#corretores' className='px-2'>Corretores</Link>
        <Link href='#contato' className='px-2'>Contato</Link>
      </nav>
    </div>
  )
}

export default Header