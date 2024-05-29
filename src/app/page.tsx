import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('../components/admin-app'), { ssr: false });

const Page: NextPage = () => {
  return <AdminApp />;
};

export default Page;
