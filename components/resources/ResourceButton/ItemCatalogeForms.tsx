"use client";

import { TabsContent } from "../../ui/tabs";

function ItemCatalogeForms() {
  return (
    <TabsContent value="tab1">
      <div className="grid grid-cols-2 gap-7 mx-38">
        <input
          type="text"
          name=""
          id=""
          placeholder="item Code"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Material Name"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Supplier Code"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Category"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px]"
        />
      </div>
    </TabsContent>
  );
}

export default ItemCatalogeForms;
