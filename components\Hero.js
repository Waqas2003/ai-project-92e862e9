import Image from 'next/image'

function Hero() {
  return (
    <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-4xl font-bold text-white">Swat Beauty</h1>
        <p className="text-2xl text-white">Discover the beauty within</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Explore
        </button>
      </div>
    </section>
  )
}

export default Hero