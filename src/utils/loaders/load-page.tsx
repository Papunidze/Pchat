import loading from "@/assets/images/loading.gif";
const LoadPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex-center ">
      <img
        src={loading}
        alt="loading"
        className="w-full h-full max-w-[450] max-h-[450px] object-contain"
      />
    </div>
  );
};

export default LoadPage;
