export default function CountButton({
  buttonClass,
  iconComponent,
  setCount,
  type,
  locked,
}) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "plus") {
        return prev + 1 > 10 ? 10 : prev + 1; //upper limit of increment operation is set to 10
      } else {
        return prev - 1 < 0 ? 0 : prev - 1; //lower limit of decerement operation is set to 0
      }
    });
  };

  return (
    <button className={buttonClass} onClick={handleClick} disabled={locked}>
      {iconComponent}
    </button>
  );
}
