import './../Styles/App.css';
import Navigation from './Base/Navigation';
import Footer from './Base/Footer';
import Password from './Password';
function App() {
  return (
    <div className="App">
      <Navigation title="Password Input" />
      <Password />
      <Footer />
    </div>
  );
}

export default App;
