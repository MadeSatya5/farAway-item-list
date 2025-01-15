import "./App.css";
import Logo from "./assets/components/Logo";
import Form from "./assets/components/Form";
import Stats from "./assets/components/Stats";
import PackingList from "./assets/components/PackingLIst";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheckItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    if (items.length < 1) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItems={handleDeleteItems}
          onCheckItems={handleCheckItems}
          onClearList={handleClear}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
