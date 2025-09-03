// src/components/Card.tsx
import type { PropsWithChildren, ReactNode } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  footer?: ReactNode;
}>;

export function Card({ title, footer, children }: CardProps) {
  return (
    <article className="card">
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </article>
  );
}
