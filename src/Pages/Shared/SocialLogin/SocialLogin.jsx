import facebook from "../../../assets/icon/facebook.png";
import google from "../../../assets/icon/google.png";
import github from "../../../assets/icon/github.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      const saveUser = { name: loggedUser.name, email: loggedUser.email };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <section>
      <div className="flex justify-center gap-10">
        <img src={facebook} alt="" />
        <img onClick={handleGoogleSignIn} src={google} alt="" />
        <img src={github} alt="" />
      </div>
    </section>
  );
};

export default SocialLogin;
