import { Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { AddContactPage, Home, NoMatch } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="add" element={<AddContactPage />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
