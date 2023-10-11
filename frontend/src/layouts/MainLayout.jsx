import Header from '@/components/Header';

const MainLayout = ({ className, children }) => {
  return (
    <>
      <Header />
      <main className={className}>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
