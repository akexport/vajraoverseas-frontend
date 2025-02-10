import { Children, useEffect } from "react";
import ReactDOM from "react-dom";

const ShowPopup = ({closePopup, children, handleCloseButton}) => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return ReactDOM.createPortal(
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">{children}
                {handleCloseButton}
            </div>
        </>,
        document.querySelector(".myPortalModalDiv")
    );
};

export default ShowPopup