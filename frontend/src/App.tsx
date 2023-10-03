import { Navigate, Route, Routes } from "react-router-dom";
import { generateLazyRoutes } from "@/lib/routing";
import { usePermissions } from "@/lib/permissions";
import PageLayout from "@/layout/page-layout/page-layout";

const App = () => {
  const permissions = usePermissions();

  if (permissions === null) return null;

  return (
    <PageLayout>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        {generateLazyRoutes(permissions)}
      </Routes>
    </PageLayout>
  );
};

export default App;
