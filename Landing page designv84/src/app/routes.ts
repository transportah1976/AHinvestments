import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { PackagingMaterials } from './components/PackagingMaterials';
import { InternationalTransport } from './components/InternationalTransport';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'o-nas', Component: About },
      { path: 'materialy-opakowaniowe', Component: PackagingMaterials },
      { path: 'transport-miedzynarodowy', Component: InternationalTransport },
      { path: 'kontakt', Component: Contact },
    ],
  },
]);