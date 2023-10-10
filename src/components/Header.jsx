import styles from "../style";

const Header = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} flex sm:justify-center justify-between items-center font-inter`}>
      <div>
        <h1 className={`${styles.heading2} leading-[50px]`}>Today's Task</h1>
        <p className={`${styles.paragraph}`}>(0/3) Completed Task</p>
      </div>
      <h3 className="font-semibold text-primary cursor-pointer">CLEAR ALL</h3>
    </section>
  )
}

export default Header