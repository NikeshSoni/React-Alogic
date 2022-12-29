import '../SCSS/App.scss';
import '../SCSS/comman.scss';


const Sign = () => {
    return (
        <div className="sign-wapper text-center sign-bg p-5">
              <div className="data-sign">
                  <h2>KEEP UPDATED ON THE LATEST PRODUCTS</h2>

                  <input className="p-2 col-6  col-md-5 col-lg-3 text-center comman-input m-5" placeholder="Enter your Email Address" type="text"/>

                
              </div>

              <>
               <a className="btn-main text-white" href="#">SIGN UP</a>
              </>
        </div>
    )
}

export default Sign;