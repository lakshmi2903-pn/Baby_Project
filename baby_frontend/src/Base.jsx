import Header from "./Header"; // If you made a separate Header file
import Footer from "./Footer"; // If you made a separate Footer file

const Base = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        {children} {/* This is where your Products/Filters will show up */}
      </main>
      <Footer />
    </>
  );
};

export default Base;
