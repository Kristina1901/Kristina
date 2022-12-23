import s from 'components/MobileMenu/MobileMenu.module.css'
export default function MobileMenu ()  {
    return <nav clasname={s.menu}>
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
  };