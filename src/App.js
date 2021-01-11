import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomeAdmin } from './pages/admin/HomeAdmin';
import { CollectionUser } from './pages/CollectionUser';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Movie } from './pages/Movie';
import { NotFound } from './pages/NotFound';
import {Register} from "./pages/Register";
import {Movies} from "./pages/Movies";
import 'bulma/css/bulma.css'
import CreateMovie from './pages/admin/CreateMovie';
import ListMovie from './pages/admin/ListMovie';
import EditMovie from './pages/admin/EditMovie';
import DetailMovie from './pages/DetailMovie';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/login" component={Login} />
          <Route exact  path="/register" component={Register} />
          <Route exact  path="/movies" component={Movies} />
          <Route exact  path="/movie/:id" component={Movie} />
          <Route exact  path="/collection" component={CollectionUser} />
          <Route exact  path="/detailMovie/:id" component={DetailMovie} />
          <Route exact  path="/admin" component={HomeAdmin} />
          <Route exact  path="/admin/create-movie" component={CreateMovie} />
          <Route exact  path="/admin/editMovie/:id" component={EditMovie} />
          <Route exact  path="/admin/list-movie" component={ListMovie} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
