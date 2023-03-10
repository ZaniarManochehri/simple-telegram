import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { InnerChatPage } from 'pages';
import { Layout } from 'components';

export const routes = {
  ROOT: '/',
  CHAT: '/:userId',
};

const Routers = () => {
  const pages = [
    {
      path: routes.CHAT,
      component: <InnerChatPage />,
      title: '',
      isHome: true,
      isNavigate: true,
    },
    {
      path: routes.ROOT,
      component: <InnerChatPage />,
      title: '',
      isHome: true,
      isNavigate: true,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((item) => (
          <Route
            path={item.path}
            key={item.path}
            exact
            element={<Layout>{item.component}</Layout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
