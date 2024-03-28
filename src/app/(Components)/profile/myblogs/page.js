"use client"
import React from "react";
import { useState,useEffect } from "react"
import DataTable from "react-data-table-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash ,faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function myblogs() {
    const columns = [
        {
            name: 'blogTitle',
            selector: row => row.blogTitle,
            sortable: true
        },
        {
            name: 'blogDescription',
            selector: row => row.blogDescripton,
            sortable: true
        },
        {
            name: 'category',
            selector: row => row.category,
            sortable: true
        },
        {
            name: 'action',
            selector:row =>row.action,
            sortable:true,
            cell:row =>
            <div> <FontAwesomeIcon icon={faPencil}/> <FontAwesomeIcon icon={faTrash}/></div>
           
        }
    ];
    const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      
      try {
        const response = await axios.get('http://localhost:7000/api/blog/getallblog');
        console.log(response.data.blogs)

        setData(response.data.blogs);
      } catch (error) {
        console.error(error.message);
      }
     
    }

    fetchData();
  }, []);

  

    // const data = [
    //     {
    //         id: 1,
    //         blogTitle: 'World Sports Day',
    //         blogdescription: 'In this blog we will discuss sports around the World',
    //         category: 'sports',
    //         action:<FontAwesomeIcon icon={faPencil} />,
    //         // <FontAwesomeIcon icon={faTrash} />
    //     },
    //     {
    //         id: 2,
    //         blogTitle: 'inside story of Tech World',
    //         blogdescription: 'discuss about web technologies',
    //         category: 'tech',
    //         action:<FontAwesomeIcon icon={faTrash} />
    //     },
    //     {
    //         id: 3,
    //         blogTitle: 'know about your financial stability',
    //         blogdescription: 'there are so many ways to manage finencial conditions',
    //         category: 'finance'
    //     },
    //     // {
    //     //     id: 4,
    //     //     blogTitle: '',
    //     //     blogdescription: '',
    //     //     category: ''
    //     // },
    //     // {
    //     //     id: 5,
    //     //     blogTitle: '',
    //     //     blogdescription: '',
    //     //     category: ''
    //     // },
    // ]
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
                <div className="text-end"><input type="text"   onChange={handleFilter} /></div>
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