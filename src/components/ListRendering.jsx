import { useEffect } from "react";

const ListRendering = () => {
    let arr = ["Ahmed", "Mohamed", "Ali", "Omar"];
    return(
        <div>


            <li>
                {
                    arr.map((name)=>
                    <p>{name}</p>)
                }
            </li>
        </div>
    )

}
export default ListRendering;