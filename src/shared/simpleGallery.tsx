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
    description?: string; // subtítulo opcional
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
          border-radius: 14px;
          background: #121716;
          opacity: 0;
          transform: translateY(18px) scale(.97);
          animation: galleryFadeIn .75s cubic-bezier(.22,.72,.28,.99) forwards;
          will-change: transform, filter, opacity;
        }
        /* Miniaturas */
        #${galleryID}.pswp-gallery img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.45);
          transition: transform .6s cubic-bezier(.22,.72,.28,.99), filter .6s ease, box-shadow .6s ease;
          background: #0d1211;
        }
        #${galleryID}.pswp-gallery .gallery-item:hover img {
          transform: scale(1.06) translateZ(0);
          filter: brightness(1.1) saturate(1.08);
          box-shadow: 0 10px 26px -4px rgba(0,0,0,0.55);
        }
        /* Overlay sutil al hover */
        #${galleryID}.pswp-gallery .gallery-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.38));
          opacity: 0;
          transition: opacity .5s ease;
          pointer-events: none;
          border-radius: 14px;
        }
        #${galleryID}.pswp-gallery .gallery-item:hover::after { opacity: 1; }
        /* Subtítulo overlay en miniatura opcional */
        #${galleryID}.pswp-gallery .gallery-item .thumb-caption {
          position: absolute;
          left: 0; right:0; bottom:0;
          padding: .45rem .6rem .55rem;
          font-size: .65rem;
          line-height: 1.1;
          letter-spacing:.5px;
          text-transform:uppercase;
          background: linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,0));
          color:#f1f5f4;
          opacity:0;
          transform: translateY(6px);
          transition: opacity .4s ease, transform .45s ease;
          font-weight:600;
          pointer-events:none;
        }
        #${galleryID}.pswp-gallery .gallery-item:hover .thumb-caption { opacity:1; transform: translateY(0); }
        /* En el visor: no deformar */
        .pswp__img { object-fit: contain !important; }
        /* Estilos del caption dentro del modal */
        .pswp__caption, .pswp__dynamic-caption { font-size:.8rem; line-height:1.3; letter-spacing:.4px; text-transform:none; }
        .pswp__caption a { color:#D6FF57; }
        /* Reduced motion accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          #${galleryID}.pswp-gallery .gallery-item { animation: none; opacity:1; transform:none; }
          #${galleryID}.pswp-gallery img { transition: none; }
        }
        @keyframes galleryFadeIn {
          0% { opacity:0; transform: translateY(18px) scale(.97); }
          55% { opacity:1; }
          100% { opacity:1; transform: translateY(0) scale(1); }
        }
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
                caption={image.description}
              >
                {({ ref, open }) => (
                  <div
                    className="gallery-item"
                    onClick={open}
                    role="button"
                    tabIndex={0}
                    style={{ animationDelay: `${index * 60}ms` }}
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
                      alt={image.description || "foto " + (index + 1)}
                      loading="lazy"
                    />
                    {image.description && (
                      <div className="thumb-caption">{image.description}</div>
                    )}
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
