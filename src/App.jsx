// import NavBar from './modules/NavBar/NavBar';

// import Accordion from './modules/Accordion/Accordion';

// import items from './db/accordionItems';

import items from './db/tabs';

import Tabs from 'modules/Tabs/Tabs';
import './shared/styles/style.css';

export const App = () => {
  return (
    <>
      {/* <NavBar /> */}

      {/* <Accordion items={items} /> */}

      <Tabs items={items} />
    </>
  );
};
