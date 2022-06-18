import { useDispatch } from "react-redux";
import { globalStateUpdate } from "../../actions";
import AppearanceSectionThemeOption from "../AppearanceSectionThemeOption/AppearanceSectionThemeOption";

const AppearanceSectionTheme = () => {
    
    const dispatch = useDispatch();

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
        dispatch(
            globalStateUpdate({
                themeId: e.target.id
            })
        )
    }

    const allThemesOptions = themesParams.map(theme => (
        <AppearanceSectionThemeOption
            key={theme.themeId}
            themeId={theme.themeId}
            themeName={theme.themeName}
            handleThemeChange={handleThemeChange}
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