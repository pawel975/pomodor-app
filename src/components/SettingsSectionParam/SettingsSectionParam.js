import {useRef, useState } from "react";
import { formatParam } from "../../helpers";
import './SettingsSectionParam.scss';

const SettingsSectionParam = ({paramId, paramName, min, max, paramValue, type, globalStatePropName, setTempStateToSaveToGlobal}) => {

    const [currentParamValue, setCurrentParamValue] = useState(paramValue)
    const sliderRef = useRef();

    const handleParamValueChange = (e) => {
        setCurrentParamValue(
            isNaN(Number(e.target.value))? e.target.value : Number(e.target.value) 
        )
        const paramValueToSaveToState = sliderRef.current.value
        setTempStateToSaveToGlobal(prevState => ({
            ...prevState,
            [globalStatePropName]: 
                type === "time" ? paramValueToSaveToState * 60 : paramValueToSaveToState, // convert from seconds to minutes if value is time
        }))
    }

    const calculateSliderBgPosition = (currentParamValue) => {

        const verticalBgPosition = Math.floor(((currentParamValue-min)/(max-min))*100);
        const bgPostition = `${verticalBgPosition}% 100%`
        
        return bgPostition;
    }

    return (
        <div 
            className='settings-section__param-container'
            data-testid="settings-section__param-container"    
        >
            <label>{paramName}
                <span
                    id={`${paramId}__formatted-value-container`}
                    data-testid={`${paramId}__formatted-value-container`}
                >
                    {formatParam(currentParamValue, type)}
                </span>
            </label>
            <input 
                ref={sliderRef}
                id={paramId} 
                data-testid={paramId}
                type="range" 
                style={{backgroundSize: calculateSliderBgPosition(currentParamValue)}}
                min={min} 
                max={max} 
                value={Math.floor(currentParamValue)} 
                className='settings-section__slider'
                onChange={(e) => handleParamValueChange(e)}
            />
        </div>
    )
}

export default SettingsSectionParam;