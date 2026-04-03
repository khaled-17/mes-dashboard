"use client";

import { TabsContent } from "../../ui/tabs";

function ProductCatalogForms() {
  return (
    // Tabs 2
    <TabsContent value="tab2">
      <div className="grid grid-cols-2 gap-7 mx-38">
        <input
          type="text"
          name=""
          id=""
          placeholder="Product Id"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Product Name"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px]"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Bill Of Products"
          className="border-b-2 border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 text-[16px] col-span-2"
        />
      </div>
      {/* Switch */}
      <div className="flex items-center gap-2 ml-40 mt-5">
        <label
          htmlFor="switch"
          className="relative inline-flex items-center cursor-pointer"
        >
          <input type="checkbox" id="switch" className="sr-only peer" />
          {/* Track */}
          <div className="w-5 h-3 bg-gray-300 rounded-full peer-checked:bg-[#0000003D] transition-colors"></div>
          {/* Thumb */}
          <div className="absolute  left-0.4 top-0.6 w-3 h-3 bg-primary rounded-full shadow peer-checked:translate-x-3 transition-transform"></div>
        </label>
        <span className="text-[14px] font-medium text-[#5c5c5c] ml-4">
          Semi Finished Product
        </span>
      </div>
    </TabsContent>
  );
}

export default ProductCatalogForms;
