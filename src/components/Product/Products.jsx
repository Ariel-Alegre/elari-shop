/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Air Jordan 1 Low',
      href: '#',
      imageSrc: 'https://nikearprod.vtexassets.com/arquivos/ids/378363-1200-1200?v=638138921470430000&width=1200&height=1200&aspect=true',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35.000',
      color: 'Negro, blanco y rojo',
    },
    {
        id: 1,
        name: 'Nike Air Force 1',
        href: '#',
        imageSrc: 'https://nikearprod.vtexassets.com/arquivos/ids/699261-1200-1200?v=638229666028100000&width=1200&height=1200&aspect=true',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$36.000',
        color: 'Blanco',
      },
      {
        id: 1,
        name: 'Nike Dunk Low',
        href: '#',
        imageSrc: 'https://nikearprod.vtexassets.com/arquivos/ids/700122-1200-1200?v=638229717021670000&width=1200&height=1200&aspect=true',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$38.0000',
        color: 'Naranja y blanco',
      },
     

    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Zapatillas</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  