import CatalogPage from './pages/catalog';
import AuthPage from './pages/authentication';

import './app.scss'

const App = () => {
  const isCatalog = false;

  return (
    <>
      {isCatalog ? (
        <CatalogPage />
      ) : (
          <AuthPage />
        )}
    </>
  );
}

export default App;
