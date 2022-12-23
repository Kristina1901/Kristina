import s from 'components/Header/Header.module.css';
import localization from 'select/localization';
import Select from 'react-select';
import Button from "../Button/Button";
import { useMediaQuery } from 'react-responsive';
import MobileButtonHeader from 'components/MobileButtonHeader/MobileButtonHeader';
export default function Header ({toggleModal, showMenu})  {
    const isTablet = useMediaQuery({ query: '(max-width: 1439px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const optionsLocalization = [
        { value: 'EN', label: 'EN' },
        { value: 'UA', label: 'UA' },
        ];
        let logo
        if (!isTablet)  {
            logo = <a className={s.logoLink} href="./">
            <p className={s.logotypeText}>Logo</p>
           </a>
        }
        if (isMobile)  {
            logo = <a className={s.logoLink} href="./">
            <p className={s.logotypeText}>Logo</p>
           </a>
        }
    return (
    <header>
        <div className={s.navigationWrapper}>
            {logo}
           {!isTablet && <nav clasname={s.navigation}>
            <ul className={s.navigationList}>
                <li className={s.navigationItem}>
                <a className={s.navigationLink} href="./works">How it works</a>
                </li>
                <li className={s.navigationItem}>
                    <a className={s.navigationLink} href="./about">About</a>
                </li>
                <li className={s.navigationItem}>
                    <a className={s.navigationLink} href="./works">Accounts</a>
                </li>
                <li className={s.navigationItem}>
                    <a className={s.navigationLink} href="./works">Platforms</a>
                </li>
                <li className={s.navigationItem}>
                    <a className={s.navigationLink} href="./works">Contact</a>
                </li>
            </ul>
        </nav>
         }
        </div>
        <div className={s.wrapper}>
        {!isTablet && <Select
        options={optionsLocalization}
        defaultValue={'EN'}
        styles={localization}
        placeholder="EN"
        />
        }
        {!isMobile && <Button text={'Sign in for free'}/>}
        {isTablet &&<MobileButtonHeader toggleModal={toggleModal} showMenu={showMenu}></MobileButtonHeader>}
        </div>
        </header>
        
    )
  };