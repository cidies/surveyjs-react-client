export interface ISurveyDefinition {
    id: string,
    name: string,
    json: any
}

export const defaultJSON = {
    id: '',
    name: 'New Survey',
    json: {
        elements: [
            { type: 'radiogroup', name: 'question1', choices: [ '1', '2', '3' ] }
        ]
    }
}

export const survey1Json = {
  id: "1",
  name: "Product Feedback Survey",
  json: {
    pages: [{
      elements: [{
        type: "matrix",
        name: "Quality",
        title: "Please indicate if you agree or disagree with the following statements",
        columns: [{
          value: 1,
          text: "Strongly disagree"
        }, {
          value: 2,
          text: "Disagree"
        }, {
          value: 3,
          text: "Neutral"
        }, {
          value: 4,
          text: "Agree"
        }, {
          value: 5,
          text: "Strongly agree"
        }],
        rows: [{
          value: "affordable",
          text: "Product is affordable"
        }, {
          value: "does what it claims",
          text: "Product does what it claims"
        }, {
          value: "better then others",
          text: "Product is better than other products on the market"
        }, {
          value: "easy to use",
          text: "Product is easy to use"
        }]
      }, {
        type: "rating",
        name: "satisfaction",
        title: "How satisfied are you with the product?",
        mininumRateDescription: "Not satisfied",
        maximumRateDescription: "Completely satisfied"
      }, {
        type: "rating",
        name: "recommend friends",
        visibleIf: "{satisfaction} > 3",
        title: "How likely are you to recommend the product to a friend or colleague?",
        mininumRateDescription: "Won't recommend",
        maximumRateDescription: "Will recommend"
      }, {
        type: "comment",
        name: "suggestions",
        title: "What would make you more satisfied with the product?"
      }]
    }, {
      elements: [{
        type: "radiogroup",
        name: "price to competitors",
        title: "Compared to our competitors, do you feel the product is",
        choices: [
          "Less expensive",
          "Priced about the same",
          "More expensive",
          "Not sure"
        ]
      }, {
        type: "radiogroup",
        name: "price",
        title: "Do you feel our current price is merited by our product?",
        choices: [
          "correct|Yes, the price is about right",
          "low|No, the price is too low",
          "high|No, the price is too high"
        ]
      }, {
        type: "multipletext",
        name: "pricelimit",
        title: "What is the... ",
        items: [{
          name: "mostamount",
          title: "Most amount you would pay for a product like ours"
        }, {
          name: "leastamount",
          title: "The least amount you would feel comfortable paying"
        }]
      }]
    }, {
      elements: [{
        type: "text",
        name: "email",
        title: 'Thank you for taking our survey. Please enter your email address and press the "Submit" button.'
      }]
    }]
  }
};

export const survey1Results = [
    {'Quality':{'affordable':'5','better then others':'5','does what it claims':'5','easy to use':'5'},'satisfaction':5,'recommend friends':5,'suggestions':'I am happy!','price to competitors':'Not sure','price':'low','pricelimit':{'mostamount':'100','leastamount':'100'}},
    {'Quality':{'affordable':'3','does what it claims':'2','better then others':'2','easy to use':'3'},'satisfaction':3,'suggestions':'better support','price to competitors':'Not sure','price':'high','pricelimit':{'mostamount':'60','leastamount':'10'}}
];


// const surveyJson = {
//   "elements": [{
//     "type": "text",
//     "name": "firstname"
//     "title": {
//       "default": "Enter your first name",
//       "de": "Geben Sie Ihren Vornamen ein",
//       "fr": "Entrez votre prénom"
//     }
//   }]
// };
// To apply your translations, set the current locale:

// survey.locale = "de";


