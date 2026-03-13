"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  getActiveTabFromPathname,
  getSectionKeyFromPathname,
  SECTION_NAVIGATION,
} from "@/lib/section-navigation";

const SectionBreadcrumbs = () => {
  const pathname = usePathname();

  const sectionKey = getSectionKeyFromPathname(pathname);

  if (!sectionKey) {
    return null;
  }

  const sectionTab = SECTION_NAVIGATION[sectionKey];
  const activeTab = getActiveTabFromPathname(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm text-slate-600">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={sectionTab.tabs[0].href}
              className="font-semibold text-slate-700"
            >
              {sectionTab.sectionLabel}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-slate-500">\</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold text-slate-700">
            {activeTab?.label ?? sectionTab.tabs[0].label}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SectionBreadcrumbs;
