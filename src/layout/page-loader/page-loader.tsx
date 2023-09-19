import loading from "@/assets/images/loading.gif";
import "./page-loading.css";

const PageLoading = () => {
  return (
    <div className="loading-container flex-center">
      <img src={loading} alt="Loading" className="loading-image" />
    </div>
  );
};

export default PageLoading;
