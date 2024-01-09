import SideBar from "@/components/SIdeBar";
import TopBar from "@/components/TopBar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <main className="">
      <div className="h-[64px] md:pl-[224px] fixed bg-white inset-y-0 w-full z-50 border-b border-light">
        <TopBar />
      </div>
      <div className="hidden md:flex h-[100vh] w-[224px] bg-primary fixed z-50">
        <SideBar />
      </div>
      <div className="md:pl-[224px] pt-[64px] h-full">
        <Dashboard />
      </div>
    </main>
  );
}
