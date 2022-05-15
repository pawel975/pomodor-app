import {useState } from "react";
import './UserSettingsParam.scss';

const UserSettingsParam = ({paramId, paramName, min, max, paramValue}) => {

    const [currentParamValue, setCurrentParamValue] = useState(paramValue)

    const handleParamValueChange = (e) => {
        setCurrentParamValue(e.target.value)
    }

    const calculateSliderBgPosition = (currentParamValue) => {
        return `${Math.floor((currentParamValue/max)*100)}% 100%`
    }

    return (
        <div 
            className='user-settings__param-container'
            data-testid="user-settings__param-container"    
        >
            <label>{paramName}<span>25 min</span></label>
            <input 
                type="range" 
                style={{backgroundSize: calculateSliderBgPosition(currentParamValue)}}
                min={min} 
                max={max} 
                value={Math.floor(currentParamValue)} 
                id={paramId} 
                className='user-settings__slider'
                onChange={(e) => handleParamValueChange(e)}
            />
        </div>
    )
}

export default UserSettingsParam;