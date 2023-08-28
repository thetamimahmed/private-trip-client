import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './app/store.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TravelarStories from './Discover/TravelarStories/TravelarStories.jsx'
import Articles from './Discover/TravelarStories/Articles/Articles.jsx'
import TravelerGuide from './Discover/TravelerGuide/TravelerGuide.jsx'
import GuideDetails from './Discover/TravelerGuide/GuideDetails.jsx'
import SearchResult from './SearchResult/SearchResult.jsx'
import ContactDetails from './Payment/ContactDetails/ContactDetails.jsx'
import ActivityDetails from './Payment/ActivityDetails/ActivityDetails.jsx'
import SearchResultDetails from './SearchResult/SearchResultDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "traveler-stories",
    element: <TravelarStories/>
  },
  {
    path: "article",
    element: <Articles/>
  },
  {
    path: "traveler-guide",
    element: <TravelerGuide/>
  },
  {
    path: "guide",
    element: <GuideDetails/>
  },
  {
    path: "searchResult",
    element: <SearchResult/>
  },
  {
    path: "contactDetails",
    element: <ContactDetails/>
  },
  {
    path: "activityDetails",
    element: <ActivityDetails/>
  },
  {
    path: "searchResult/:id",
    element: <SearchResultDetails/>,
    loader: ({params}) => fetch(`http://localhost:5000/searchResult/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
