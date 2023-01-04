import { useState } from "react";
import useCurrencyValue from "./useCurrencyValue"
import usePercentageValue from "./usePercentageValue"

const FinanceTypes = {
  rule: {
    necessatiesSpend: "rule.necessatiesSpend",
    discretionarySpend: "rule.discretionarySpend",
    savingsSpend: "rule.savingsSpend"
  },
  income: {
    annualSalary: "income.annualSalary",
    grossMonthlyIncome: "income.grossMonthlyIncome",
    grossWeeklyIncome: "income.grossWeeklyIncome",
    deductions: "income.deductions",
  }
}

const getRound = (n) => Math.round((100*n))/100

const DEDUCTION_TYPE = { PRE_TAX: "PRE_TAX", POST_TAX: "POST_TAX" }

// TODO: these should be requested from user
const NESSASITIES_SPEND = .50
const DISCRETIONARY_SPEND = .30
const SAVINGS_SPEND = .20
const ANNUAL_SALARY = 80000
const TAX_RATE = .25
const DEDUCTIONS = [
  {
    TYPE: DEDUCTION_TYPE.PRE_TAX,
    AMMOUNT: 300,
    IS_SAVINGS: true
  },
  {
    TYPE: DEDUCTION_TYPE.POST_TAX,
    AMMOUNT: 300,
    IS_SAVINGS: true
  }
]
const SAVINGS = [
  {
    AMMOUNT: 400
  }
]
const NESSASITIES = [
  {
    NAME: "rent",
    AMMOUNT: 2400
  },
  {
    NAME: "gas",
    AMMOUNT: 100
  }
]
const DISCRETIONARIES = [
  {
    NAME: "gym",
    AMMOUNT: 100
  },
  {
    NAME: "fun",
    AMMOUNT: 1400
  }
]

const calculatedField = {
  rawAmmount: "The un-rounded raw amount",
  rounded: "the rounded ammount",
  description: "description of this figure",
  howWeCalculate: "The formual used to calculate",
}

const setFinances = () => {}

const calculations = () => {
  // INCOME
  const grossMonthlyIncome = getRound(ANNUAL_SALARY / 12);
  const grossWeeklyIncome = getRound(ANNUAL_SALARY / 52);
  const preTaxDeductions = getRound(DEDUCTIONS.filter((d) => d.TYPE === DEDUCTION_TYPE.PRE_TAX).reduce((a,b) => a+b.AMMOUNT, 0));
  const postPreTaxDeductionsMonthlyIncome = getRound(grossMonthlyIncome - preTaxDeductions);
  const annualTaxes = getRound(ANNUAL_SALARY * TAX_RATE);
  const monthlyTaxes = getRound(grossMonthlyIncome * TAX_RATE);

  // this is only used to calcualte the 50/30/20 rule
  const postTaxPrePreTaxDeductionsIncome = getRound(grossMonthlyIncome - monthlyTaxes)

  const postTaxMonthlyIncome = getRound(postPreTaxDeductionsMonthlyIncome - monthlyTaxes);
  const postTaxDeductions = getRound(DEDUCTIONS.filter((d) => d.TYPE === DEDUCTION_TYPE.POST_TAX).reduce((a,b) => a+b.AMMOUNT, 0))
  const postPostTaxDeductionsMonthlyIncome = getRound(postTaxMonthlyIncome - postTaxDeductions);

  // SAVINGS
  let totalSavings = 0
  totalSavings += getRound(DEDUCTIONS.filter((d) => d.IS_SAVINGS).reduce((a, b) => a+b.AMMOUNT, 0));
  totalSavings += getRound(SAVINGS.reduce((a, b) => a+b.AMMOUNT, 0))
  const savingsNotInDeductions = getRound(SAVINGS.reduce((a, b) => a+b.AMMOUNT, 0))
  const savingsShouldBe = getRound(postTaxPrePreTaxDeductionsIncome * SAVINGS_SPEND)
  const needToSave = getRound(savingsShouldBe - totalSavings)

  // EXPENSES
  const necessasitiesShouldBe = getRound(postTaxPrePreTaxDeductionsIncome * NESSASITIES_SPEND)
  const totalNecessaities = getRound(NESSASITIES.reduce((a, b) => a+b.AMMOUNT, 0))
  const necessaitiesLeft = getRound(necessasitiesShouldBe - totalNecessaities)
  const discretionaryShouldBe = getRound(postTaxPrePreTaxDeductionsIncome * DISCRETIONARY_SPEND);
  const totalDiscretionaries = getRound(DISCRETIONARIES.reduce((a, b) => a+b.AMMOUNT, 0))
  const discretionaryLeft = getRound(discretionaryShouldBe - totalDiscretionaries)
  const totalExpenses = totalNecessaities + totalDiscretionaries

  // Overview
  const leftOver = getRound(postPostTaxDeductionsMonthlyIncome - savingsNotInDeductions - totalExpenses)
  const savingsPercentage = getRound(totalSavings / postTaxPrePreTaxDeductionsIncome)
  const nessaitiesPercentage = getRound(totalNecessaities / postTaxPrePreTaxDeductionsIncome)
  const discretionaryPercentage = getRound(totalDiscretionaries / postTaxPrePreTaxDeductionsIncome)

  setFinances({
    rules: {
      NESSASITIES_SPEND,
      DISCRETIONARY_SPEND,
      SAVINGS_SPEND
    },
    income: {
      ANNUAL_SALARY,
      grossMonthlyIncome,
      grossWeeklyIncome,
      DEDUCTIONS,
      preTaxDeductions,
      postPreTaxDeductionsMonthlyIncome,
      TAX_RATE,
      annualTaxes,
      monthlyTaxes,
      postTaxMonthlyIncome,
      postTaxDeductions,
      postPostTaxDeductionsMonthlyIncome
    },
    savings: {
      SAVINGS,
      totalSavings,
      savingsShouldBe,
      needToSave,
    },
    expenses: {
      NESSASITIES,
      totalNecessaities,
      necessasitiesShouldBe,
      necessaitiesLeft,
      DISCRETIONARIES,
      totalDiscretionaries,
      discretionaryShouldBe,
      discretionaryLeft,
      totalExpenses,
    },
    leftOver,
    savingsPercentage,
    nessaitiesPercentage,
    discretionaryPercentage
  })
}

const useFinances = () => {
  const [currency, setCurrency] = useState("£")

  /* Rules */
  const {
    value: nessaitiesPercentage,
    display: nessaitiesPercentageFmt,
    onChange: nessaitiesPercentageOnChange
  } = usePercentageValue();
  const {
    value: discretionaryPercentage,
    display: discretionaryPercentageFmt,
    onChange: discretionaryPercentageOnChange
  } = usePercentageValue();

  /* Income */
  const {
    value: annualSalary,
    display: annualSalaryFmt,
    onChange: annualSalaryOnChange
  } = useCurrencyValue(currency);


  return {
    currency,

    /* Rules */
    nessaitiesPercentage,
    nessaitiesPercentageFmt,
    nessaitiesPercentageOnChange,
    discretionaryPercentage,
    discretionaryPercentageFmt,
    discretionaryPercentageOnChange,

    /* Income */
    annualSalary,
    annualSalaryFmt,
    annualSalaryOnChange,
  }
}

export default useFinances;
