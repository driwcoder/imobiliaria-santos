import React from 'react'

const Servicos = () => {
  return (
    <div className='bg-blue-400 w-full flex flex-col items-center py-10 text-center' id='servicos'>
      <h2 className='font-bold text-4xl'>Serviços</h2>
      <p className='text-lg max-w-lg py-8'>
        Contamos com diversos serviços imobiliários e também prestamos suporte
        em cada uma das etapas necessárias de cada serviço. Aqui na Imobiliária
        Santos podemos te ajudar com a seguinte gama de assuntos relativos a
        imóveis:
      </p>
      <ul className='list-disc text-lg text-start'>
        <li>Venda</li>
        <li>Aluguel</li>
        <li>Financiamento</li>
        <li>Parcerias</li>
      </ul>
    </div>
  )
}

export default Servicos
