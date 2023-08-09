import loginImage from "../../assets/others/authentication2.png";
import loginBackground from "../../assets/others/authentication.png";
import facebook from "../../assets/icon/facebook.png";
import google from "../../assets/icon/google.png";
import github from "../../assets/icon/github.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, userUpdate, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      userUpdate(data.name, data.photoURL)
        .then(() => {
          console.log("User profile Updated!!");
          reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Account is Created",
            showConfirmButton: false,
            timer: 1700,
          });
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url("${loginBackground}")`,
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col md:flex-row-reverse gap-60">
          <div>
            <img src={loginImage} alt="" />
          </div>
          <div className="card w-full max-w-sm">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Type Here"
                  className="input input-bordered focus:outline-none"
                />
                {errors.name && (
                  <span className="text-red-500 mt-2">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered focus:outline-none"
                />
                {errors.photoURL && (
                  <span className="text-red-500 mt-2">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Type Here"
                  className="input input-bordered focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500 mt-2">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type your password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered focus:outline-none"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 mt-2 shadow-lg border bg-slate-100 p-2">
                    Password field is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 mt-2 shadow-lg border bg-slate-100 p-2">
                    Password must be 6 character.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 mt-2 shadow-lg border bg-slate-100 p-2">
                    Password must be at least 20 character.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 mt-2 shadow-lg border bg-slate-100 p-2">
                    Password must have one uppercase, one lowercase, one number
                    and special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="py-3 rounded-sm font-semibold bg-[#D1A054]
                border-none text-white hover:bg-none"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center">
              <h1 className="text-1xl pb-3 text-[#D1A054]">
                Already registered?{" "}
                <Link
                  to="/login"
                  className="text-[#D1A054] text-1xl font-medium"
                >
                  Go to log in
                </Link>
              </h1>
              <h1 className="pb-3">Or sign up with</h1>
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

export default SignUp;
