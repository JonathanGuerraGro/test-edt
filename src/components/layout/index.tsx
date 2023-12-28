import Footer from "./footer";
import { LayoutProps } from "@/interfaces/layout";
import { useIsFetching, useIsMutating } from "react-query";
import MelpHeader from "./header";

const Layout = ({ children }: LayoutProps) => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;

  return (
    <>
      <main>
        <MelpHeader />
        <section>{children}</section>
        <Footer />
      </main>
      {isLoading && (
        <div className="bg-spinner">
          <div className="spinner "></div>
          <p className="text-loading">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Layout;