export const survey2Json = {
  id: "2",
  name: "ikt minimal standard survey",
  json:  {
    "title": "Aviation Cybersecurity",
    "description": "Based on the IKT Minimal Standard",
    "pages": [
     {
      "name": "Asset Management (ID.AM)",
      "elements": [
       {
        "type": "rating",
        "name": "ID.AM-1",
        "title": "ID.AM-1: Draw up an inventory-taking process which ensures that you have a complete inventory of all your ICT assets at all times.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.AM-3",
        "title": "ID.AM-3: Catalogue all of your internal communication and data flows.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.AM-2",
        "title": "ID.AM-2: Produce an inventory of all of the software platforms/licences and applications within your organisation.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.AM-4",
        "title": "ID.AM-4: Catalogue all external ICT systems that are relevant to your organisation.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.AM-5",
        "title": "ID.AM-5: Resources (e.g., hardware, devices, data, time, personnel, and software) are prioritized based on their classification, criticality, and business value.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.AM-6",
        "title": "ID.AM-6: Cybersecurity roles and responsibilities for the entire workforce and third-party stakeholders (e.g., suppliers, customers, partners) are established.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       }
      ],
      "title": "Asset Management (ID.AM)",
      "description": "The data, personnel, devices, systems, and facilities that enable the organization to achieve business purposes are identified and managed consistent with their relative importance to business objectives and the organization's risk strategy."
     },
     {
      "name": "page1",
      "elements": [
       {
        "type": "rating",
        "name": "ID.BE-1",
        "title": "ID.BE-1: Identify, document and communicate the exact role of your business within the (critical) supply chain.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.BE-2",
        "title": "ID.BE-2: The importance of the organisation as a critical infrastructure operator, and its position within the critical sector, is identified and communicated.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.BE-3",
        "title": "ID.BE-3: Objectives, tasks and activities within the organisation are prioritised and rated.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.BE-4",
        "title": "ID.BE-4: Dependencies and critical functions for delivery of critical services are established.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.BE-5",
        "title": "ID.BE-5: Resilience requirements to support delivery of critical services are established for all operating states (e.g. under duress/attack, during recovery, normal operations).",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       }
      ],
      "title": "Business Environment (ID.BE)",
      "description": "The business objectives, tasks and activities are rated and prioritised. This information is used as a basis for allocating responsibilities."
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "rating",
        "name": "ID.GV-1",
        "title": "ID.GV-1: Organizational cybersecurity policy is established and communicated.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.GV-2",
        "title": "ID.GV-2: Information security roles and responsibilities are coordinated with internal roles (e.g. those in risk management) and external partners.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.GV-3",
        "title": "ID.GV-3: Ensure that your organisation complies with all statutory and regulatory cybersecurity requirements, including those applicable to data protection.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.GV-4",
        "title": "ID.GV-4: Ensure that cybersecurity risks are embedded in business-wide risk management structures.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       }
      ],
      "title": "Governance (ID.GV)",
      "description": "Governance determines responsibilities, monitors, and ensures compliance with regulatory, legal and operational requirements from the business environment."
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "rating",
        "name": "ID.RA-1",
        "title": "ID.RA-1: Identify the (technical) vulnerabilities of your assets, and document them.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.RA-2",
        "title": "ID.RA-2: Share intelligence regularly in fora and other bodies to stay up to date about cybersecurity threats.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.RA-3",
        "title": "ID.RA-3: Identify and document internal and external cybersecurity threats.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.RA-4",
        "title": "ID.RA-4: Identify the possible business impacts of cybersecurity threats, and calculate the probability of their occurring.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.RA-5",
        "title": "ID.RA-5: Rate the risks to your organisation based on threats, vulnerabilities, impacts (on business activity) and probabilities.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       },
       {
        "type": "rating",
        "name": "ID.RA-6",
        "title": "ID.RA-6: Define possible immediate responses should a risk occur, and prioritise these measures.",
        "isRequired": false,
        "rateCount": 6,
        "rateMin": 0,
        "minRateDescription": "(Incomplete)",
        "maxRateDescription": "(Complete)"
       }
      ],
      "title": "Risk Assessment (ID.RA)",
      "description": "The organisation understands the effects of cybersecurity risks on business operations, assets and individuals, including reputational risks."
     }
    ]
   }
















  
};

export const survey2Results = [
    {'member_array_employer':[{}],'partner_array_employer':[{}],'maritalstatus_c':'Married','member_receives_income_from_employment':'0','partner_receives_income_from_employment':'0'},
    {'member_array_employer':[{}],'partner_array_employer':[{}],'maritalstatus_c':'Single','member_receives_income_from_employment':'1','member_type_of_employment':['Self employment'],'member_seasonal_intermittent_or_contract_work':'0'}
];

export var apiBaseAddress = '/api';