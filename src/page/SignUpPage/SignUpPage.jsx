import Description from "../../components/SignUp/Description";
import SignUp from "../../components/SignUp/SignUp";
import css from "./SignUpPage.module.css";

export default function SignUpPage() {
  return (
    <div className={css.container}>
      <Description />
      <SignUp />
    </div>
  );
}
