import Footer from "./Footer";
import Header from "./Header";

function App({children}){
  return (
    <div id="wrap">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default App;