import styles from "./style"
import {Business,ExclusiveDemo,Footer,Hero,HowitWorks,NavBar,SalaryPayment} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
          <NavBar/>
      </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero/>
      </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
       <Business/>
       <HowitWorks/>
       <SalaryPayment/>
       <ExclusiveDemo/>
       <Footer/>
      </div>
      </div>
      </div>
  )
}

export default App