import SideNavbar from "../components/SideNavbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="overflow-y-scroll">
        <div className="block md:fixed">
          <SideNavbar />
        </div>

        <div className="flex flex-row sm:flex-none absolute inset-x-0 top-0 md:-top-12 lg:-top-16 md:left-60 lg:left-54 xl:left-60 bg-transparent">{children}</div>
      </div>
    </>
  );
}
