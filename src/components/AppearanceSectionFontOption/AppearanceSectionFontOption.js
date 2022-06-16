
const AppearanceSectionFontOption = ({fontId, fontName, handleFontChange}) => {
    
    const globalStateReducer = (state => state.globalStateReducer);

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
                checked={fontId === globalStateReducer.fontId}
                id={fontId}
            ></input>
            <span className='checkmark'>{fontName}</span>
        </label>
    )
}

export default AppearanceSectionFontOption;