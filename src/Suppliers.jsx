import React, { useState } from 'react'
import { suppliersData } from './data/suppliersData';

function Suppliers() {

    const [suppliers, setsuppliers] = useState(suppliersData)
    const deleteSuppliers = (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            var filteredSuppliers = suppliers.filter(q => q.id !== id);
            setsuppliers([...filteredSuppliers])
        }
    }
    const [sortAlphabetically, setAlphabetically] = useState(true);
    const sortSuppliers = () => {
        const sortedSuppliers = [...suppliers];
        if (sortAlphabetically) {
            sortedSuppliers.sort((a, b) => a.companyName.localeCompare(b.companyName));
        } else {
            sortedSuppliers.sort((a, b) => b.companyName.localeCompare(a.companyName));
        }
        setsuppliers(sortedSuppliers);
        setAlphabetically(!sortAlphabetically);
    };
    


    return (<>
        <h1>Length: {suppliers.length}</h1>
        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th onClick={sortSuppliers}>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteSuppliers(item.id)} className='w3-button w3-red'>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Suppliers