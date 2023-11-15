const FormCheckout = () => {
  return (
    <form className=" py-4 px-4 w-full  flex flex-col">
      <section>
        <h6 className="text-base font-semibold text-white text-left">
          Shipping Details
        </h6>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-2">
          {/* full name */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 ">
            <label className="text-sm font-semibold">Full name</label>
            <input
              type="text"
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm text-white bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            <p className="text-xs font-semibold text-red-700">
              *Full name is required
            </p>
          </div>
          {/* email */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 md:col-span-1">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            <p className="text-xs font-semibold text-red-700">
              *Email is required
            </p>
          </div>
          {/* Phone number */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 md:col-span-1">
            <label className="text-sm font-semibold">Phone number</label>
            <input
              type="tel"
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            <p className="text-xs font-semibold text-red-700">
              *Phone number is required
            </p>
          </div>
          {/* Shipping Address */}
          <div className="flex flex-col items-start gap-y-2 col-span-2 ">
            <label className="text-sm font-semibold">Shipping Address</label>
            <input
              type="text"
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            <p className="text-xs font-semibold text-red-700">
              *Shipping Address is required
            </p>
          </div>
          {/* City */}
          <div className="flex flex-col items-start gap-y-2 col-span-1">
            <label className="text-sm font-semibold">City</label>
            <input
              type="text"
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            <p className="text-xs font-semibold text-red-700">
              *City is required
            </p>
          </div>
          {/* House Details */}
          <div className="flex flex-col items-start gap-y-2 col-span-1">
            <label className="text-sm font-semibold">House Details</label>
            <input
              type="text"
              className="w-full rounded-md border  border-white px-4 shadow-sm text-sm bg-transparent py-3 focus:border focus:border-accentColor focus:outline-0"
            />

            <p className="text-xs font-semibold text-red-700 text-left">
              *House Details is required
            </p>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <h6 className="text-base font-semibold text-white text-left">
          Payment Method
        </h6>
        <fieldset className=" grid grid-cols-2 gap-x-4 mt-2">
          <div>
            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryStandard"
              id="DeliveryStandard"
              className="peer hidden [&:checked_+_label_svg]:block"
              checked
            />

            <label
              htmlFor="DeliveryStandard"
              className=" cursor-pointer rounded-lg border border-yellow-500 bg-yellow-500 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 flex flex-col items-start"
            >
              <div className="w-full flex items-center justify-between">
                <p className="text-white text-sm font-bold capitalize">
                  Cash on delivery
                </p>

                <svg
                  className="hidden h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>

          <div className="">
            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryPriority"
              id="DeliveryPriority"
              className="peer hidden [&:checked_+_label_svg]:block"
            />

            <label
              htmlFor="DeliveryPriority"
              className="h-full cursor-pointer rounded-lg border border-yellow-500 bg-yellow-500 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 flex flex-col item-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-between">
                <p className="text-white text-sm font-bold capitalize">Bkash</p>

                <svg
                  className="hidden h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

             
            </label>
          </div>
        </fieldset>
      </section>
      <section></section>
    </form>
  );
};

export default FormCheckout;
