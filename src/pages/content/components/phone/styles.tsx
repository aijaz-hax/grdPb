interface StylesType {
    form: React.CSSProperties;
    group: React.CSSProperties;
    select: React.CSSProperties;
    input: React.CSSProperties;
    button: React.CSSProperties;
    buttonHover: React.CSSProperties;

    
}




export const styles: StylesType= {
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      margin: '0 auto',
    },
    group: {
      display: 'flex',
      alignItems: 'center',
    },
    select: {
      marginRight: '10px',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      flex: 1,
    },
    input: {
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      flex: 2,
    },
    button: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#218838',
    },
  };