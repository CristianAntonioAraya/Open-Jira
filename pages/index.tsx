import type { NextPage } from 'next'
import Layout from '../components/layouts/Layout';
import { EntryList } from '../components/ui';
import styles from '../styles/pages/home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout title='Home'>
      <div className={ styles.container }>
          <EntryList title='Pending' status='pending'/>
          <EntryList title='In-Progress' status='in-progress'/>
          <EntryList title='Finished' status='finished'/>
      </div>
    </Layout>
  )
}

export default Home
