import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { ContactForm } from "./components/ContactForm";
import { Contacts } from "./components/Contacts";

export default function App() {
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
            </ul>
          </Card>

          <Card title="Счётчик">
            <Counter />
          </Card>

          <Card title="Форма обратной связи">
            <ContactForm />
          </Card>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Пробую
        </div>
      </footer>

      <Contacts />
    </>
  );
}
