import Image from "next/image";
// buttons 
export const ProductDescription = () => (
    <section className="px-6 py-8 mx-20 m-6">
      <div className="flex space-x-4 border-b pb-2">
        <button className="text-md font-semibold border-b-2 p-3 text-white rounded-lg bg-orange-500">Description</button>
        <button className="text-lg text-gray-500">Reviews (24)</button>
      </div>
      <p className="mt-4 text-gray-700 leading-relaxed ">
      Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed ">
      Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
      </p>
    </section>
  );

//   key benefits section 
 export const KeyBenefits = () => (
    <section className="px-6 py-4 mx-20">
      <h2 className="text-lg font-semibold mb-2">Key Benefits</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
        <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
        <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
        <li>Mauris eget diam magna, in blandit turpis.</li>
      </ul>
    </section>
  );

//   similar products section 
  export const SimilarProducts = () => (
    <section className="px-6 py-8 mx-20">
      <h2 className="text-lg font-semibold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/freshlime.png" },
          { name: "Chocolate Muffin", price: "$28.00", image: "/muffin.png" },
          { name: "Burger", price: "$21.00", image: "/burger.png" },
          { name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/freshlime.png" },
        ].map((product, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <Image src={product.image} alt={product.name} width={256} height={256} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );