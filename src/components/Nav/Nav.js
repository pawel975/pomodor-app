import SettingsBtn from '../SettingsBtn/SettingsBtn';
import StatisticsBtn from '../StatisticsBtn/StatisticsBtn';
import './Nav.scss';

const Nav = ({setIsModalOpen}) => {

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    return (
        <nav>
            <SettingsBtn handleModalOpen={handleModalOpen}/>
            <StatisticsBtn handleModalOpen={handleModalOpen}/>
        </nav>
    )
}

export default Nav;