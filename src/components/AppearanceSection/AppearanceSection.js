import AppearanceSectionFont from '../AppearanceSectionFont/AppearanceSectionFont';
import AppearanceSectionTheme from '../AppearanceSectionTheme/AppearanceSectionTheme';
import  './AppearanceSection.scss';

const AppearanceSection = ({globalState, setGlobalState}) => {

    return (
        <section
            className="appearance-section"
            data-testid="appearance-section"
        >
            <AppearanceSectionTheme 
                globalState={globalState}
                setGlobalState={setGlobalState}
            />
            <AppearanceSectionFont    
                globalState={globalState}
                setGlobalState={setGlobalState}
            />
        </section>
    )
}

export default AppearanceSection;