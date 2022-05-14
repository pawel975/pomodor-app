import SettingsBtn from '../SettingsBtn/SettingsBtn';
import './Nav.scss';

const Nav = ({setIsModalOpen}) => {

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    return (
        <nav>
            <SettingsBtn handleModalOpen={handleModalOpen}/>
        </nav>
    )
}

export default Nav;