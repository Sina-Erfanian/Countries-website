import {useState} from "react"

function Nav() {
  const [mode , setMode] = useState(true)
  if(mode) {
    document.body.classList.remove("dark")
  }else {
    document.body.classList.add("dark");
  }
  function themeHandler () {
    setMode(!mode)
  }
    return (
      <>
        <div className="container-nav">
          <div className="left-side">
            <p>Where in the world ?</p>
          </div>
          {mode ? (
            <div className="right-side" onClick={themeHandler}>
              <div className="wrapper-nav-theme">
                <i className="fa-solid fa-sun"></i>
                <p>Light Mode</p>
              </div>
            </div>
          ) : (
            <div className="right-side" onClick={themeHandler}>
              <div className="wrapper-nav-theme">
                <i className="fa-solid fa-moon"></i>
                <p>Dark Mode</p>
              </div>
            </div>
          )}
        </div>
      </>
    );
}


export default Nav
