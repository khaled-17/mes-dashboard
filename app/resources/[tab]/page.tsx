"use client";
import ConsumptionPage from "@/view/Resources/Consumption/ConsumptionPage";
import ProductScrap from "@/view/Resources/Product&Scrap/ProductScrap";
import SupplyPage from "@/view/Resources/Supply/SupplyPage";
import WeightPage from "@/view/Resources/Weight/WeightPage";

import { useParams } from "next/navigation";

const ResourcesPageTab = () => {
  const params = useParams();

  return (
    <>
      {params.tab === "supply" && <SupplyPage />}
      {params.tab === "weight" && <WeightPage />}
      {params.tab === "consumption" && <ConsumptionPage />}
      {params.tab === "product-scrap" && <ProductScrap />}
    </>
  );
};

export default ResourcesPageTab;
