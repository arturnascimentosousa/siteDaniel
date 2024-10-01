import * as S from "./styles.js";
import lupa from "../../assets/search.svg";
import coracao from "../../assets/wishlist.svg"
import carrinho from "../../assets/car.svg"
export const Promotion = () => {
  return (
    <>
      <S.Promotion>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <S.LinkHeader>ShopNow</S.LinkHeader>
        <S.dropDown>
          <S.elementsDropDown value="ingles">English</S.elementsDropDown>
          <S.elementsDropDown value="portuguese">Portugês</S.elementsDropDown>
        </S.dropDown>
      </S.Promotion>
      <S.Navbar>
        <h1>Exclusive</h1>
        <nav>
          <S.navList>
            <S.navLink href="">
              <S.navItem>Home</S.navItem>
            </S.navLink>
            <S.navLink href="">
              <S.navItem>Contact</S.navItem>
            </S.navLink>
            <S.navLink href="">
              <S.navItem>About</S.navItem>
            </S.navLink>
            <S.navLink href="">
              <S.navItem>Sign Up</S.navItem>
            </S.navLink>
          </S.navList>
        </nav>
      <S.Divona>
       <S.inputDiv>
        <S.inputSearch placeholder="boca lindo <3"></S.inputSearch>
        <img src={lupa}></img>
       </S.inputDiv>
       <img src={coracao}></img>
       <img src={carrinho}></img>
      </S.Divona>
      </S.Navbar>
    </>
  );
};

// import styles from "./Header.module.css";
// import * as S from "./styles";

// export default function Header() {
//   return (
//     <>
//       <header className={styles.header}>
//         <div>Excluisve</div>
//         <div>Home</div>
//         <div>Contact</div>
//       </header>
//       <S.Navbar></S.Navbar>
//     </>
//   );
// }
