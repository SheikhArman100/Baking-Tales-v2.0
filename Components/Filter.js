import React from 'react'

const Filter = () => {
  return (
    <div className='mt-4 hidden md:flex md:flex-col'>
        <div>
            <h3 className=" text-base p-2 border-b border-white">Availability</h3>
            <ul className="space-y-1 border-t border-gray-200 p-4">
            <li>
              <label for="FilterInStock" className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  id="FilterInStock"
                  className="h-5 w-5 rounded border-yellow-300 bg-transparent checked:bg-yellow-500 active:bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500 "
                  //  text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500  focus:ring-2 
                />

                <span className="text-sm font-medium ">
                  In Stock (5+)
                </span>
              </label>
            </li>

            <li>
              <label
                for="FilterPreOrder"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="FilterPreOrder"
                  className="h-5 w-5 rounded border-yellow-300 bg-transparent checked:bg-yellow-500 active:bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                />

                <span className="text-sm font-medium ">
                  Pre Order (3+)
                </span>
              </label>
            </li>

            <li>
              <label
                for="FilterOutOfStock"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="FilterOutOfStock"
                  className="h-5 w-5 rounded border-yellow-300 bg-transparent checked:bg-yellow-500 active:bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                />

                <span className="text-sm font-medium ">
                  Out of Stock (10+)
                </span>
              </label>
            </li>
          </ul>
            
        </div>
        <div className="mt-4">
           <h3 className=" text-base p-2 border-b border-white">Price</h3>
           
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              <label for="FilterPriceFrom" className="flex items-center gap-2">
                <span className="text-lg font-bold ">$</span>

                <input
                  type="number"
                  id="FilterPriceFrom"
                  placeholder="From"
                  className="w-full rounded-md  bg-transparent active:bg-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-sm sm:text-sm border-yellow-500 text-white"
                />
              </label>

              <label for="FilterPriceTo" className="flex items-center gap-2">
                <span className="text-lg font-bold ">$</span>

                <input
                  type="number"
                  id="FilterPriceTo"
                  placeholder="To"
                  className="w-full text-white border-yellow-500 rounded-md active:bg-yellow-500  focus:ring-2 focus:ring-yellow-500 bg-transparent shadow-sm sm:text-sm"
                />
              </label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Filter