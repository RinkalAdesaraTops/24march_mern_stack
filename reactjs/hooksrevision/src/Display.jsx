import React, { memo } from 'react'

const Display = ({alldata}) => {
    console.log('display compo. called..');
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((v, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Display)
