import {useState } from "react";
import { formatMinutesToHours } from "../../helpers";
import './UserSettingsParam.scss';

const UserSettingsParam = ({paramId, paramName, min, max, paramValue}) => {

    const [currentParamValue, setCurrentParamValue] = useState(paramValue)

    const handleParamValueChange = (e) => {
        setCurrentParamValue(e.target.value)
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
                    id={paramId} 
                    data-testid={paramId}
                >
                    {formatMinutesToHours(currentParamValue)}
                </span>
            </label>
            <input 
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