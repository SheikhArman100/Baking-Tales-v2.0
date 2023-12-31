"use client";

import { Badge } from "@/Components/ui/badge.jsx";
import { Checkbox } from "@/Components/ui/checkbox.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { Label } from "@/Components/ui/label.jsx";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group.jsx";
import { Textarea } from "@/Components/ui/textarea.jsx";
import { axiosPublic } from "@/libs/axios/config.js";
import { createProductSchema } from "@/libs/zod_schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { ChevronsUpDown, DollarSign } from "lucide-react";
import Image from "next/image.js";
import { useState } from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { toast } from "react-toastify";

const FormNewProduct = () => {
  const [images, setImages] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState({
    chocolate: false,
    vanilla: false,
    red_velvet: false,
  });
  const methods = useForm({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      flavors: [],
      sizes: [],
      images: [],
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors, isValid },
  } = methods;

  const createProductMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("product/create", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: async () => {
      reset();
      setImages([]);
      setSelectedFlavours({
        chocolate: false,
        vanilla: false,
        red_velvet: false,
      });
    },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    createProductMutation.mutate(
      {
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
        flavors: data.flavors,
        sizes: data.sizes,
        images: data.images,
      },
      {
        onError: (data) => {
          toast.error(data.response.data.message);
        },
        onSuccess: (data) => {
          toast.success(data.message);
        },
      }
    );
  };
  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        className="py-6 "
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <article className="flex flex-col md:flex-row md:justify-between gap-2">
          <section className="flex-1 flex flex-col gap-y-2">
            {/* -----------------------title--------------------------------------------------------- */}

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>

              <Input
                type="text"
                id="title"
                className="bg-transparent"
                {...register("title")}
              />

              {errors.title?.message && (
                <p className="text-xs font-semibold text-red-700 ">
                  *{errors.title?.message}
                </p>
              )}
            </div>

            {/* -----------------------description ------------------------------*/}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                className="max-w-sm bg-transparent"
                {...register("description")}
              />
              {errors.description?.message && (
                <p className="text-xs font-semibold text-red-700 ">
                  *{errors.description?.message}
                </p>
              )}
            </div>

            {/* -----------------------Category---------------------------- */}
            <CategorySelect />
            {/* --------------flavour----------------------------- */}
            <FlavorSelect
              selectedFlavours={selectedFlavours}
              setSelectedFlavours={setSelectedFlavours}
            />
            {/* ---------------------price--------------- */}
            <div className="mt-1">
              <Label>Price</Label>
              <div className="w-full max-w-sm mt-1 py-2 rounded-md flex items-center gap-x-2 border border-input px-3">
                <DollarSign className="h-4 w-4" />
                <input
                  type="number"
                  id="price"
                  className="bg-transparent flex-1"
                  {...register("price")}
                />
              </div>
              {errors.price?.message && (
                <p className="text-xs font-semibold text-red-700 ">
                  *{errors.price?.message}
                </p>
              )}
            </div>
            {/* -----------------------size------------------------ */}
            <SelectSize />
          </section>
          <UploadImages images={images} setImages={setImages} />
        </article>
        <div className="w-full   mt-2 flex justify-center md:justify-start">
          <button
            type="submit"
            className="w-full max-w-sm p-2 bg-orange-500 rounded-lg  "
          >
            {createProductMutation.isPending ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <p>Create</p>
                  )}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

