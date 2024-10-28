const IframeComponent = () => {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <iframe
          src="https://app.garde-robe.com/version-81fld/google-signin"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Google Sign In"
        />
      </div>
    );
  };

  export default IframeComponent;