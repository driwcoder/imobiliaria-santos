import React from 'react'

const Contato = () => {
  return (
    <div className='flex flex-col text-black text-center items-center bg-blue-400 w-full p-10' id='contato'>
      <h2 className='font-bold text-4xl text-white'>Contato</h2>
      <iframe
        className='py-10'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1166797096143!2d-43.360893!3d-22.982736499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003!5e0!3m2!1spt-BR!2sbr!4v1697497207426!5m2!1spt-BR!2sbr'
        width='600'
        height='450'
        loading='lazy'
      ></iframe>
      <p className='p-4 bg-slate-800 text-white text-bold mb-6'>Se ficou interessado em nos conhecer ou se tiver dúvidas entre em <span className='text-yellow-500'>contato</span> conosco através de um dos telefones abaixo:</p>
      <a href='#' className='bg-white text-blue-400 p-1 rounded-md underline mt-3'>Escritório Barra da Tijuca</a>
      <a href='#' className='bg-white text-blue-400 p-1 rounded-md underline mt-3'>Escritório Centro/RJ</a>
      <a href='#' className='bg-white text-blue-400 p-1 rounded-md underline mt-3'>Escritório Méier</a>
    </div>
  )
}

export default Contato
