import Image from 'next/image'

const Sobre = () => {
  return (
    <div className='flex flex-col py-10' id='sobre'>
      <div className='w-auto flex items-center justify-center'>
        <Image
          src='/banner.jpg'
          width='900'
          height='0'
          alt='banner'
          className='py-10'
        />
      </div>
      <h1 className='text-black font-bold text-4xl text-center'>
        Encontre o imóvel dos seus sonhos
      </h1>
      <h2 className='text-blue-400 font-bold text-2xl text-center'>
        A imobiliária que te ajuda no sonho do seu imóvel
      </h2>
      <div className='w-auto flex items-center justify-center py-10'>
        <Image
          src='/imovel-assinatura.jpg'
          height='100'
          width='400'
          alt='banner'
        />
      </div>
      <p className='text-black max-w-screen-lg text-center'>
        Há <span className='text-blue-600 font-bold'>10 anos</span> no ramo
        temos conquistado a confiança de
        <span className='text-blue-600 font-bold'> inúmeros clientes</span>. Isso
        porque procuramos sempre as melhores condições tanto para quem quer
        comprar, como para quem quer vender ou alugar. Oferecemos um{' '}
        <span className='text-blue-600 font-bold'>serviço de qualidade </span>
        servindo como ponte entre as partes interessadas.
      </p>
    </div>
  )
}

export default Sobre
