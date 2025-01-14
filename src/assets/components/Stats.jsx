export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 😁💕</em>
      </footer>
    );

  const totalItems = items.length;
  //   const totalCheckedItems = items.reduce(
  //     (acc, item) => (item.packed ? (acc += 1) : acc),
  //     0
  //   );

  const totalCheckedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalCheckedItems / totalItems) * 100);

  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got Everything! Ready to go ✈️💦"
            : `You have ${totalItems} item on your list, and you already packed
            ${totalCheckedItems} (${percentage}%)`}
        </em>
      </footer>
    </>
  );
}
