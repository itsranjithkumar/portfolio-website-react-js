import { FaDownload } from 'react-icons/fa';

const DownloadCV = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1sFdBbMjpl7gryElbCyui2ft-mSdql9JC/view?usp=sharing', '_blank');
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        marginTop: '20px', 
        height: '150px',
      }}
    >
      <div 
        className="downloadCV" 
        onClick={handleDownload} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          padding: '15px 30px', 
          background: 'linear-gradient(45deg, #6a11cb, #2575fc)', // Gradient background
          color: '#fff', 
          borderRadius: '30px', // Fully rounded corners
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Shadow effect for depth
          transition: 'all 0.3s ease', // Smooth transition for hover effect
          height: '50px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'; // Slightly enlarge on hover
          e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)'; // Enhance shadow on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset size
          e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)'; // Reset shadow
        }}
      >
        <FaDownload style={{ marginRight: '10px' }} />
        <p style={{ margin: 0 }}>Download my Resume</p>
      </div>
    </div>
  );
};

export default DownloadCV;
