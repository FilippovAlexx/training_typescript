import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { ContactForm } from "./components/ContactForm";
import { Contacts } from "./components/Contacts";
import { FeedbackList } from "./components/FeedbackList";
import type { Feedback } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [history, setHistory] = useLocalStorage<Feedback[]>("feedback", []);

  const addFeedback = (f: Omit<Feedback, "id">) => {
    const item: Feedback = { id: crypto.randomUUID(), ...f };
    setHistory((prev) => [item, ...prev]);
  };

  const clearFeedback = () => setHistory([]);

  return (
    <>
      <Header />
      <main className="container stack-lg">
        <section className="grid">
          <Card
            title="Быстрый старт"
            footer={<Button onClick={() => alert("Привет 👋")}>Нажми</Button>}
          >
            <p>
              Это лёгкая верстка на <b>React + TypeScript</b> с парой
              переиспользуемых компонентов.
            </p>
            <ul>
              <li>Кнопка с вариантами</li>
              <li>Карточка</li>
              <li>Счётчик</li>
              <li>Небольшая форма</li>
              <li>История сообщений (localStorage)</li>
              <li>Светлая/тёмная темы</li>
            </ul>
          </Card>

          <Card title="Счётчик">
            <Counter />
          </Card>

          <Card title="Форма обратной связи">
            <ContactForm onSend={(p) => addFeedback(p)} />
          </Card>

          <Card title="История сообщений">
            <FeedbackList items={history} onClear={clearFeedback} />
          </Card>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Пробую</div>
      </footer>

      <Contacts />
    </>
  );
}
