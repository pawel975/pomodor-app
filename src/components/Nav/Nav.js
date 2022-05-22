import RulesInfoBtn from '../RulesInfoBtn/RulesInfoBtn';
import SettingsBtn from '../SettingsBtn/SettingsBtn';
import StatisticsBtn from '../StatisticsBtn/StatisticsBtn';
import './Nav.scss';

const Nav = ({setIsModalOpen, setActiveModalContentBtnId}) => {

    const handleModalOpen = (e) => {
        setIsModalOpen(true);
        setActiveModalContentBtnId(e.target.id)
    }

    return (
        <nav>
            <SettingsBtn handleModalOpen={handleModalOpen}/>
            <StatisticsBtn handleModalOpen={handleModalOpen}/>
            <RulesInfoBtn handleModalOpen={handleModalOpen}/>
        </nav>
    )
}

export default Nav;