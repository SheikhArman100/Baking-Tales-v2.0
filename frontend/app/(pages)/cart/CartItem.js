import DeleteButton from "@/Components/DeleteButton.js";
import Image from "next/image.js";


const CartItem = ({
  cartId,
    image,
    title,
    category,
    flavor,
    size,
    quantity,
    price,
  }) => {
    return (
      <div className="w-full h-fit   flex items-center  gap-x-4  py-4 border-b border-white last:border-none">
        <div className="relative w-[3.5rem] md:w-[4.5rem] aspect-square p-1 sm:p-2  border border-accentColor2 rounded-lg">
          <div className="h-full w-full relative">
            <Image
              src={image}
              fill
              sizes="52px"
              className="h-full w-full object-cover rounded-lg"
              alt={title}
            />
          </div>
          <div className="absolute -top-3 -right-2 bg-yellow-500 h-6 w-6  text-xs font-bold  rounded-full flex items-center justify-center text-white ">
            <span className="font2">{quantity}</span>
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col justify-between">
          <div className="flex flex-col items-start ">
            <h5 className="text-sm font-bold text-white">{title}</h5>
            <p className="text-xs font-semibold text-gray-400">{category}</p>
          </div>
          <div className="mt-1 flex gap-x-2">
            <span className="p-1 text-xs font-semibold border border-gray-500 text-white rounded-lg font2">
              {flavor}
            </span>
            <span className="py-1 px-2 md:px-3 text-xs font-semibold border border-gray-500 text-white rounded-lg font2">
              {size}
            </span>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between items-center  ">
          <p className="text-sm font-semiBold text-white font2">${price}</p>
          <div className="flex gap-x-1">
            <DeleteButton cartId={cartId}/>
          </div>
        </div>
      </div>
    );
  };

export default CartItem