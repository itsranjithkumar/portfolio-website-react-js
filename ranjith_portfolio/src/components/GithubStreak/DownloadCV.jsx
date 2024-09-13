import { FaDownload } from 'react-icons/fa';

const DownloadCV = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1sFdBbMjpl7gryElbCyui2ft-mSdql9JC/view?usp=sharing', '_blank');
  };

  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
  <div className="downloadCV" onClick={handleDownload} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
    <FaDownload style={{ marginRight: '8px' }} />
    <p>Download my Resume</p>
  </div>
</div>

  );
}  

export default DownloadCV;
