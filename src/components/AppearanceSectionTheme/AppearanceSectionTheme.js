import AppearanceSectionThemeOption from "../AppearanceSectionThemeOption/AppearanceSectionThemeOption";

const AppearanceSectionTheme = ({setGlobalState, globalState}) => {
    
    const themesParams = [
        {
            themeId: "synthwave-85",
            themeName: "Synthwave 85"
        },
        {
            themeId: "infinite-ocean",
            themeName: "Infinite Ocean"
        },
        {
            themeId: "wild-desert",
            themeName: "Wild Desert"
        }
    ]

    const handleThemeChange = (e) => {
        setGlobalState(prevState => ({
            ...prevState,
            themeId: e.target.id
        }));
    }

    const allThemesOptions = themesParams.map(theme => (
        <AppearanceSectionThemeOption
            key={theme.themeId}
            themeId={theme.themeId}
            themeName={theme.themeName}
            handleThemeChange={handleThemeChange}
            globalState={globalState}
        />
    ))

    return (
        <section 
            className='appearance-section__theme'
            data-testid='appearance-section__theme'
        >
            <h1>Theme</h1>
            {allThemesOptions}
        </section>
    )
}

export default AppearanceSectionTheme;