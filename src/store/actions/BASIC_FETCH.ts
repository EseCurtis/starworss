const BASIC_FETCH = async (URL: string) => {
    return fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
  
  export default BASIC_FETCH;
  