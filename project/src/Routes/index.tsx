import { Route, Routes as BaseRoutes } from 'react-router-dom';

import { PATH } from '../constants/route';
import Home from '../pages/Home'
import Map from '../pages/Map';
import Search from '../pages/Search';
import Record from '../pages/Record';

export default function Routes() {
 
  return (
    <BaseRoutes>
      
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.MAP} element={<Map/>} />
      <Route path={PATH.SEARCH} element={<Search />} />
      <Route path={PATH.RECORD} element={<Record />} />

    </BaseRoutes>
  );
}
