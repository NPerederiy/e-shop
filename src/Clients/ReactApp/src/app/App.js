import CatalogPage from './pages/catalog';
import AuthPage from './pages/authentication';

import './app.scss'

const App = () => {
  const appName = 'e-shop';
  const isCatalog = true;

  return (
    <>
      {isCatalog ? (
        <CatalogPage appName={appName}/>
      ) : (
          <AuthPage />
        )}
    </>
  );
}

export default App;
