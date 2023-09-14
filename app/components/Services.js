import SectionTitle from '@/Components/SectionTitle'
import { Cake, Gift, Truck } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <div className="h-full w-full  text-white flex flex-col items-center px-6 md:px-[5rem] py-8 bg-black ">
          <SectionTitle title="Services"/>
          <div className="w-full grid grid-cols-1 justify-items-center  lg:grid-cols-3 py-4 gap-y-3">
            {/* ----------------------------------service-1----------------------- */}
            <div className="flex flex-col items-center px-4  ">
              <Cake strokeWidth="1"  className="h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500 stroke-wid" />
              <div className="flex flex-col items-center p-2">
                <h4 className="text-xl font-bold text-accentColor text-center">
                  Home Made Food
                </h4>
                <p className="text-sm text-center">Everything in the cake is hand crafted by us</p>
              </div>
             
            </div>
             <div className="h-[0.01rem] w-32 md:hidden md:w-[0.01rem] md:h-24 bg-gray-600 flex items-center  justify-center "/>
            
            {/* -------------------------------service-2------------------------------------ */}
            <div className="flex flex-col items-center">
              <Truck  strokeWidth="1"  className="h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500 stroke-wid" />
              <div className="flex flex-col items-center p-2">
                <h4 className="text-xl font-bold text-accentColor text-center">
                  Home Delivery
                </h4>
                <p className="text-sm text-center">We ensure quick and reasonable home delivery</p>
              </div>

            </div>
            <div className="h-[0.01rem] w-32 md:hidden md:w-[0.01rem] md:h-24 bg-gray-600"/>
            {/* ---------------------------------------service-3------------------------------ */}
            <div className="flex flex-col items-center">
              <Gift strokeWidth="1"  className="h-14 w-14 lg:h-20 lg:w-20 stroke-yellow-500 stroke-wid" />
              <div className="flex flex-col items-center p-2">
                <h4 className="text-xl font-bold text-accentColor text-center">
                  Gift
                </h4>
                <p className="text-sm text-center">We decorate your product with letter, box and chocolate</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Services