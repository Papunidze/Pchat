interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className=" h-screen max-h-[-webkit-fill-available] overflow-auto m-auto">
      <div className="bg-background h-full  dark:bg-black">{children}</div>
    </main>
  );
};

export default PageLayout;
