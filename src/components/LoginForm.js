import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label} for="name">name: </label>
      <input type="text" name="name" id="name" required/>
      <label className={styles.label} for="password">password: </label>
      <input type="email" name="email" id="email" required/>
      <button type="submit" value="submit"/>
  </form>
  
  );
}

//export default LoginForm;