import React from 'react';
import './App.css';

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                </tr>
                {
                    data.map(i => (
                        <tr key={i.id}>
                            <td>{i.id+1}</td>
                            <td>{i.first_name}</td>
                            <td>{i.email}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}

export default Table
