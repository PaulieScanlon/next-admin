// src/components/admin-app.tsx

'use client';

import * as React from 'react';

import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';

import postgrestRestProvider, {
  IDataProviderConfig,
  defaultPrimaryKeys,
  defaultSchema,
} from '@raphiniert/ra-data-postgrest';

const config: IDataProviderConfig = {
  apiUrl: '/api/admin',
  httpClient: fetchUtils.fetchJson,
  defaultListOp: 'eq',
  primaryKeys: defaultPrimaryKeys,
  schema: defaultSchema,
};

const dataProvider = postgrestRestProvider(config);

import Dashboard from './dashboard';

const AdminApp = () => {
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name='users' list={ListGuesser} /> */}
      <Resource name='users' list={Dashboard} />
    </Admin>
  );
};

export default AdminApp;

// 'use client';

// import * as React from 'react';

// import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
// import postgrestRestProvider, {
//   IDataProviderConfig,
//   defaultPrimaryKeys,
//   defaultSchema,
// } from '@raphiniert/ra-data-postgrest';

// import Dashboard from './dashboard';

// const config: IDataProviderConfig = {
//   apiUrl: '/api/admin',
//   httpClient: fetchUtils.fetchJson,
//   defaultListOp: 'eq',
//   primaryKeys: defaultPrimaryKeys,
//   schema: defaultSchema,
// };

// const dataProvider = postgrestRestProvider(config);

// const AdminApp = () => {
//   return (
//     <Admin dataProvider={dataProvider}>
//       <Resource name='users' list={ListGuesser} edit={EditGuesser} />
//       {/* <Resource name='users' list={Dashboard} /> */}
//     </Admin>
//   );
// };

// export default AdminApp;
