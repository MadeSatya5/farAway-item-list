import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onCheckItems }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onCheckItems={onCheckItems}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
