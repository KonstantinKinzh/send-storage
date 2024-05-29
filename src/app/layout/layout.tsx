// Modules react-router
import { Outlet } from "react-router-dom"

// Components
import { TopPanel } from "@/widgets/top-panel/ui/top-panel";
import { LeftPanel } from "@/widgets/left-panel/ui/left-panel/left-panel";

// Styles
import "./layout.scss";

export default function Layout() {
    return (
        <div className="layout">
            <TopPanel />
            <LeftPanel />
            <Outlet />
        </div>
    );
};