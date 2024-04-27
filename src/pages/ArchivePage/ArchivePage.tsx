import { Link } from 'react-router-dom';
import ArchiveList from '../../components/ArchiveList/ArchiveList';

const ArchivePage = () => {
  return (
    <>
      <h1>Archive</h1>
      <Link to="/">Go to Main Page</Link>;
      <ArchiveList/>
    </>
  );
};

export default ArchivePage;
