import styles from "./Splash.module.scss";

export default function Login() {
  return (
    <div className={styles.Splash}>
      <video src="/assets/videoBg.mp4" autoPlay loop muted />
      <div className={styles.overlay} />
      <div className={styles.contents}>
        <h1>당신과 연인사이에 100문 100답</h1>
        <a><img src="/assets/kakao_login_medium_wide.png" /></a>
      </div>
    </div>
  );
}