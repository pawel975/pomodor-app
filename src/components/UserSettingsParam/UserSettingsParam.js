import {useRef, useState } from "react";
import { formatParam } from "../../helpers";
import './UserSettingsParam.scss';

const UserSettingsParam = ({paramId, paramName, min, max, paramValue, type, globalStatePropName, setTempStateToSaveToGlobal}) => {

    const [currentParamValue, setCurrentParamValue] = useState(paramValue)
    const sliderRef = useRef();

    const handleParamValueChange = (e) => {
        setCurrentParamValue(e.target.value)
        const paramValueToSaveToState = sliderRef.current.value
        setTempStateToSaveToGlobal(prevState => ({
            ...prevState,
            [globalStatePropName]: 
                type === "time" ? paramValueToSaveToState * 60 : paramValueToSaveToState,
        }))
    }

    const calculateSliderBgPosition = (currentParamValue) => {

        const verticalBgPosition = Math.floor(((currentParamValue-min)/(max-min))*100);
        const bgPostition = `${verticalBgPosition}% 100%`
        
        return bgPostition;
    }

    return (
        <div 
            className='user-settings__param-container'
            data-testid="user-settings__param-container"    
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
                className='user-settings__slider'
                onChange={(e) => handleParamValueChange(e)}
            />
        </div>
    )
}

export default UserSettingsParam;