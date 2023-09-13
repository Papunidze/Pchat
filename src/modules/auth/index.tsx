import "./style.css";
import banner from "@/assets/banner.png";
import Images from "@/cmp-domain/images/images";

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main__auth-container text-dark-text">
      <section className="hidden w-[450px] h-full lg:block bg-primary">
        <Images
          src={banner}
          alt="banner"
          styles="h-full object-contain w-full overflow-clip"
        />
      </section>
      {children}
    </div>
  );
};

export default Auth;
