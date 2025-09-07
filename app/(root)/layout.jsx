import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({
  children,
}) {
  return (
    <div className="flex flex-col h-screen bg-background transition-colors duration-300">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
