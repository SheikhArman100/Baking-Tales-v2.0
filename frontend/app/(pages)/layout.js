import PageReveal from "@/Components/PageReveal";
import Header from "@/Components/header/Header";
import Services from "../components/Services";

export default function PagesLayout({ children }) {
  return (
    <PageReveal>
      <Header />
      {children}
      <Services />
    </PageReveal>
  );
}
