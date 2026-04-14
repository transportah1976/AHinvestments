import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { PackagingMaterials } from './components/PackagingMaterials';
import { RoadTransport } from './components/InternationalTransport';
import { SeaTransport } from './components/SeaTransport';
import { RailTransport } from './components/RailTransport';
import { AirTransport } from './components/AirTransport';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'o-nas', Component: About },
      { path: 'materialy-opakowaniowe', Component: PackagingMaterials },
      { path: 'transport-drogowy', Component: RoadTransport },
      { path: 'transport-morski', Component: SeaTransport },
      { path: 'transport-kolejowy', Component: RailTransport },
      { path: 'transport-lotniczy', Component: AirTransport },
      { path: 'kontakt', Component: Contact },
    ],
  },
]);