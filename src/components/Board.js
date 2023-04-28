import React from "react";

const Board = ({objList}) => {

    return (<table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {objList.map((row, index) => (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.score}</td>
                </tr>
            ))}
        </tbody>
    </table>  
    )
}

export default Board