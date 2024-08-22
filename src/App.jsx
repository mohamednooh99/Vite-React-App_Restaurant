import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

// createBrowserRouter fun below is recommended more than old way of React Router
const router = createBrowserRouter([
  {
    path: '/Vite-React-App_Restaurant/',
    element: <AppLayout />,
    children: [
      {
        path: '/Vite-React-App_Restaurant/',
        element: <Home />,
      },
      {
        path: '/Vite-React-App_Restaurant/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/Vite-React-App_Restaurant/cart', element: <Cart /> },
      {
        path: '/Vite-React-App_Restaurant/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/Vite-React-App_Restaurant/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
