import Contato from '@/components/contato'
import Corretores from '@/components/corretores'
import Header from '@/components/header'
import Servicos from '@/components/servicos'
import Sobre from '@/components/sobre'
import ScrollToTop from '@/components/scrolltotop';


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center  bg-white">
      <Header />
      <Sobre />
      <Servicos />
      <Corretores />
      <Contato />
      <ScrollToTop />
    </main>
  )
}
