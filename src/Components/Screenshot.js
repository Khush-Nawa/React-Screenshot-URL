import React, { useState } from 'react';

function App() {
  // State variables to store URL and screenshot image
  const [url, setUrl] = useState('');
  const [screenshot, setScreenshot] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Screenshot API token for authentication
    const token = "2K4MEXV-ZGE4P7Y-QWK38HG-R6K1HXX";

    // Construct the API URL with the token and entered URL
    const apiUrl = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${url}`;

    try {
      // Fetch the screenshot from the API
      const response = await fetch(apiUrl);
      
      // Parse the JSON response
      const data = await response.json();
      
      // Log the response data (you can remove this in production)
      console.log(data);

      // Set the retrieved screenshot URL in the state
      setScreenshot(data.screenshot);
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error(error);
    }
  };

  return (
    <div className="container my-3">
      <div className="card border-dark container" style={{ maxWidth: '58rem' }}>
        <div className="card-header bg-Secondary"> <strong>Screenshot from URL</strong></div>
        <div className="card-body">
          <form className="my-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="url"
                placeholder="Enter Url"
                required
                className="form-control"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <button className="btn btn-danger" type="submit">Take Screenshot</button>
            </div>
          </form>
          <div className="container my-3">
            {/* Display the screenshot image if available */}
            {screenshot && <img className="rounded border border-dark" id="img" src={screenshot} alt="Screenshot" width="90%" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
