import SignIn from "../../components/SignIn/SignIn";
import Description from "../../components/SignIn/Description";
import css from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <div className={css.container}>
      <Description />
      <SignIn />
    </div>
  );
}
