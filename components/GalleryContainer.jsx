export default function GalleryContainer({ children }) {
  return <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 px-4 justify-items-center ">{children}</div>;
}
