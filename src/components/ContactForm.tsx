import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "./Button";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  ts: string;
};

type Props = { onSend?: (data: ContactPayload) => void };

export function ContactForm({ onSend }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { name, email, message, ts: new Date().toISOString() };
    console.log("[ContactForm] feedback payload:", payload);
    onSend?.(payload);
    setSent(true);
    // setName(""); setEmail(""); setMessage(""); // если хочешь очищать поля
  };

  if (sent) {
    return <p role="status">Спасибо, {name || "друг"}! Мы получили сообщение.</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__row">
        <span>Имя</span>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван" />
      </label>

      <label className="form__row">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </label>

      <label className="form__row">
        <span>Сообщение</span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Пишите что угодно…"
        />
      </label>

      <Button type="submit">Отправить</Button>
    </form>
  );
}
