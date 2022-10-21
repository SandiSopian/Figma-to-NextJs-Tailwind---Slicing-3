import "../styles/globals.css";
import { useEffect, useState } from "react";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <LightgalleryProvider>
      <Component {...pageProps} />
    </LightgalleryProvider>
  );
}

export default MyApp;
