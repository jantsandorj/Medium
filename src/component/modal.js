import "../../src/style/modal.css";
import { TfiEmail } from "react-icons/tfi";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ ds, setShowmodal }) => {
  const navigate = useNavigate()
  const userdata = {
    user: "jack_sparrow@gmail.com",
    pass: "Jack1234",
  };
  
  const CheckUser = () => {
    
    if (user === userdata.user && pass === userdata.pass) {
      toast("Success", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } else {
      console.log("haha");
      toast.error("Invalid username or password !",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        navigate("/admin")
      
    }
  };
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div
      className="modal"
      style={{ display: ds ? "block" : "none" }}
      onClick={() => setShowmodal(false)}
    >
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div
        class="modal-dialog"
        role="document"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div class="modal-content">
          <div class="d-flex justify-content-end">
            <button className="close" onClick={() => setShowmodal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="d-flex align-items-center flex-column">
            <p className="fs-3 pt-3">Join Medium.</p>
            <div className="d-flex flex-column gap-2 py-2">
              <div className="">
                <label className="sans-it py-1">Username</label>
                <div className="d-flex border-bottom form-control">
                  <span>
                    <BiUserCircle style={{ color: "grey" }} />
                  </span>
                  <input
                    type="email"
                    className="border-0 logInput"
                    placeholder=" Type your username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="sans-it py-1">Password</label>
                <div className="d-flex border-bottom form-control">
                  <span>
                    <RiLockPasswordFill style={{ color: "grey" }} />
                  </span>
                  <input
                    type="password"
                    className="border-0 logInput"
                    placeholder="Type your password"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                      console.log(pass);
                    }}
                  />
                </div>
              </div>
              <a
                className="d-flex justify-content-end sans-it forgot text-decoration-none text-dark"
                href="https://help.medium.com/hc/en-us/requests/new?ticket_form_id=9455427953559&form=true&source=login--------------------------lo_home_nav-----------"
              >
                Forgot password?
              </a>
              <button className="btn bg-warning text-light" onClick={CheckUser}>
                Login
              </button>
            </div>
            <button className="border rounded-5 py-1 px-4 my-3 bg-light">
              <a
                className=" d-flex gap-3 text-decoration-none text-dark"
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?operation=register&state=google-%7Chttps%3A%2F%2Fmedium.com%2F%3Fsource%3Dregister--------------------------lo_home_nav-----------%7Cregister&access_type=online&client_id=216296035834-k1k6qe060s2tp2a2jam4ljdcms00sttg.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmedium.com%2Fm%2Fcallback%2Fgoogle&response_type=id_token%20token&scope=email%20openid%20profile&nonce=a5dcbeeea782e8737e355d5ec9d3eeee41745788922eefce1abbe8380398b160&service=lso&o2v=1&flowName=GeneralOAuthFlow"
              >
                <span>
                  <TfiEmail />
                </span>{" "}
                Sign up with email
              </a>
            </button>
            <p className="">
              Already have an account?{" "}
              <a
                className="text-success fw-bold text-decoration-none signin"
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?operation=register&state=google-%7Chttps%3A%2F%2Fmedium.com%2F%3Fsource%3Dregister--------------------------lo_home_nav-----------%7Cregister&access_type=online&client_id=216296035834-k1k6qe060s2tp2a2jam4ljdcms00sttg.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmedium.com%2Fm%2Fcallback%2Fgoogle&response_type=id_token%20token&scope=email%20openid%20profile&nonce=a5dcbeeea782e8737e355d5ec9d3eeee41745788922eefce1abbe8380398b160&service=lso&o2v=1&flowName=GeneralOAuthFlow"
              >
                Sign in
              </a>
            </p>
            <p className="term pb-3">
              Click “Sign Up” to agree to Medium’s{" "}
              <span className="text-decoration-underline">
                Terms of Service
              </span>{" "}
              and acknowledge that Medium’s{" "}
              <span className="text-decoration-underline">Privacy Policy</span>{" "}
              applies to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
