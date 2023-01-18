import "../../src/style/modal.css";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";

const Modal = ({ds, setShowmodal}) => {

  const style = {
    display: ds ? "block" : "none",
  }

  return (

    <div className="modal" style={{display: ds ? "block" : "none"}} onClick={()=>setShowmodal(false)}>
      <div class="modal-dialog" role="document" onClick={(e)=>{e.stopPropagation()}}>
        <div class="modal-content" >
          <div class="d-flex justify-content-end">
            <button className="close" onClick={()=>setShowmodal(false)} >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="d-flex align-items-center py-3 flex-column">
            <p className="fs-3 py-3">Join Medium.</p>
            <button className="border rounded-5 py-1 px-3 bg-light">
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
            <p className="py-3">
              Already have an account?{" "}
              <a className="text-success fw-bold text-decoration-none signin" href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?operation=register&state=google-%7Chttps%3A%2F%2Fmedium.com%2F%3Fsource%3Dregister--------------------------lo_home_nav-----------%7Cregister&access_type=online&client_id=216296035834-k1k6qe060s2tp2a2jam4ljdcms00sttg.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmedium.com%2Fm%2Fcallback%2Fgoogle&response_type=id_token%20token&scope=email%20openid%20profile&nonce=a5dcbeeea782e8737e355d5ec9d3eeee41745788922eefce1abbe8380398b160&service=lso&o2v=1&flowName=GeneralOAuthFlow">
                Sign in
              </a>
            </p>
            <p className="term">
              Click “Sign Up” to agree to Medium’s <span className="text-decoration-underline">Terms of Service</span> and
              acknowledge that Medium’s <span className="text-decoration-underline">Privacy Policy</span> applies to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
