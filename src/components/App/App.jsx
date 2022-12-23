import Container from "../Container/Container";
import Header from "../Header/Header";
import MobileMenu from '../MobileMenu/MobileMenu';
import SectionHero from '../SectionHero/SectionHero'
import { useState } from 'react';
import SectionPlan from '../SectionPlan/SectionPlan'
export const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleModal = () => {
    setShowMenu(prevShow => !prevShow);
    };
  return (
    <>
    <Container>
    <Header toggleModal={toggleModal} showMenu={showMenu}></Header>
    {showMenu && <MobileMenu/>}
    </Container>
    <SectionHero></SectionHero>
    <Container><SectionPlan/></Container>
    </>
     
    
  );
};
