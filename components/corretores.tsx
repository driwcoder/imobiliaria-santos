import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Corretores = () => {
  return (
    <div className='py-10 text-center flex flex-col items-center text-black' id='corretores'>
      <h2 className='font-bold text-4xl '>Corretores</h2>
      <Image
        className='py-8'
        src='/corretores.jpg'
        width='500'
        height='500'
        alt=''
      />
      <p className='max-w-4xl text-lg'>
        A <span>imobiliária Santos</span> conta com um time de profissionais qualificados que
        têm vários anos de experiência no mercado. Para entrar em contato com um
        de nossos corretores, basta clicar no link a seguir: <Link href='#' className='text-blue-600 underline'>Corretores</Link>
      </p>
    </div>
  )
}

export default Corretores