const UploadImages = ({ images, setImages }) => {
  const {
    register,
    control,
    setValue,
    formState: { errors, isValid },
  } = useFormContext();

  const handleImages = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };
  const transformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages([...images, reader.result]);
        setValue("images", [...images, reader.result]);
      };
    }
  };
  return (
    <article className="flex-1">
      <Label> Upload Images(5)</Label>
      <section className=" flex items-center justify-center mt-1">
        <div className="relative w-full max-w-xs aspect-[2/1] rounded-md border border-dashed border-input flex items-center justify-center">
          <div>
            <svg
              className="text-indigo-500 w-16 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <label>
              <input
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
                accept="image/"
                onChange={handleImages}
                {...register("images", {
                  onChange: handleImages,
                })}
              />
              <div className=" bg-indigo-600 text-white text-sm  rounded font-semibold cursor-pointer flex items-center justify-center px-3 py-1">
                Select
              </div>
            </label>
          </div>
        </div>
      </section>
      <section className="">
        <Label> Preview Images</Label>
        <div className="relative w-full max-w-sm h-full  p-3 flex items-center justify-center gap-2 flex-wrap border  border-dashed border-input rounded-md m-auto">
          {images.length === 0 ? (
            <p className="text-gray-200 text-xs">No images for preview</p>
          ) : (
            images.map((image, index) => (
              <div key={index} className="w-1/3 aspect-square relative">
                <Image
                  src={image}
                  fill
                  className="w-full h-full object-cover"
                  alt="preview image"
                />
              </div>
            ))
          )}
        </div>
      </section>
      {errors.images?.message && (
        <p className="text-xs font-semibold text-red-700 ">
          *{errors.images?.message}
        </p>
      )}
    </article>
  );
};

const SelectSize = () => {
  const sizes = [
    {
      id: "1.0",
    },
    {
      id: "1.5",
    },
    {
      id: "2.0",
    },
    {
      id: "2.5",
    },
    {
      id: "3.0",
    },
  ];
  const {
    register,
    control,
    formState: { errors, isValid },
  } = useFormContext();
  return (
    <section>
      <Label>Available Sizes(in pound)</Label>
      <div className="grid grid-cols-2 gap-2 mt-1">
        {sizes.map((size) => (
          <Controller
            key={size.id}
            control={control}
            name="sizes"
            render={({ field: { value, onChange } }) => {
              return (
                <div className="flex items-center gap-x-2">
                  <Checkbox
                    checked={value?.includes(size.id)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? onChange([...value, size.id])
                        : onChange(
                            value?.filter(
                              (changeValue) => changeValue !== size.id
                            )
                          );
                    }}
                  />
                  <Label>{size.id}</Label>
                </div>
              );
            }}
          />
        ))}
      </div>
      {errors.sizes?.message && (
        <p className="text-xs font-semibold text-red-700 ">
          *{errors.sizes?.message}
        </p>
      )}
    </section>
  );
};

