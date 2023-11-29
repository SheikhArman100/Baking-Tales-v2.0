import Navbar from "@/Components/dashboard/Navbar";
import Sidebar from "@/Components/dashboard/Sidebar";

export default function PagesLayout({ children }) {
  return (
    <main className="font2 min-h-screen md:h-screen md:overflow-hidden w-full flex  [background:hsl(0,0%,5%)] text-white">
      <Sidebar />
      <section className="flex-1 overflow-auto">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
