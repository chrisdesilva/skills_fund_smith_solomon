import logo from "../images/logo_ss.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "9.49%",
  interestRate60: "10.99%",
  APRRange36: "12.21 - 12.87%",
  APRRange60: "XX.XX - XX.XX%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "the Weekday Program",
      APR36: "11.17%",
      financeCharge36: "$928.15",
      IOPayment36: "$32.90",
      FullMonthlyPayment36: "$133.24",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      IOPayment60: "$XX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$4,000",
      LoanExampleOFeeAmt: "$160",
      LoanExampleAmtPlusOFee: "$4,160",
      programLength: "2", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "the Weekend & Weeknight Program",
      APR36: "12.87%",
      financeCharge36: "$796.55",
      FullMonthlyPayment36: "$133.24",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$4,000",
      LoanExampleOFeeAmt: "$160",
      LoanExampleAmtPlusOFee: "$4,160",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: !false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: !true, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: !true, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$5,000",
  interestRate36: "9.49%",
  interestRate60: "10.99%",
  APR36: "12.21%",
  APR60: "XX.XX - XX.XX%",
  IOPayment36: "$41.52",
  IOPayment60: "$95.25",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "each program",
      maxAmount: "$4,500",
      col: true,
      colAmount: "$500",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Smith & Solomon"

export const schoolURL = "https://smithsolomon.com/" // update with url of school's website

export const skfURL = "https://smithsolomon.skills.fund/" // update with Skills Fund url

export const headline = "Change Your Career at Smith & Solomon" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to provide students with a foundation for a career as a commercial driver. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text: "Choose between the Weekday and Weekend & Weeknight programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "smithsolomon_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "be3238ce-00bd-4530-8644-2161b2359462" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_smithsolomon_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 5000
export const placeholder = "$5,000"
export const interestRates = {
  ir36: 9.49,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Weekday Program",
    url: "https://my.skills.fund/application?lenderCode=SASSFTI19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 5000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 5,
        apr36: 12.21,
        apr60: 12.51,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 5000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 5,
            apr36: 12.21,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Weekend & Weeknight Program",
    url: "https://my.skills.fund/application?lenderCode=SASSPT19",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 5000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        k: 5,
      },
      "Immediate Repayment": {
        apr36: 12.87,
      },
    },
    defaultLoanType: "Immediate Repayment", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Immediate Repayment"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          // match loanInfo to Program 2 loanInfo above
          maxLoanAmt: 5000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 5,
          },
          "Immediate Repayment": {
            apr36: 12.87,
          },
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $4,500 for tuition and up to $500 for cost of living for either program."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