const FlavorSelect = ({ selectedFlavours, setSelectedFlavours }) => {
  const flavors = [
    {
      id: "chocolate",
      label: "chocolate",
    },
    {
      id: "vanilla",
      label: "vanilla",
    },
    {
      id: "red velvet",
      label: "red velvet",
    },
  ];

  const {
    register,
    control,
    formState: { errors, isValid },
  } = useFormContext();

  let selected = Object.keys(selectedFlavours).filter(
    (key) => selectedFlavours[key]
  );
  const handleCheckboxChange = (flavor) => {
    setSelectedFlavours((prevState) => ({
      ...prevState,
      [flavor]: !prevState[flavor],
    }));
  };
  return (
    <div className="flex flex-col items-start mt-1.5">
      <Label>Available Flavors</Label>
      {
        <Controller
          control={control}
          name="flavors"
          render={() => (
            <DropdownMenu className="">
              <DropdownMenuTrigger type="button" asChild>
                <button
                  type="button"
                  className=" w-full max-w-sm mt-1 py-2 rounded-md flex items-center justify-between border border-input px-3"
                >
                  {selected.length === 0 ? (
                    <p className="text-gray-300 text-sm">Select flavours</p>
                  ) : (
                    <div className="flex items-center gap-x-1 flex-wrap">
                      {selected.map((value, index) => (
                        <Badge
                          key={index}
                          className={` text-white ${
                            value === "chocolate"
                              ? "bg-amber-700"
                              : value === "vanilla"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        >
                          {value}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <ChevronsUpDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full p-4 flex flex-col gap-y-3 font2">
                {flavors.map((flavor) => (
                  <Controller
                    key={flavor.id}
                    control={control}
                    name="flavors"
                    render={({ field: { value, onChange } }) => {
                      return (
                        <div className="flex items-center gap-x-2">
                          <Checkbox
                            checked={value?.includes(flavor.id)}
                            onCheckedChange={(checked) => {
                              handleCheckboxChange(flavor.id);
                              return checked
                                ? onChange([...value, flavor.id])
                                : onChange(
                                    value?.filter(
                                      (changeValue) => changeValue !== flavor.id
                                    )
                                  );
                            }}
                          />
                          <Label>{flavor.label}</Label>
                        </div>
                      );
                    }}
                  />
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        />
      }

      {errors.flavors?.message && (
        <p className="text-xs font-semibold text-red-700 ">
          *{errors.flavors?.message}
        </p>
      )}
    </div>
  );
};
const CategorySelect = () => {
  const {
    register,
    control,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <div className="w-full max-w-sm md:max-w-lg">
      <Label>Category</Label>
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            className="grid grid-cols-3 mt-1"
            onValueChange={onChange}
            defaultValue={value}
          >
            <div>
              <RadioGroupItem value="cake" id="cake" className="peer sr-only" />
              <Label
                htmlFor="cake"
                className="flex flex-col items-center justify-between rounded-md border-2 border-input bg-transparent   p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-transparent [&:has([data-state=checked])]:border-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cake mb-2 stroke-pink-400"
                >
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                  <path d="M2 21h20" />
                  <path d="M7 8v2" />
                  <path d="M12 8v2" />
                  <path d="M17 8v2" />
                  <path d="M7 4h.01" />
                  <path d="M12 4h.01" />
                  <path d="M17 4h.01" />
                </svg>
                Cake
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="cupcake"
                id="cupcake"
                className="peer sr-only"
              />
              <Label
                htmlFor="cupcake"
                className="flex flex-col items-center justify-between rounded-md border-2 border-input bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-transparent [&:has([data-state=checked])]:border-primary"
              >
                <svg
                  height="24"
                  width="24"
                  version="1.1"
                  strokeWidth="2"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 463.001 463.001"
                  className="mb-2 fill-indigo-400"
                >
                  <path
                    d="M388.909,272h-0.331c7.057-9.252,13.254-21.671,13.009-36.607c-0.331-20.188-12.399-39.939-35.868-58.705
    	c2.934-8.811,3.557-17.498,1.835-26.009c-6.824-33.717-43.412-47.183-76.987-54.669c1.193-3.964,1.842-8.162,1.842-12.51
    	c0-16.454-9.185-30.802-22.695-38.192C283.155,18.017,301.077,15,308.286,15c9.185,0,14.96,1.966,18.301,3.739
    	c2.599,1.379,5.749,1.157,8.091-0.623c4.361-3.315,3.799-10.016-1.037-12.589C328.261,2.663,320.085,0,308.286,0
    	c-14.379,0-27.865,6.616-39,19.132c-3.749,4.214-9.167,11.317-13.899,21.353C253.273,40.168,251.11,40,248.909,40
    	c-16.313,0-30.55,9.031-37.994,22.352c-2.725-3.011-5.735-6.95-7.856-11.408c-0.892-1.875-2.522-3.296-4.501-3.925
    	c-1.979-0.628-4.131-0.409-5.941,0.607c-22.422,12.578-38.793,29.335-48.66,49.806c-8.438,17.507-9.998,33.636-10.027,43.015
    	c-0.634,0.246-1.262,0.492-1.849,0.744c-19.413,8.32-30.607,24.159-32.375,45.804c-0.706,8.652,0.271,16.547,1.314,21.965
    	c-15.449,5.536-26.193,16.119-30.067,29.988c-3.058,10.948-1.48,22.826,3.939,33.053h-5.984c-2.281,0-4.438,1.038-5.862,2.821
    	c-1.423,1.783-1.957,4.116-1.452,6.341l37.169,163.546c2.448,10.77,11.871,18.292,22.916,18.292h214.457
    	c11.044,0,20.468-7.522,22.916-18.292l37.169-163.546c0.505-2.225-0.029-4.558-1.452-6.341
    	C393.348,273.038,391.191,272,388.909,272z M248.909,55c15.715,0,28.5,12.785,28.5,28.5c0,15.715-12.785,28.5-28.5,28.5
    	c-15.715,0-28.5-12.785-28.5-28.5C220.409,67.785,233.195,55,248.909,55z M121.681,448c-3.995,0-7.403-2.721-8.289-6.616
    	L78.305,287h24.274l26.813,157.306c0.218,1.28,0.525,2.51,0.898,3.694H121.681z M148.488,448c-1.362,0-3.617-2.16-4.308-6.214
    	L117.796,287h24.417l17.829,156.893c0.163,1.43,0.401,2.802,0.708,4.107H148.488z M176.651,448
    	c-0.522-0.849-1.352-2.701-1.704-5.801L157.31,287h24.513l8.891,156.471c0.091,1.608,0.231,3.117,0.417,4.529H176.651z
    	 M221.409,448h-15.078c-0.257-1.285-0.51-3.059-0.642-5.379L196.847,287h24.039c0.009,0,0.018,0.002,0.027,0.002
    	c0.013,0,0.025-0.002,0.038-0.002h0.458V448z M252.129,442.621c-0.132,2.32-0.385,4.095-0.642,5.379h-15.078V287h24.562
    	L252.129,442.621z M281.168,448h-14.481c0.187-1.411,0.326-2.92,0.417-4.529L275.995,287h24.514l-17.637,155.199
    	C282.52,445.299,281.691,447.151,281.168,448z M309.331,448h-12.263c0.308-1.305,0.546-2.677,0.709-4.107L315.605,287h24.417
    	l-26.384,154.786C312.948,445.84,310.693,448,309.331,448z M344.426,441.384c-0.885,3.896-4.294,6.616-8.289,6.616h-8.61
    	c0.373-1.184,0.68-2.414,0.898-3.694L355.239,287h15.896c0.006,0,0.012,0.001,0.019,0.001c0.008,0,0.015-0.001,0.023-0.001h8.337
    	L344.426,441.384z M368.307,272h-115c16.863-8.811,38.706-21.158,59.289-35.598c3.391-2.379,4.211-7.056,1.832-10.447
    	c-2.379-3.391-7.056-4.211-10.447-1.832c-35.726,25.065-76.633,44.199-84.689,47.877H93.137
    	c-7.453-8.047-10.489-19.156-7.735-29.018c3.118-11.165,13.188-18.983,28.355-22.017c14.246-2.849,51.915-10.78,93.934-22.862
    	c3.98-1.145,6.28-5.3,5.135-9.281c-1.145-3.98-5.296-6.282-9.281-5.135c-37.454,10.77-71.4,18.197-87.991,21.608
    	c-2.293-12.345-3.808-39.07,22.437-50.318c10.129-4.341,30.656-8.079,52.388-12.036l7.26-1.325
    	c4.074-0.748,6.771-4.656,6.023-8.73c-0.748-4.075-4.656-6.771-8.73-6.023l-7.24,1.322c-14.033,2.555-27.579,5.023-38.632,7.726
    	c1.02-17.477,8.423-48.343,44.532-71.394c2.71,4.048,5.623,7.382,7.938,9.769c1.616,1.666,2.995,2.971,4.2,4.019
    	c-0.204,1.706-0.321,3.437-0.321,5.197c0,23.986,19.514,43.5,43.5,43.5c14.095,0,26.641-6.744,34.595-17.169
    	c14.792,3.146,27.032,6.785,36.917,11.036c1.875,2.837,1.618,4.876,1.099,6.505c-1.863,5.837-13.482,21.888-80.971,44.791
    	c-3.922,1.331-6.023,5.59-4.692,9.512c1.06,3.124,3.976,5.092,7.102,5.092c0.799,0,1.612-0.129,2.411-0.4
    	c24.19-8.209,43.814-16.407,58.327-24.366c18.367-10.073,28.872-19.909,32.114-30.069c0.239-0.749,0.43-1.497,0.59-2.246
    	c9.221,6.697,14.555,14.593,16.453,23.969c2.759,13.63-3.437,28.679-18.414,44.729c-2.826,3.028-2.662,7.774,0.367,10.6
    	c1.446,1.349,3.282,2.017,5.115,2.017c2.006,0,4.008-0.8,5.485-2.383c5.602-6.003,10.184-11.979,13.753-17.912
    	c17.96,15.076,27.19,30.181,27.431,44.933C386.858,252.009,376.05,264.893,368.307,272z"
                  />
                </svg>
                Cupcake
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="jarcake"
                id="jarcake"
                className="peer sr-only"
              />
              <Label
                htmlFor="jarcake"
                className="flex flex-col items-center justify-between rounded-md border-2 border-input bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-transparent [&:has([data-state=checked])]:border-primary"
              >
                <svg
                  height="24"
                  width="24"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  className="mb-2 fill-green-400"
                >
                  <path
                    d="M169.768,48.505c4.465,0,8.084-3.618,8.084-8.084V8.084c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.619-8.084,8.084v32.337
    		C161.684,44.887,165.304,48.505,169.768,48.505z"
                  />
                  <path
                    d="M202.105,48.505c4.465,0,8.084-3.618,8.084-8.084V8.084c0-4.466-3.62-8.084-8.084-8.084
    		c-4.465,0-8.084,3.619-8.084,8.084v32.337C194.021,44.887,197.641,48.505,202.105,48.505z"
                  />
                  <path
                    d="M396.126,118.568h-2.695v-13.474c0-16.344-13.297-29.642-29.642-29.642H349.12l24.851-24.849
    		c11.558-11.558,11.558-30.364,0-41.923c-11.558-11.556-30.362-11.556-41.92,0L265.28,75.453H148.21
    		c-16.345,0-29.642,13.298-29.642,29.642v13.474h-2.695c-16.345,0-29.642,13.298-29.642,29.642v21.558
    		c0,13.951,9.688,25.683,22.691,28.819l49.794,288.808C161.174,501.651,173.46,512,187.928,512h136.145
    		c14.468,0,26.753-10.348,29.211-24.605l49.794-288.808c13.003-3.136,22.691-14.867,22.691-28.819V148.21
    		C425.768,131.866,412.471,118.568,396.126,118.568z M343.483,20.115c5.254-5.254,13.801-5.254,19.055,0s5.254,13.801,0,19.055
    		l-36.283,36.283h-38.11L343.483,20.115z M337.351,484.647c-1.117,6.481-6.701,11.184-13.277,11.184H187.928
    		c-6.576,0-12.161-4.703-13.278-11.184l-49.179-285.237h261.057L337.351,484.647z M409.6,169.768
    		c0,7.393-5.986,13.415-13.366,13.474c-0.088-0.003-0.175-0.002-0.261,0H116.026c-0.086-0.002-0.172-0.003-0.26,0
    		c-7.38-0.058-13.366-6.08-13.366-13.474v-2.695h78.147c4.465,0,8.084-3.618,8.084-8.084c0-4.466-3.62-8.084-8.084-8.084H102.4
    		v-2.695c0-7.43,6.044-13.474,13.474-13.474h194.021c4.465,0,8.084-3.619,8.084-8.084s-3.62-8.084-8.084-8.084H134.737v-13.474
    		c0-7.43,6.044-13.474,13.474-13.474h181.368c0.017,0,0.033,0,0.051,0h34.161c7.43,0,13.474,6.044,13.474,13.474v13.474h-35.032
    		c-4.465,0-8.084,3.619-8.084,8.084s3.62,8.084,8.084,8.084h53.895c7.43,0,13.474,6.044,13.474,13.474V169.768z"
                  />
                  <path
                    d="M256,382.653c34.176,0,61.979-27.803,61.979-61.979S290.176,258.695,256,258.695s-61.979,27.803-61.979,61.979
    		S221.824,382.653,256,382.653z M256,274.863c25.26,0,45.811,20.55,45.811,45.811c0,22.502-16.309,41.266-37.726,45.096v-66.654
    		c0-4.466-3.62-8.084-8.084-8.084s-8.084,3.619-8.084,8.084v66.654c-21.418-3.83-37.726-22.594-37.726-45.096
    		C210.189,295.413,230.74,274.863,256,274.863z"
                  />
                </svg>
                Jarcake
              </Label>
            </div>
          </RadioGroup>
        )}
      />

      {errors.category?.message && (
        <p className="text-xs font-semibold text-red-700 ">
          *{errors.category?.message}
        </p>
      )}
    </div>
  );
};

export default FormNewProduct;
