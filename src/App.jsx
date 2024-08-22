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
    path: '/test-vite/',
    element: <AppLayout />,
    children: [
      {
        path: '/test-vite/',
        element: <Home />,
      },
      {
        path: '/test-vite/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/test-vite/cart', element: <Cart /> },
      {
        path: '/test-vite/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/test-vite/order/:orderId',
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
