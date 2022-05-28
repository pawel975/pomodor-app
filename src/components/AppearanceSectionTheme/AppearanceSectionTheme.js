
const AppearanceSectionTheme = ({themeId, themeName, handleThemeChange, globalState}) => {
    
    return (
        <label 
            onClick={(e) => handleThemeChange(e)}
            htmlFor={themeId}
            tabIndex="0"
            data-testid="theme-option"
        >
            <input 
                type="radio" 
                name='choose-theme'
                data-testid={themeId}
                checked={themeId === globalState.themeId}
                id={themeId}
            ></input>
            <span className='checkmark'>{themeName}</span>
        </label>
    )
}

export default AppearanceSectionTheme;