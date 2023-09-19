import React from "react";
import "./page-layout.css"; // Import your custom styles

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="page-layout">
      <div className="page-content">{children}</div>
    </main>
  );
};

export default PageLayout;
