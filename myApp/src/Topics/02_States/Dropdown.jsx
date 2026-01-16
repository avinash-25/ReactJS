import { useState } from "react";

const Dropdown = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <h1>Drop down task</h1>
            <button onClick={() => setToggle(!toggle) } >{toggle? "Hide": "Show"}</button>
            {toggle &&
                <p>
                    <mark>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quibusdam voluptatem, hic architecto obcaecati molestias rerum similique totam iure quasi voluptas, neque assumenda fugit? Magni maxime aspernatur quis! Pariatur, eaque.
                        Aperiam vero id optio minima veritatis culpa, iure incidunt molestiae, rerum, voluptatem blanditiis inventore odio quia? Blanditiis veritatis, eligendi error animi quos voluptatibus nisi, porro illum excepturi, quasi architecto tenetur?
                        Voluptas, labore officiis. Cupiditate architecto, autem perferendis, sunt molestias sit doloribus at aspernatur omnis fugit sequi atque beatae amet vero illo unde quas ipsa aliquid nulla. Odit fugiat laboriosam itaque?
                    </mark>
            </p>}
        </div>
    );
};

export default Dropdown;