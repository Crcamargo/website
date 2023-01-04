import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./finance.module.css";
import useFinances from "../../../hooks/useFinances"
import { ArrowRight } from "react-feather";

const Income = ({ finances }) => {
  const {
    currency,
    annualSalary,
    annualSalaryFmt,
    annualSalaryOnChange,
  } = finances

  return <div>
    <h2>Income</h2>
    <input
      className={styles.input}
      placeHolder={`${currency}xxx,xxx`}
      onChange={(e) => annualSalaryOnChange(e.target.value)}
      value={annualSalaryFmt} />
  </div>
}

const Rules = ({ finances }) => {
  const {
    nessaitiesPercentage,
    nessaitiesPercentageFmt,
    nessaitiesPercentageOnChange,
    discretionaryPercentage,
    discretionaryPercentageFmt,
    discretionaryPercentageOnChange,
  } = finances

  return <div>
    <h2>Nessaities</h2>
    <input
      className={styles.input}
      placeHolder={`xx%`}
      onChange={(e) => nessaitiesPercentageOnChange(e.target.value)}
      value={nessaitiesPercentageFmt} />
  </div>
}


const Hello = () => {
  const components = [
    <div>
      <p className={styles.xl}>Hello and welcome to my simple budget app.</p>
      <p className={styles.xl}>
       This app was created to help people design a simple, easy-to-follow budget.
      </p>
    </div>,
    <div>
      <p className={styles.xl}>This budgetting tool follows two basic principals:</p>
      <ol className={styles.lg}>
        <li>The 50/30/20 rule</li>
        <li>YNAB's "Give Every Dollar a Job"</li>
      </ol>
    </div>,
    <div>
      <p className={styles.xl}>Your data and privacy</p>
      <p className={styles.lg} style={{color: "red"}}>WIP</p>
    </div>,
    <div>
      <p className={styles.xl}>If this all sounds good, then we can begin!</p>
  </div>
  ]
  const [curr, setCurr] = useState(0);
  const next = () => setCurr((curr + 1) % components.length)

  const nextButton = curr == components.length -1 ?
  <button className={styles.button}>Lets Go!</button> : <button className={styles.button} onClick={next}>
  Next&nbsp;<ArrowRight size={24}/>
</button>

  return <div>
    {components[curr]}
    <div className={styles.nextContainer}>
    {nextButton}
    </div>
  </div>
}


const Finance = () => {
  const finances = useFinances();
  const hello = [
    "Hello and welcome to my simple finance calculator app.",
    "I designed this app to help people design a simple, easy-to-follow budget.",
    "It follows two principles:",
    "1. The 50/30/20 rule",
    "2. YNAB's \"Give Every Dollar a Job\" rule",
    "Your data and privacy",
    "let's get started"
  ]

  return (
    <div className={styles.container}>
      <div className={styles.apps}>
        <Hello />
        {/* <Income finances={finances} />
        <Rules finances={finances} /> */}
      </div>
    </div>
  );
};

export default Finance;
