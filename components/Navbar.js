import Image from "next/image"
import avater from "../temp/名称未設定211q.png"
import { BsPerson } from "react-icons/bs"

const style = {
  //md: @media (min-width: 768px)
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center`,
  //gap-4 1rem gap-3 gap: 0.75rem;
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
}


//(0,6)0~6 前６桁表示 (39) 42桁-39 = 後3桁表示 0x7165...40C
//イーサリアムアドレス(metamask)
const currentAccount = '0x7165662174c8b2A4e97d6321bb8caeBb3179940C'

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>Uber</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Drive</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>Lance</div>
        <div className={style.userImageContainer}>
          {/* アバターアイコン */}
          <Image
            className={style.userImage}
            src={avater}
            width={40}
            height={40} />
        </div>
        {currentAccount ? (
            // metamaskアドレス文字省略
            <div>{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}</div>
        ) : (
          <div className={style.loginButton}>
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar