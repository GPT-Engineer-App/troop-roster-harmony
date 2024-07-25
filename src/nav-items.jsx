import { BarChart3, ClipboardList, Home, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import Reports from "./pages/Reports.jsx";
import RosterPage from "./pages/RosterPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Roster",
    to: "/roster",
    icon: <ClipboardList className="h-4 w-4" />,
    page: <RosterPage />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <BarChart3 className="h-4 w-4" />,
    page: <Reports />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <SettingsPage />,
  },
];