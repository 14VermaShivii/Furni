"use client"
import React from "react";
import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const deleteUrl=`${URL}blog/deleteBlog`
export default function Myblogs() {
    const URL = process.env.BASE_URL
    console.log(URL)

    async function getMyBlogs() {
        console.log("my function")
        try {
            const res = await axios({
                method: 'get',
                url: URL
            });
            console.log(res.data.blogs)
            let data = res.data;
            setData(res.data.blogs)


        } catch (error) {
            console.error(error.response);
            return error.response;
        }
    }

    const deleteBlog = async (e) => {
        console .log("deleteblog")
        // const id = e.currentTarget.getAttribute("data-id")
        // console.log(id, "Blog id")
        //     .then((result) => {
        //         (result.isConfirmed)
        //         console.log(id, 'function 1')
        //         try {
        //             let response = axios.delete(`${URL}blog/deleteBlog/${id}`)
        //             console.log("post deleted:", id);
        //          setData(data.filter((post) => post.id !== id));
        //         //  getMyBlogs()
        //         } catch (error) {
        //             console.log(error, "Error message")
        //             console.error("Error deleting post :", error);
        //         }

        //     })
    }
    useEffect(() =>{
        getMyBlogs()
    },[])




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
            selector: row => row.action,
            sortable: true,
            cell: row =>
                <div> <FontAwesomeIcon icon={faPencil} /> <FontAwesomeIcon icon={faTrash} onClick={deleteBlog} data-id={row._id}/> </div>

        }
    ];



    const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = `${URL}blog/getallblog`;
    //     }
    //     fetchData();
    // }, []);




    const [records, setRecords] = useState(data)
    function handleFilter(event) {
        const newData = data.filter(row => {
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