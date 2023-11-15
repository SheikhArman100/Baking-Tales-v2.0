"use client";
import { Trash2, X } from "lucide-react";
import { useRef } from "react";

const DeleteButton = () => {
  const deleteModal = useRef(null);
  return (
    <>
      <button onClick={() => deleteModal.current?.showModal()}>
        <Trash2 />
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
            <h4 className="text-base font-bold mt-2">Are you sure?</h4>
            <p className="text-sm font-semibold text-gray-400">
              Do you really want to delete the item?
            </p>
          </section>
          <section className="flex gap-x-3">
            <button
              className="py-2 px-4 rounded-lg bg-gray-500 text-sm font-semibold"
              onClick={() => deleteModal.current?.close()}
            >
              Close
            </button>
            <button className="py-2 px-8 rounded-lg bg-yellow-500  text-sm font-semibold">
              Yes
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default DeleteButton;
