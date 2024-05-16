import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h2>Learn & Master GitHub Actions</h2>
      </header>
      <MainContent />
    </>
  );
}

export default App;
