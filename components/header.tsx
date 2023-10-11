import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='py-10 w-full flex flex-col items-center justify-center bg-cyan-200'>
      <Image 
      src='/logo.png'
      width='200'
      height='200'
      alt='Logotipo da empresa'
      />
      <nav className='text-slate-900 font-bold underline'>
        <Link href='#Sobre' className='px-2'>Sobre</Link>
        <Link href='#Serviços' className='px-2'>Serviços</Link>
        <Link href='#Corretores' className='px-2'>Corretores</Link>
        <Link href='#Contato' className='px-2'>Contato</Link>
      </nav>
    </div>
  )
}

export default Header