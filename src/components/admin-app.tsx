'use client';

import * as React from 'react';

import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
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

const AdminApp = () => {
  return (
    // <BrowserRouter>
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={ListGuesser} edit={EditGuesser} recordRepresentation='name' />
      {/* <Resource name='posts' list={ListGuesser} edit={EditGuesser} recordRepresentation='title' />
        <Resource name='comments' list={ListGuesser} edit={EditGuesser} /> */}
    </Admin>
    // </BrowserRouter>
  );
};

export default AdminApp;
