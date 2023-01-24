import { useEffect, useState } from "react";

export default function Showusers({ data, getdata }) {
  const handleDelete = (_id) => {
    fetch(`https://medium-api-psi.vercel.app/api/users?id=${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        getdata();
      });
  };
  return (
    <div>
      <div className="row py-3">
        <div className="table-responsive">
          <table className="table table-strip">
            <thead className="border-bottom border-3">
              <th>No</th>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>UserType</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>UserImg</th>
              <th>Organization</th>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    _id,
                    username,
                    password,
                    userType,
                    firstName,
                    lastName,
                    userImg,
                    organization,
                  },
                  index
                ) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{_id}</td>
                      <td>{username}</td>
                      <td>{password}</td>
                      <td>{userType}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>
                        <img style={{ width: "20px" }} src={userImg}></img>
                      </td>
                      <td>{organization}</td>
                      <td>
                        <div className="d-flex">
                          <button className="btn btn-warning">Edit</button>
                          <button
                            onClick={(e) => {
                              handleDelete(_id);
                            }}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
