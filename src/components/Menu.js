import { useContext } from "react";
import { DataContext } from "../App";

const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={()=> setAppState("quiz")}>เริ่มทำข้อสอบย่อย</button>
        </div>    
    )
}

export default Menu;