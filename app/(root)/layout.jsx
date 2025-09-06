// import Footer from "@/components/footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
