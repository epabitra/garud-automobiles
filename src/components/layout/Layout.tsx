import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export function Layout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
