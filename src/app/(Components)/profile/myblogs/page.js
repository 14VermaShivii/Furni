"use client"
import React from "react";
import { useState } from "react"
import DataTable from "react-data-table-component"

export default function Myblogs() {
    const columns = [
        {
            name: 'blogTitle',
            selector: row => row.blogTitle,
            sortable: true
        },
        {
            name: 'blogDescription',
            selector: row => row.blogdescription,
            sortable: true
        },
        {
            name: 'category',
            selector: row => row.category,
            sortable: true
        }
    ];
    const data = [
        {
            id: 1,
            blogTitle: 'World Sports Day',
            blogdescription: 'In this blog we will discuss sports around the World',
            category: 'sports'
        },
        {
            id: 2,
            blogTitle: 'inside story of Tech World',
            blogdescription: 'discuss about web technologies',
            category: 'tech'
        },
        {
            id: 3,
            blogTitle: 'know about your financial stability',
            blogdescription: 'there are so many ways to manage finencial conditions',
            category: 'finance'
        },
        // {
        //     id: 4,
        //     blogTitle: '',
        //     blogdescription: '',
        //     category: ''
        // },
        // {
        //     id: 5,
        //     blogTitle: '',
        //     blogdescription: '',
        //     category: ''
        // },
    ]
    const [records, setRecords] = useState(data)
    function handleFilter(event) {
        const newData = data.filter(row =>{
            return row.name.tolowerCase().includes(event.target.value.tolowerCase())
        })
        setRecords(newData)
     }
    return (
        <>
            <div className="container mt-5">
                <div className="text-end"><input type="text" onChange={handleFilter} /></div>
                <DataTable columns={columns}
                    data={data}
                    selectableRows
                    fixedHeader
                    pagination
                >
                </DataTable>

            </div>

        </>
    )
}