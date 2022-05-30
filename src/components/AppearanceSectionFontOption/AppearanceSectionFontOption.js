

const AppearanceSectionFontOption = ({fontId, fontName, handleFontChange, globalState}) => {
    
    return (
        <label 
            onClick={(e) => handleFontChange(e)}
            htmlFor={fontId}
            tabIndex="0"
            data-testid="font-option"
        >
            <input 
                type="radio" 
                name='choose-font'
                data-testid={fontId}
                checked={fontId === globalState.fontId}
                id={fontId}
            ></input>
            <span className='checkmark'>{fontName}</span>
        </label>
    )
}

export default AppearanceSectionFontOption;