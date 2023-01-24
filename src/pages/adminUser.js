import { useEffect, useState } from "react";
import Showusers from "../component/showUsers";

export const User = () => {
  const init = {
    username: "",
    password: "",
    userType: "",
    firstName: "",
    lastName: "",
    userId: "",
    userImg: "",
    organization: "",
  };
  const [user, setUser] = useState(init);
  const [isSaved, setIsSaved] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const onSave = () => {
    fetch("https://medium-api-psi.vercel.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        getData();
      });
    setIsSaved(true);
    setUser(init);
  };

  const getData = () => {
    fetch("https://medium-api-psi.vercel.app/api/users  ")
      .then((res) => res.json())
      .then((dt) => {
        console.log("2");
        setData(dt.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-10 d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-end gap-2">
        <div className="d-flex justify-content-between w-100">
          <label className="" for="uname">
            Username
          </label>
          <input
            type="text"
            id="uname"
            name="uname"
            className=""
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            value={user.username}
          />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="pass">
            Password
          </label>
          <input
            type="password"
            id="pass"
            name="pass"
            className="w-75"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="">
            UserType
          </label>
          <input type="radio" id="type" name="type" className="w-75" />
          <label className="w-25" for="type">
            User
          </label>
          <input type="radio" id="type" name="type" className="w-75" />
          <label className="w-25" for="type">
            Admin
          </label>
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="fname">
            Firstname
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="w-75"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            value={user.firstName}
          />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="lname">
            Lastname
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="w-75"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            value={user.lastName}
          />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="img">
            Image
          </label>
          <input
            type="file"
            id="img"
            name="img"
            className="w-75"
            onChange={(e) => setUser({ ...user, userImg: e.target.value })}
            value={user.userImg}
          />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="organiz">
            Organization
          </label>
          <input
            type="text"
            id="organiz"
            name="organiz"
            className="w-75"
            onChange={(e) => setUser({ ...user, organization: e.target.value })}
            value={user.organization}
          />
        </div>
        <button className="btn btn-primary" onClick={() => onSave()}>
          Submit
        </button>
      </div>
      <div>
        <Showusers data={data} getdata={getData} />
      </div>
    </div>
  );
};
