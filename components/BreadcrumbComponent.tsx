"use client"
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

/**
 * Automatically generates breadcrumb navigation based on the current URL pathname.
 * Each segment is converted from kebab-case and separated by backslash separators,
 * with clickable links to navigate to parent routes.
 * 
 * @returns {JSX.Element} A breadcrumb navigation component displaying the current route hierarchy
 * 
 * @example
 * // If the current path is "/machines/production-line-1"
 * // This will render:
 * // [Machines] \ [Production Line 1]
 * // 
 * // Both "Machines" and "Production Line 1" are clickable links that navigate to their respective routes
 * <BreadCrumbComponent />
 * 
 * @remarks
 * - Automatically detects the current pathname using Next.js usePathname hook
 * - Converts kebab-case and ampersands to human-readable text (e.g., "machine-name" → "Machine Name")
 * - Each breadcrumb segment links to its corresponding route
 * - The final segment is always the current page
 */
export function BreadCrumbComponent() {
    const path = usePathname();
    const segments = path.split("/").filter(Boolean)
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {segments.map((seg, index) => {
                    const displayedSeg = seg.split("-").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ")
                        .split("&").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" & ");
                    return (
                        <Fragment key={index}>
                            <BreadcrumbItem >
                                <BreadcrumbLink href={`/${segments.slice(0, index + 1).join("/")}`} className="text-[#003F5C]">{displayedSeg}</BreadcrumbLink>
                            </BreadcrumbItem>
                            {segments.length-1 > index && <BreadcrumbSeparator className="text-[#003F5C] text-[22px] leading-6.75 w-2">\</BreadcrumbSeparator>}
                        </Fragment>
                    )
                })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}