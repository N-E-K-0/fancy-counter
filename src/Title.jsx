export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Limit! Hit reset button.</span> : "Fancy Counter"}
    </h1>
  );
}
