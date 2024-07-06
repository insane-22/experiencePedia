import Footer from "./Footer";
import Header from "./Header";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16 flex-1 w-full mx-auto md:overflow-hidden">
        <div className="h-full w-full flex md:flex-row md:overflow-hidden">
          <div className="flex-grow flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
