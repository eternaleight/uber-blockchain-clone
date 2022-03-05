import Navbar from "../components/Navbar"

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: ``,
  rideRequestContainer: ``,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        {/* map */}
        <div className={style.rideRequestContainer}>
        </div>
        <div className={style.rideRequest}>
          {/* location selector*/}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}
