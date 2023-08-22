import { Route, Routes } from 'react-router-dom';
import { WelcomeView, AboutView, ToolsView, UserView, NotFoundView } from '../views';
import UsersView from "../views/Users/UsersView";

/**
 * List of routes available only for authenticated users
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeView />} />
      <Route path="/welcome/*" element={<WelcomeView />} />
      <Route path="/users/*" element={<UsersView />} />
      <Route path="/about/*" element={<AboutView />} />
      <Route path="/tools/*" element={<ToolsView />} />
      <Route path="/user/*" element={<UserView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default PrivateRoutes;
