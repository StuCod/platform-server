import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.left_section}>왼쪽 영역</div>
        <div className={styles.right_section}>오른쪽 영역</div>
      </div>
    </div>
  );
};

export default MainPage;
