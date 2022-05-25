import styles from "./Login.module.scss";
import SplashVideo from "../../assets/videoBg.mp4"
import kakaoButton from "../../assets/kakao_login_medium_wide.png"

type Props = {
}

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=code`;

export default function Login({} : Props) {
  return (
    <div className={styles.Splash}>
      <video src={SplashVideo} autoPlay loop muted />
      <div className={styles.overlay} />
      <div className={styles.contents}>
        <h1>if</h1>
        <span>당신과 연인 사이에 100문 100답</span>
      </div>
      <a className={styles.kakao_botton} href={KAKAO_AUTH_URL}><img src={kakaoButton} /></a>
    </div>
  );
}