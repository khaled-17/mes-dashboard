"use client";

import MaterialIcon from "@/icons/MaterialIcon";
import { DialogTitle } from "../../ui/dialog";

function ModalHeader() {
  return (
    <DialogTitle className=" flex p-6 font-extralight border-solid border-b-[#dfdbdb] border-b-2 py-3">
      <div className="flex gap-3 ">
        <MaterialIcon className="w-5 h-5  text-[#424040] mb-" />{" "}
        <p className="text-[14px] leading-4 font-medium text-[#707070] tracking-[0.28px] uppercase text-left  ">
          ADD NEW CATALOGE
        </p>
      </div>
    </DialogTitle>
  );
}

export default ModalHeader;
