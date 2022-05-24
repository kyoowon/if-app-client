import styles from "./Login.module.scss";
import SplashVideo from "../../assets/videoBg.mp4"
import kakaoButton from "../../assets/kakao_login_medium_wide.png"

export default function Login() {
  return (
    <div className={styles.Splash}>
      <video src={SplashVideo} autoPlay loop muted />
      <div className={styles.overlay} />
      <div className={styles.contents}>
        <h1 className={styles.h1}>if</h1>
        <span className={styles.span}>당신과 연인 사이에 100문 100답</span>
      </div>
      <a href={process.env.REACT_APP_KAKAO_AUTH_URL}><img src={kakaoButton} /></a>
    </div>
  );
}