"use client";
import useAxiosPrivate from "@/hooks/useAxiosPrivate.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Trash2, X } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const DeleteButton = ({cartId}) => {
  const deleteModal = useRef(null);
  const axiosPrivate=useAxiosPrivate()
  const queryClient=useQueryClient()
  const deleteCartMutation=useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.delete("cart", {data}, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: async () => {
      deleteModal.current.close()
      return queryClient.invalidateQueries(["cart"]);

    },
  })
  const handleDeleteCart=()=>{
    deleteCartMutation.mutate({
      cartId:cartId
    },{
      onSuccess: (data) => {
        
        toast.success(data.message);
      },
    })
  }
  return (
    <>
      <button onClick={() => deleteModal.current?.showModal()}>
        <Trash2 className="stroke-gray-300" />
      </button>
      <dialog
        ref={deleteModal}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/60  rounded-lg"
      >
        <div className="p-3 bg-bgColor border border-gray-600 w-[20rem] aspect-[1/0.8] flex flex-col items-center justify-center gap-y-6 rounded-lg">
          <section className="flex flex-col items-center">
            <div className="p-2 rounded-full border border-red-600">
              <X size={40} className="stroke-red-500" />
            </div>
            <h4 className="text-base font-bold mt-2 text-gray-400">Are you sure?</h4>
            <p className="text-sm font-semibold text-gray-200">
              Do you really want to delete the cart?
            </p>
          </section>
          <section className="flex gap-x-3">
            <button
              className="py-2 px-4 rounded-lg bg-white text-sm font-semibold"
              onClick={() => deleteModal.current?.close()}
            >
              Close
            </button>
            <button className="py-2 px-8 rounded-lg bg-yellow-500  text-sm font-semibold" onClick={handleDeleteCart}>
            {deleteCartMutation.isPending ? "Deleting..." : "Yes"}
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default DeleteButton;
