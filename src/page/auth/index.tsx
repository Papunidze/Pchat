import { useLocation } from "react-router-dom";
import Images from "@/components/preloader/images"; // Make sure to import your Images component
import banner from "@/assets/images/banner.png";

import SignIn from "@/modules/auth/signin/form/signin-form";
import SignUp from "@/modules/auth/signup/form/signup-form";
import ResetPassword from "@/modules/auth/reset-password/form/reset-password";

import "./index.css";

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const flow = params.get("flow");

  const getPageComponent = () => {
    switch (flow) {
      case "signup":
        return <SignUp />;
      case "password-reset":
        return <ResetPassword />;
      default:
        return <SignIn />;
    }
  };

  const pageComponent = getPageComponent();

  return (
    <div className="auth-container">
      <section className="banner-section">
        <Images src={banner} alt="banner" styles="banner-image" />
      </section>

      <section className="auth-form-section">{pageComponent}</section>
    </div>
  );
};

export default Auth;
