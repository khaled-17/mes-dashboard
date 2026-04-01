"use client";
import ConsumptionPage from "@/view/Resources/Consumption/ConsumptionPage";
import ProductScrap from "@/view/Resources/Product&Scrap/ProductScrap";
import SupplyPage from "@/view/Resources/Supply/SupplyPage";
import WeightPage from "@/view/Resources/Weight/WeightPage";

import { useParams } from "next/navigation";

const ResourcesPageTab = () => {
  const params = useParams();

  const tab = params.tab;

  if (tab === "supply") {
    return <SupplyPage />;
  }

  if (tab === "weight") {
    return <WeightPage />;
  }

  if (tab === "consumption") {
    return <ConsumptionPage />;
  }

  if (tab === "product-scrap") {
    return <ProductScrap />;
  }
};

export default ResourcesPageTab;
