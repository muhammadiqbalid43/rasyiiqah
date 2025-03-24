import React, { PropsWithChildren } from "react";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import AppSidebar from "./app-sidebar";
import SiteHeader from "./site-header";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-col flex-1">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 px-6 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
