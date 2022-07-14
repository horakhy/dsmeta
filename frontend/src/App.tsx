import { Header } from "./components/header/header";
import { NotificationButton } from "./components/notification-button/notification-button";
import { SalesCard } from "./components/sales-card/sales-card";

function App() {
  return (
    <>
      <Header />
     <main>
      <section id="sales">
        <div className="dsmeta-container">
        <SalesCard />
        </div>
        </section>
    </main>
    </>
  )
}

export default App;
