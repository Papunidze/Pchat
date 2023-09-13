interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="max-width h-screen max-h-[-webkit-fill-available] overflow-auto">
      <div className="bg-background h-full  dark:bg-black">{children}</div>
    </main>
  );
};

export default PageLayout;
