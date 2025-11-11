import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RoleList = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const getRoles = () => {
            axios({
                url: `${baseUrl}/role/`,
                method: "GET",
            })
            .then((res) => {
                console.log(res);
                setRoles(res.data.roles || []);
            })
            .catch((err) => {
                console.log(err);
            });
        };

        getRoles();
    }, [baseUrl]);

    const deleteRole = (id) => {
        if (confirm("Are you sure to delete this role?")) {
            axios({
                url: `${baseUrl}/role/delete`,
                method: "DELETE",
                data: { id: id }
            })
            .then((res) => {
                console.log(res);
                // refresh role list
                axios({
                    url: `${baseUrl}/role/`,
                    method: "GET",
                })
                .then((res2) => {
                    setRoles(res2.data.roles || []);
                });
            })
            .catch(err => console.log(err));
        }
    };

    return (
        <>
            <section className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Role List</h2>
                    <Link className="btn btn-primary" to="/role/create">
                        <i className="bi bi-plus-circle me-2" />Add New Role
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map(role => (
                                <tr key={role.id}>
                                    <th scope="row">{role.id}</th>
                                    <td>{role.name}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/role/edit/${role.id}`}>Edit</Link>
                                        <button
                                            className='btn btn-danger ms-2'
                                            onClick={() => deleteRole(role.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default RoleList;
