import CatalogPage from './pages/catalog';
import AuthPage from './pages/authentication';
import CheckoutPage from './pages/checkout';

import './app.scss'

const App = () => {
  const appName = 'e-shop';

  const getPage = (num) => {
    switch (num) {
      case 0:
        return <AuthPage />;
      case 1:
        return <CatalogPage appName={appName} />;
      case 2:
        return <CheckoutPage />;
      default:
        throw new Error('Unknown page number');
    }
  }

  return (
    <>
      {getPage(2)}
    </>
  );
}

export default App;
