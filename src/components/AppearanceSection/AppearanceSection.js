import AppearanceSectionFont from '../AppearanceSectionFont/AppearanceSectionFont';
import AppearanceSectionTheme from '../AppearanceSectionTheme/AppearanceSectionTheme';
import  './AppearanceSection.scss';

const AppearanceSection = () => {

    return (
        <section
            className="appearance-section"
            data-testid="appearance-section"
        >
            <AppearanceSectionTheme />
            <AppearanceSectionFont />
        </section>
    )
}

export default AppearanceSection;