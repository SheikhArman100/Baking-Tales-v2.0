import Navbar from "@/Components/dashboard/Navbar";
import Sidebar from "@/Components/dashboard/Sidebar";

export default function PagesLayout({ children }) {
  return (
    <main className="font2 h-screen w-full flex  [background:hsl(0,0%,5%)] text-white">
      <Sidebar />
      <section className="flex-1">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
