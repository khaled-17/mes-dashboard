"use client";

import { TabsList, TabsTrigger } from "../../ui/tabs";

function CatalogTabs() {
  return (
    <TabsList className=" m-auto my-10 mt-8">
      <TabsTrigger
        className="focus:bg-primary  focus:text-white  py-3.5  px-7 text-[13px] font-medium  leading-4 hover:bg-blue-400 hover:text-white"
        value="tab1"
      >
        item Cataloge
      </TabsTrigger>
      <TabsTrigger
        className="focus:bg-primary focus:text-white py-3.5 px-7  text-[13px] font-medium leading-4  hover:bg-blue-400 hover:text-white"
        value="tab2"
      >
        Product Cataloge
      </TabsTrigger>
    </TabsList>
  );
}

export default CatalogTabs;
