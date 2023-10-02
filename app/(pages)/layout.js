import PageReveal from "@/Components/PageReveal";
import Header from "@/Components/header/Header";

export default function PagesLayout({ children }) {
  return (
    <div className="bg-bgColor">
      <Header />

      {children}
    </div>
  );
}
