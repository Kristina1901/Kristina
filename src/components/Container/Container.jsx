import s from 'components/Container/Container.module.css';
export default function Container ({ children })  {
    return <div className={s.container}>{children}</div>;
  };