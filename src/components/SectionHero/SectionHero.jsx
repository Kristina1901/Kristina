import s from 'components/SectionHero/SectionHero.module.css';
import Container from 'components/Container/Container';
export default function SectionHero ()  {
    return  <div className={s.wrapper}>
    <Container>
    <section className={s.hero}>
    <div className={s.wrapperText}>
    <h1 className={s.title}>Trade everywhere. Invest here!</h1>
    <p className={s.text}>We provide only the best trading software. 
    The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. 
    You can work anywhere. </p>
    </div>
    <div className={s.chart}></div>
    </section>
    </Container>
    </div>
    
  };