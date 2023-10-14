import styles from "../style";

const Header = ({onRemoveAllItems, items}) => {
  const totalItems = items.length
  const checkedItems = items.filter( item => item.status).length

  return (
    <section className={`${styles.paddingX} ${styles.paddingY} flex sm:justify-center justify-between items-center font-inter sticky top-0 bg-white`}>
      <div>
        <h1 className={`${styles.heading2} leading-[50px]`}>Today's Task</h1>
        <p className={`${styles.paragraph}`}>({checkedItems}/{totalItems}) Completed Task</p>
      </div>
      <h3 className="font-semibold text-primary cursor-pointer" onClick={() => onRemoveAllItems()}>CLEAR ALL</h3>
    </section>
  )
}

export default Header