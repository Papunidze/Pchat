import banner from "@/assets/images/banner.png";
import Images from "@/components/preloaders/images";
import ResetPassword from "@/modules/auth/reset-password/form/reset-password";
import SignIn from "@/modules/auth/signin/form/signin-form";
import SignUp from "@/modules/auth/signup/form/signup-form";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const flow = params.get("flow");

  const pages =
    flow === "signup" ? (
      <SignUp />
    ) : flow === "password-reset" ? (
      <ResetPassword />
    ) : (
      <SignIn />
    );

  return (
    <div className="flex items-stretch overflow-auto h-full gap-4 text-dark">
      <section className="hidden w-[450px] h-full lg:block bg-primary">
        <Images
          src={banner}
          alt="banner"
          styles="h-full object-contain w-full overflow-clip"
        />
      </section>
      <section className="flex flex-col gap-3 max-w-[450px] m-auto lg:ml-[100px] w-full p-4 flex-center">
        {pages}
      </section>
    </div>
  );
};

export default Auth;
