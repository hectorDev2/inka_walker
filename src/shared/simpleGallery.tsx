import "photoswipe/style.css";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import React, { useEffect, useState } from "react";

// Calcula dimensiones naturales para mantener la proporción real en el modal
// aunque las props traigan tamaños genéricos.

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

  // Estado con dimensiones (inicialmente las provistas, luego las naturales)
  const [naturalSizes, setNaturalSizes] = useState(() =>
    props.images.map((img) => ({ width: img.width, height: img.height }))
  );

  useEffect(() => {
    let cancelled = false;
    props.images.forEach((img, idx) => {
      const im = new Image();
      im.src = img.largeURL;
      if (im.complete) {
        if (!cancelled && im.naturalWidth && im.naturalHeight) {
          setNaturalSizes((prev) => {
            if (
              prev[idx] &&
              prev[idx].width === im.naturalWidth &&
              prev[idx].height === im.naturalHeight
            )
              return prev;
            const clone = [...prev];
            clone[idx] = { width: im.naturalWidth, height: im.naturalHeight };
            return clone;
          });
        }
      } else {
        im.onload = () => {
          if (cancelled) return;
          setNaturalSizes((prev) => {
            const clone = [...prev];
            clone[idx] = { width: im.naturalWidth, height: im.naturalHeight };
            return clone;
          });
        };
      }
    });
    return () => {
      cancelled = true;
    };
  }, [props.images]);

  return (
    <>
      <style>{`
        /* Masonry tipo Pinterest usando CSS columns */
        #${galleryID}.pswp-gallery {
          --masonry-gap: 1rem;
          -webkit-column-gap: var(--masonry-gap);
          column-gap: var(--masonry-gap);
        }

        /* Responsive: 1 / 2 / 3 columnas */
        @media (min-width: 640px) { #${galleryID}.pswp-gallery { column-count: 2; } }
        @media (min-width: 1024px) { #${galleryID}.pswp-gallery { column-count: 3; } }

        /* Cada item dentro de las columnas */
        #${galleryID}.pswp-gallery .gallery-item {
          display: inline-block;
          width: 100%;
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          margin: 0 0 var(--masonry-gap);
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          background: #121716;
        }

        /* Miniaturas */
        #${galleryID}.pswp-gallery img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.45);
          transition: transform .5s ease, filter .5s ease;
          background: #0d1211;
        }

        #${galleryID}.pswp-gallery .gallery-item:hover img {
          transform: scale(1.04);
          filter: brightness(1.08) saturate(1.05);
        }

        /* Overlay sutil al hover */
        #${galleryID}.pswp-gallery .gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35));
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
          border-radius: 10px;
        }
        #${galleryID}.pswp-gallery .gallery-item:hover::after { opacity: 1; }

        /* En el visor: no deformar */
        .pswp__img { object-fit: contain !important; }

        /* Evitar outline que mueva layout */
        #${galleryID}.pswp-gallery .gallery-item:focus { outline: none; }
      `}</style>

      <div className="pswp-gallery" id={galleryID}>
        <Gallery>
          {props.images.map((image, index) => {
            const size = naturalSizes[index] || {
              width: image.width,
              height: image.height,
            };
            return (
              <Item
                key={index}
                original={image.largeURL}
                width={size.width}
                height={size.height}
              >
                {({ ref, open }) => (
                  <div
                    className="gallery-item"
                    onClick={open}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        (
                          open as unknown as (ev?: React.SyntheticEvent) => void
                        )(e);
                      }
                    }}
                  >
                    <img
                      ref={
                        ref as unknown as (el: HTMLImageElement | null) => void
                      }
                      src={image.thumbnailURL}
                      alt={"foto " + (index + 1)}
                      loading="lazy"
                    />
                  </div>
                )}
              </Item>
            );
          })}
        </Gallery>
      </div>
    </>
  );
}
