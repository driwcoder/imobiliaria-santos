import Header from '@/components/header'
import Sobre from '@/components/sobre'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-white">
      <Header />
      <Sobre />
    </main>
  )
}
