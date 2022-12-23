import s from 'components/SectionPlan/SectionPlan.module.css';
export default function SectionPlan ()  {
    return <section className={s.plan}>
    <h2 className={s.title}>Getting Started Is Fast & Easy</h2>
    <ul className={s.list}>
      <li className={s.listItem}><span className={s.numbering}>01.</span>Register<p className={s.text}>Complete the simple registration to get your trading credentials.</p></li>
      <li сlassname={s.listItemLine}></li>
      <li className={s.listItem}></li>
      <li className={s.listItem}></li>
    </ul>
    </section>
      
  };