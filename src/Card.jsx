import { useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 10 ? true : false;
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton
          buttonClass={"count-btn"}
          iconComponent={<MinusIcon className="count-btn-icon" />}
          setCount={setCount}
          type="minus"
          locked={locked}
        />
        <CountButton
          buttonClass={"count-btn"}
          iconComponent={<PlusIcon className="count-btn-icon" />}
          setCount={setCount}
          type="plus"
          locked={locked}
        />
      </ButtonContainer>
    </div>
  );
}
