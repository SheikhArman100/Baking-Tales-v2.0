"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip.jsx";
import useAxiosPrivate from "@/hooks/useAxiosPrivate.js";
import useWishlist from "@/hooks/useWishlist.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation.js";
import { toast } from "react-toastify";

const AddToWishList = ({ productId }) => {
  const router = useRouter();
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { data } = useWishlist();
  const wishlist = data?.wishlist;
  const isInWishlist = wishlist?.some(
    (product) => product.productId === productId
  );

  //add to wishlist mutation
  const addToWishListMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post("wishlist", data, {
        withCredentials: true,
      });
      return response.data;
    },
    onSettled: async () => {
      toast.warning("Wait! Adding to the wishlist");
      return await queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
  //delete from wishlist
  const deleteFromWishListMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.delete(
        "wishlist",
        {
          data,
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSettled: async () => {
      toast.warning("Wait! Removing from the wishlist");
      return await queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  const handleWishlist = () => {
    if (isInWishlist) {
      deleteFromWishListMutation.mutate(
        {
          productId: productId,
        },
        {
          onSuccess: (data) => {
            toast.success(data.message);
          },
          onError: (data) => {
            toast.error(data.response.data.message);
            router.push("/auth/signin");
          },
        }
      );
    } else {
      addToWishListMutation.mutate(
        {
          productId: productId,
        },
        {
          onSuccess: (data) => {
            toast.success(data.message);
          },
          onError: (data) => {
            router.push("/auth/signin");
          },
        }
      );
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
          type="button"
            className="p-2 border border-white mt-4 "
            onClick={handleWishlist}
          >
            <Heart
              strokeWidth="1"
              className={`${
                isInWishlist ? "fill-yellow-500" : "stroke-white"
              } `}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent className=" bg-white text-black">
          <p className="font2">Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddToWishList;
