import styles from "./TopNav.module.scss";

const TopNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.left_section}>
          <div className={styles.title}>구미호</div>
        </div>
        <div className={styles.right_section}>
          <div className={styles.news}>소식</div>
          <div className={styles.ranking}>랭킹</div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
