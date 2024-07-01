import React, { useEffect, useMemo } from 'react'
import { useReduxDispatch } from '../redux'
import { get, update } from '../redux/surveys'
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import 'survey-creator-core/survey-creator-core.css'
import { setLicenseKey } from "survey-core";

import { surveyLocalization } from 'survey-core';


setLicenseKey(
    "ZmMwMjUwOWUtMWZmOS00MjA0LWJkNWMtZDdkMjNiZmM4NjVlOzE9MjAyNS0wNy0wMQ=="
);
//

// Get the English locale. To get the default locale, pass an empty string.
const engLocale = surveyLocalization.locales["en"];
// Override individual translations
engLocale.pagePrevText = "Zrück";
engLocale.pageNextText = "Weiter";


const Editor = (params: { id: string }): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const creator = useMemo(() => {
        const options = {
            showLogicTab: true,
            showThemeTab: true,
            showTranslationTab: true
        };
        return new SurveyCreator(options);
    }, []);
    creator.isAutoSave = true;
    creator.saveSurveyFunc = (saveNo: number, callback: (no: number, success: boolean) => void) => {
        dispatch(update({ id: params.id, json: creator.JSON, text: creator.text }))
        callback(saveNo, true);
    }

    useEffect(() => {
        (async () => {
            const surveyAction = await dispatch(get(params.id))
            if(typeof surveyAction.payload.json === 'object') {
                creator.JSON = surveyAction.payload.json
            } else {
                creator.text = surveyAction.payload.json
            }
        })()
    }, [dispatch, creator, params.id])

    return (<>
            <SurveyCreatorComponent creator={creator}/>
        </>)
}

export default Editor