'use client'
declare global {
    interface Window {
      my_modal_1: HTMLDialogElement;
    }
  }

export default function AddCategory() {
    return ( 
        <div className="m-16 block space-y-4 md:flex md:space-y-0 md:space-x-4">
            <button onClick={()=>window.my_modal_1.showModal()} data-modal-target="medium-modal" data-modal-toggle="medium-modal" className="block w-full md:w-auto text-white bg-blue-900 hover:bg-blue-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" >
                Add Category
            </button>
        </div>
            
        )
}