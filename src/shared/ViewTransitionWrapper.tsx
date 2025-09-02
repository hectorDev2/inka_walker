import React from "react";

type Props = { name?: string; children: React.ReactNode };

// Accedemos de forma segura a la API experimental si existe en la exportación de React
const ReactAny = React as unknown as { unstable_ViewTransition?: unknown };
const UnstableViewTransition = ReactAny.unstable_ViewTransition;

function FallbackViewTransition({ name, children }: Props) {
  const dataAttr = name
    ? ({
        "data-view-transition-name": name,
      } as React.HTMLAttributes<HTMLDivElement>)
    : {};
  return <div {...(dataAttr as any)}>{children}</div>;
}

// Si la API experimental está disponible y es una función, la usamos; si no, usamos el fallback
const ViewTransition: React.FC<Props> =
  UnstableViewTransition && typeof UnstableViewTransition === "function"
    ? (UnstableViewTransition as React.FC<Props>)
    : FallbackViewTransition;

export default ViewTransition;
