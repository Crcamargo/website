import { useState } from "react";

const useCurrencyValue = (currency = "$") => {
  const [value, setValue] = useState(0);
  const [display, setDisplay] = useState("");

  const format = (num) => {
    let fmt = ""
    let digits = Math.max(Math.log10(num), 1)

    for (let i = 0; i < digits; i++) {
      let flatten = num % (10**(i+1))
      let placeValue = flatten - (num % (10**i))
      let digit = placeValue/(10**i)
      let sep = i % 3 == 0 && i > 0 ? "," : ""
      fmt = `${digit}` + sep + fmt
    }

    return `${currency}${fmt}`
  }

  const onChange = (newValue) => {
    const cleaned = newValue.trim().replace(currency, "").replaceAll(",", "")

    // No value or 0's
    if (!cleaned || cleaned == "00000") {
      setValue(0)
      setDisplay("")
      return
    }

    const num = Number(cleaned);

    // New value is not a number
    if (!num) {
      return
    }

    const fmt = format(num)

    setValue(num)
    setDisplay(fmt)
  }

  return { value, display, onChange }
}

export default useCurrencyValue;
