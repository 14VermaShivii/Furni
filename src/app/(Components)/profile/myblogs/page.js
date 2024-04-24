"use client"
import React from "react";
import { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({ //popup sweetalert 2
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});

// const deleteurl=`${URL}blog/deleteBlog`
export default function Myblogs() {
    const URL = process.env.BASE_URL
    console.log(URL)

    async function getMyBlogs() {
        console.log("my function")
        const url = `${URL}blog/getallblog`;
        try {
            const res = await axios({
                method: 'get',
                url: url
            });
            console.log(res.data.blogs)
            let data = res.data;
            setData(res.data.blogs)


        } catch (error) {
            console.error(error.response);
            return error.response;
        }
    }
    const deleteBlog = async (e) => {      //sweetalert2
        console.log("deleteblog")
        console.log(e.currentTarget.getAttribute("data-id"))

        const id = e.currentTarget.getAttribute("data-id")
        console.log(id, "Blog id")
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                try {
                    let response = axios.delete(`${URL}blog/Blog/${id}`)
                    console.log("post deleted:", id);
                    // setData(data.filter((post) => post.id !== id));
                    getMyBlogs()
                } catch (error) {
                    console.log(error, "Error message")
                    console.error("Error deleting post :", error);
                }
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });


        // })
    }
    useEffect(() => {
        getMyBlogs()
    }, [])


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
                <div> <FontAwesomeIcon icon={faPencil} href="/createblog" /> <FontAwesomeIcon icon={faTrash}
                    onClick={deleteBlog} data-id={row._id} /> </div>

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