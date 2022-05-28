import AppearanceSectionTheme from '../AppearanceSectionTheme/AppearanceSectionTheme';
import  './AppearanceSection.scss';

const AppearanceSection = ({globalState, setGlobalState}) => {

    const themes = [
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

    const allThemes = themes.map(theme => (
        <AppearanceSectionTheme
            key={theme.themeId}
            themeId={theme.themeId}
            themeName={theme.themeName}
            handleThemeChange={handleThemeChange}
            globalState={globalState}
        />
    ))

    return (
        <section
            className="appearance-section"
            data-testid="appearance-section"
        >
            <section 
                className='appearance-section__theme'
                data-testid='appearance-section__theme'
            >
                <h1>Theme</h1>
                {allThemes}
            </section>
        </section>
    )
}

export default AppearanceSection;