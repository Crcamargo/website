import { useState } from "react";

const usePercentageValue = (symbol = "%") => {
  const [value, setValue] = useState(0.0);
  const [display, setDisplay] = useState("");

  const onChange = (newValue) => {
    const cleaned = newValue.trim().replace(symbol, "")

    console.log(cleaned)

    if (!cleaned || cleaned == "0") {
      setValue(0)
      setDisplay("")
    }

    const num = Number(cleaned);

    if (!num) {
      return
    }

    const fmt = `${num}${symbol}`

    setValue(num)
    setDisplay(fmt)
  }

  return { value, display, onChange }
}

export default usePercentageValue;
