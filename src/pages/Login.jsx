import PageNav from '../components/PageNav';
import styles from './Login.module.css';
function Login() {
  return (
    <>
    <PageNav />
    <div className={styles.login}>
    <h1>Login</h1>
    <form>
      <div className={styles.marginTop}>
        <label>Email</label>
        <div>
          <input type='text' aria-label='input-email' />
        </div>
      </div>
      <div className={styles.marginTop}>
        <label>Password</label>
        <div>
          <input type='password' aria-label='input-password' />
        </div>
        <div className={styles.marginTop}>
          <button type='button'>Login</button>
        </div>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login