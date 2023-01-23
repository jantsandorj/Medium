export const User = () => {
  const [user, setUser] = 
    fetch("http://192.168.1.198:4040/api/users",(

  ))

    return (
    <div className="col-10 d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-end gap-2">
        <div className="d-flex justify-content-between w-100">
          <label className="" for="uname">Username</label>
          <input type="text" id="uname" name="uname" className="" />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="pass">Password</label>
          <input type="password" id="pass" name="pass" className="w-75" />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="fname">Firstname</label>
          <input type="text" id="fname" name="fname" className="w-75" />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="lname">Lastname</label>
          <input type="text" id="lname" name="lname" className="w-75" />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="img">Image</label>
          <input type="file" id="img" name="img" className="w-75" />
        </div>
        <div className="gap-3 d-flex justify-content-end">
          <label className="w-25" for="organiz">Organization</label>
          <input type="text" id="organiz" name="organiz" className="w-75" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};
