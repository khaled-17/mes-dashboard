"use client";

import { Button } from "../../ui/button";
import { DialogClose } from "../../ui/dialog";

function ModalActions() {
  return (
    <div className=" ml-195 mr-20 mb-10 mt-25 flex gap-3  ">
      <DialogClose asChild>
        <Button className="hover:bg-primary hover:text-white bg-white text-primary border-2   border-[#2d62ed] text-[13px] font-roboto font-medium   text-left py-3 px-8 cursor-pointer uppercase  rounded-sm">
          Cancle
        </Button>
      </DialogClose>
      <Button className="bg-primary  text-white p-2 text-left py-3 px-8 cursor-pointer rounded-sm uppercase ">
        Add New
      </Button>
    </div>
  );
}

export default ModalActions;
