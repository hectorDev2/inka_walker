import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import ViewTransition from "../shared/ViewTransitionWrapper";

export function SimpleGallery(props: {
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
  }[];
  galleryID?: string;
}) {
  const galleryID = props.galleryID ?? "simple-gallery";

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [galleryID]);

  return (
    <>
      <style>{`
        /* Masonry tipo Pinterest usando CSS columns */
        #${galleryID}.pswp-gallery {
          -webkit-column-gap: 1rem;
          column-gap: 1rem;
        }

        /* Responsive: 1 / 2 / 3 columnas */
        @media (min-width: 640px) { #${galleryID}.pswp-gallery { column-count: 2; } }
        @media (min-width: 1024px) { #${galleryID}.pswp-gallery { column-count: 3; } }

        /* Cada item evita partida entre columnas y mantiene el ancho de la columna */
        #${galleryID}.pswp-gallery a {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          margin-bottom: 1rem;
        }

        /* Miniaturas: respetar la proporción natural, añadir sombra y borde redondeado */
        #${galleryID}.pswp-gallery img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.35);
        }

        /* Evitar enfoque que altere el layout */
        #${galleryID}.pswp-gallery a:focus { outline: none; }
      `}</style>

      <div className="pswp-gallery" id={galleryID}>
        {props.images.map((image, index) => {
          if (index == 0) {
            return (
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={galleryID + "-" + index}
                target="_blank"
                rel="noreferrer"
              >
                <ViewTransition name={`place-image-machu-picchu-full-day`}>
                  <img src={image.thumbnailURL} alt="" />
                </ViewTransition>
              </a>
            );
          }
          return (
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              key={galleryID + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image.thumbnailURL} alt="" />
            </a>
          );
        })}
      </div>
    </>
  );
}
