import { Routes } from "react-router-dom";
import { generateLazyRoutes } from "@/lib/routing";
import { allRoutesData } from "@/app/routes";
import { usePermissions } from "@/lib/permissions";
import PageLayout from "@/layout/page-layout/page-layout";

const App = () => {
  const permissions = usePermissions();

  return (
    <PageLayout>
      <Routes>{generateLazyRoutes(allRoutesData, permissions)}</Routes>
    </PageLayout>
  );
};

export default App;
