import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Nav />
      <div id="site-content">
        {children}
        <Footer />
      </div>
    </>
  );
}
