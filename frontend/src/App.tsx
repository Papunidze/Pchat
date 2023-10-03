import { Routes } from "react-router-dom";
import { generateLazyRoutes } from "@/lib/routing";
import { allRoutesData } from "@/app/routes";
import { usePermissions } from "@/lib/permissions";
import PageLayout from "@/layout/page-layout/page-layout";
import { useAuthContext } from "./context/login-provider";
import { useEffect } from "react";

const App = () => {
  const { auth } = useAuthContext();
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  const permissions = usePermissions();

  return (
    <PageLayout>
      <Routes>{generateLazyRoutes(allRoutesData, permissions)}</Routes>
    </PageLayout>
  );
};

export default App;
