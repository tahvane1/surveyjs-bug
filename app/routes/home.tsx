
'use client'

import type { Route } from "./+types/home";


import { useCallback } from 'react';
import 'survey-core/survey-core.css';
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

// const SURVEY_ID = 1;

const surveyJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "question1",
          "choices": [
            "Item 1",
            "Item 2",
            "Item 3"
          ]
        }
      ]
    }
  ]
};
;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const model = new Model(surveyJson)
  return <Survey model={model} />
}
