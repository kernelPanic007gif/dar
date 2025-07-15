import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
