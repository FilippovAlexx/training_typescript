import type { Feedback } from "../types";

type Props = { items: Feedback[]; onClear?: () => void };

export function FeedbackList({ items, onClear }: Props) {
  if (!items.length) return <p>Пока пусто. Оставьте первое сообщение 👇</p>;

  return (
    <div className="feedback">
      <div className="feedback__head">
        <strong>Всего: {items.length}</strong>
        {onClear && (
          <button className="btn btn--ghost" onClick={onClear}>Очистить</button>
        )}
      </div>
      <ul className="feedback__list">
        {items.map((f) => (
          <li key={f.id} className="feedback__item">
            <div className="feedback__row">
              <b>{f.name || "Аноним"}</b> · <span className="muted">{new Date(f.ts).toLocaleString()}</span>
            </div>
            <div className="muted">{f.email}</div>
            <p>{f.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
