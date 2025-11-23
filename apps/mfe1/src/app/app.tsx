// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Button, Card, Badge } from '@react-demo/components';
import { capitalize, formatDate, sum } from '@react-demo/utils';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const handleButtonClick = () => {
    alert('Button clicked from MFE1!');
  };

  return (
    <div>
      {/* <NxWelcome title="@react-demo/mfe1" /> */}

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
              <h2>MFE1 - Shared Library Demo</h2>
              <Card
                title="Component Examples"
                description="Using shared components from lib"
              >
                <Button label="Primary Button" onClick={handleButtonClick} />
                <Button
                  label="Secondary Button"
                  variant="secondary"
                  style={{ marginLeft: '1rem' }}
                />
                <div style={{ marginTop: '1rem' }}>
                  <Badge label="Success" variant="success" />
                  <Badge
                    label="Warning"
                    variant="warning"
                    style={{ marginLeft: '0.5rem' }}
                  />
                </div>
              </Card>
              <br />
              <Card
                title="Utility Functions Demo"
                description="Using shared utils from @libs/utils"
              >
                <p>
                  <strong>String Utilities:</strong> "{capitalize('hello')}"
                </p>
                <p>
                  <strong>Date Formatting:</strong> {formatDate(new Date())}
                </p>
                <p>
                  <strong>Math Utilities:</strong> Sum of [1,2,3,4,5] ={' '}
                  {sum([1, 2, 3, 4, 5])}
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
              <h2>MFE1 - Page 2</h2>
              <Card
                title="Page 2 Content"
                description="Another page with shared components"
              >
                <Button
                  label="Go Back"
                  variant="primary"
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
