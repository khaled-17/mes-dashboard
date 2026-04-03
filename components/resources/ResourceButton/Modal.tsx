"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import AddNewButton from "./AddNewButton";
import ModalHeader from "./ModalHeader";
import ItemCatalogeForms from "./ItemCatalogeForms";
import ProductCatalogForms from "./ProductCatalogForms";
import ModalActions from "./ModalActions";
import CatalogTabs from "./CatalogTabs";

export default function ModalWithTabs() {
  return (
    <Dialog>
      {/* Buttons */}
      <AddNewButton />

      <DialogContent className="min-w-291.75 min-h-136.25 ">
        {/* Header */}
        <ModalHeader />
        {/* TABS */}
        <Tabs defaultValue="tab1" className="space-y-4">
          <CatalogTabs />
          {/* Tabs 1 */}
          <ItemCatalogeForms />
          {/* Tabs 2 */}
          <ProductCatalogForms />
        </Tabs>

        {/* Buttons; */}
        <ModalActions />
      </DialogContent>
    </Dialog>
  );
}
