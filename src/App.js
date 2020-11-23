import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { CreateMovie } from './pages/admin/CreateMovie';
import { HomeAdmin } from './pages/admin/HomeAdmin';
import { CollectionUser } from './pages/CollectionUser';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Movie } from './pages/Movie';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact  path="/login" component={Login} />
          <Route exact  path="/movie/:id" component={Movie} />
          <Route exact  path="/collection" component={CollectionUser} />
          <Route exact  path="/admin" component={HomeAdmin} />
          <Route exact  path="/admin/create-movie" component={CreateMovie} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
