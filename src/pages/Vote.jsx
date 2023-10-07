import Table from 'react-bootstrap/Table';
import React from 'react';

function Vote() {
  return (
    <><div className="vote-div">
        <input type='text'></input>
        <input type='submit' placeholder="Vote"></input>
      </div><Table striped>
              <thead>
                  <tr>
                      <th>Index</th>
                      <th>Candidate Name</th>
                      <th>Vote Count</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>0</td>
                      <td>mark</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Jacob</td>
                      <td>0</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Jack</td>
                      <td>0</td>
                  </tr>
              </tbody>
          </Table></>
  );
}

export default Vote;
