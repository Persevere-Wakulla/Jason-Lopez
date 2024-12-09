import {
  createBrowserRouter,
  Route, createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
// pages
import HomePage from './pages/HomePage'
import Tenets from './pages/Tenets'
import NewsLetter from './pages/NewsLetter'
import Tribes from './pages/Tribes'
import Contact from './layouts/Contact'
import Resources from './pages/Resources'
import LoginPage from './pages/LoginPage'
import ShowUser from './pages/ShowUser'
import SignUp from './pages/SignUp'

// components
import BackButton from './pages/BackButton'
import Spinner from './pages/Spinner'

// layouts
import RootLayout from './layouts/RootLayout'
import TribesLayout from './layouts/TribesLayout'
import TenetLayout from './layouts/TenetLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path='/' element={<LoginPage />} /> */}
      <Route path='/'
        element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/Tenets' element={<TenetLayout />}>
          <Route index element={<Tenets />} />
        </Route>
        <Route path='/ContactInfo' element={<Contact />} />
        <Route path='/12Tribes' element={<Tribes />} />
        <Route path='/NewsLetter' element={<NewsLetter />} />
        <Route path='/Resources' element={<Resources />} />
        {/* <Route path='/User' element={<UserLayout />}> */}
          <Route path='/User/New' element={<SignUp />} />
          <Route path='/User/:id' element={<ShowUser />} />
        {/* </Route> */}
      </Route>
    </>
  )
)
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
