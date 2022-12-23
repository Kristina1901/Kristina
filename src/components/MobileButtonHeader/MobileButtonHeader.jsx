import s from 'components/MobileButtonHeader/MobileButtonHeader.module.css';
export default function MobileButtonHeader ({toggleModal, showMenu})  {
    return <button className={showMenu === false? s.buttomMobileMenu : s.buttomMobileMenuClose} onClick={toggleModal}></button>
  };