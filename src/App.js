import { useState } from "react";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}
