import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { sidebarlinks } from "@/constants/sidebarLinks";
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react";
import * as React from "react";
import { NavMain } from "./nav-main";

const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: sidebarlinks,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props} variant="floating">
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <div className="flex items-center justify-center pt-8 pb-6">
          {/* {state !== "collapsed" ? (
            <img src={logo} alt="Freightquip Logo" />
          ) : (
            <img src={logo} alt="Freightquip Logo" width={40} height={40} />
          )} */}
          {state !== "collapsed" && (
            <h1 className="text-2xl uppercase">Demo App</h1>
          )}{" "}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser /> */}</SidebarFooter>
    </Sidebar>
  );
}
