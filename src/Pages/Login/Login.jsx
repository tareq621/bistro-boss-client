import loginImage from "../../assets/others/authentication2.png";
import loginBackground from "../../assets/others/authentication.png";
import facebook from "../../assets/icon/facebook.png";
import google from "../../assets/icon/google.png";
import github from "../../assets/icon/github.png";
import { useContext, useEffect, useState } from "react";

// react captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successfully!!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url("${loginBackground}")`,
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col md:flex-row gap-60">
          <div>
            <img src={loginImage} alt="" />
          </div>
          <div className="card w-full max-w-sm">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="Type the text above"
                  name="captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center">
              <h1 className="text-1xl pb-3 text-[#D1A054]">
                New here?{" "}
                <Link
                  to="/signup"
                  className="text-[#D1A054] text-1xl font-medium"
                >
                  Create a New Account
                </Link>
              </h1>
              <h1 className="pb-3">Or sign in with</h1>
              <div className="flex justify-center gap-10">
                <img src={facebook} alt="" />
                <img src={google} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
