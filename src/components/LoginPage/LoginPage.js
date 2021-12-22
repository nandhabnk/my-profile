import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI-Elements/ButtonComponent/ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Store/authentication-slice";
import { useNavigate } from "react-router";
import "./LoginPage.scss";

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.isAuthenticated);
  console.log("isLoggedIn", isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password != "" && data.password.length === 8) {
      console.log("loginData", data);
      dispatch(authActions.login(true));
      navigate("/", { replace: true });
    }
  };

  return (
    <React.Fragment>
      <div className="loginContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="password">
                ENTER PASSWORD (STATE:{isLoggedIn.toString()})
              </label>{" "}
              <br />
              <input
                maxLength="8"
                type="password"
                className="form-control"
                id="password"
                placeholder="🔑🤔"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                })}
              />
              <div className="warning-message">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  errors.password?.message}
              </div>
            </div>
            <div>
              <Button name="Submit" type="submit" />
              <Button name="Reset" type="reset" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginPage;
