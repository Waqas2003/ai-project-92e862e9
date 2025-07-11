function Features() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold">Our Features</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-2xl font-bold">Natural Ingredients</h3>
              <p className="text-gray-600">We use only the finest natural ingredients</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-2xl font-bold">Cruelty-Free</h3>
              <p className="text-gray-600">We love animals, and we're cruelty-free</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-2xl font-bold">Sustainable Packaging</h3>
              <p className="text-gray-600">Our packaging is eco-friendly and sustainable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features