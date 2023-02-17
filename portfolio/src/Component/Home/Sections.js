import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";

const Sections =({heading, txt, type, wantBtn, btnText, to})=>{
    const [cls, setCls] = useState();
    const [btn, setBtn] = useState();
    useEffect(() => {
        if (type === "ow") {
          setCls("section ow");
          setBtn("link link-secondary")
        } else {
          setCls("section")
          setBtn("link link-primary")
        }
      }, [type]);
    
      return (
        <div><section className={cls}>
          <div className="container container-center">
            <h1>{heading}</h1>
            <p>
              {txt}
            </p>
    
            {wantBtn === "yes" ?
              <div className="btn">
                <NavLink className={btn} to={to}>{btnText}</NavLink>
              </div> : ""}
    
          </div>
        </section></div>
      )
    }
    
    export default Sections;