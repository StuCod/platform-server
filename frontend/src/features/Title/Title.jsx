import styles from "./Title.module.scss";

/* 
Props : 
  - title: 타이틀 명 
*/

// assets
import MoreIcon from "../../assets/svg/more";

const Title = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.title}>{title}</div>
        <div className={styles.more}>
          <MoreIcon width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Title;
