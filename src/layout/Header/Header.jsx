import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {ReactComponent as TelIcon} from "../../assets/icons/telIcon.svg";
import {HEADER_TEL, HREF_TEL} from "../../helpers/constants";
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Logo className={styles.logo}/>
                <a className={styles.tel}
                   href={`tel:${HREF_TEL}`}
                >
                    {HEADER_TEL}
                </a>
                <TelIcon className={styles.telIcon}/>
            </nav>
        </header>
    );
};

export default Header;