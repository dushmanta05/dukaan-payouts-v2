import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main>
      {/* TopBar */}
      <div className="h-[64px] lg:pl-[224px] fixed bg-white inset-y-0 w-full z-50 border-b border-light">
        <TopBar />
      </div>

      {/* SideBar */}
      <div>
        <SideBar />
      </div>

      {/* Dashboard */}
      <div className="lg:pl-[224px] pt-[64px] h-full">
        <Dashboard />
      </div>
    </main>
  );
}
