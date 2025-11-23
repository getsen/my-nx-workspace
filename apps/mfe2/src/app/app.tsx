// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Button, Card, Badge } from '@react-demo/components';
import { formatCurrency, formatBytes, multiply } from '@react-demo/utils';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const handleButtonClick = () => {
    alert('Button clicked from MFE2!');
  };

  return (
    <div>
      {/* <NxWelcome title="@react-demo/mfe2" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>MFE2 - Shared Library Demo</h2>
              <Card
                title="Advanced Components"
                description="MFE2 using the same shared library"
              >
                <Button label="Info Button" onClick={handleButtonClick} />
                <Button
                  label="Danger Button"
                  variant="danger"
                  style={{ marginLeft: '1rem' }}
                />
                <div style={{ marginTop: '1rem' }}>
                  <Badge label="Error" variant="error" />
                  <Badge
                    label="Info"
                    variant="info"
                    style={{ marginLeft: '0.5rem' }}
                  />
                </div>
              </Card>
              <br />
              <Card
                title="Formatting Utilities Demo"
                description="Using shared utils from @libs/utils"
              >
                <p>
                  <strong>Currency Format:</strong> {formatCurrency(1299.99)}
                </p>
                <p>
                  <strong>Bytes Format:</strong> {formatBytes(1024 * 1024 * 5)}
                </p>
                <p>
                  <strong>Math Utilities:</strong> 15 × 3 = {multiply(15, 3)}
                </p>
              </Card>
              <br />
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <h2>MFE2 - Page 2</h2>
              <Card
                title="Page 2 Content"
                description="Another page with shared components"
              >
                <Button
                  label="Go Back"
                  variant="secondary"
                  onClick={() => (window.location.href = '/')}
                />
                <Button
                  label="Disabled Button"
                  disabled
                  style={{ marginLeft: '1rem' }}
                />
              </Card>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
