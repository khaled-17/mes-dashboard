"use client";

import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";

function AddNewButton() {
  return (
    <DialogTrigger asChild>
      <Button>
        <div className="p-7 flex gap-4 items-center">
          {" "}
          <span className="font-extrabold text-2xl">+</span>
          <span className="text-sm "> ADD NEW</span>
        </div>
      </Button>
    </DialogTrigger>
  );
}

export default AddNewButton;
