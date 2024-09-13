import { FaDownload } from 'react-icons/fa';

const DownloadCV = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1sFdBbMjpl7gryElbCyui2ft-mSdql9JC/view?usp=sharing', '_blank');
  };

  return (
    <div className="downloadCV" onClick={handleDownload} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <FaDownload style={{ marginRight: '8px' }} />
      <p>Download my Resume</p>
    </div>
  );
};

export default DownloadCV;
