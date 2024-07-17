import styles from "./Modal.module.css"
import  ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Fragment, useRef } from "react";

const ModalOverlay = props => {

    const parentRef = useRef()
    const childRef = useRef()

    const clickOutsideModalHandler = (e) => {


        if(e.target.contains(childRef.current) && e.target !== childRef.current){
            return props.onClose ? props.onClose() : null;
        }

        return null;
    }

    const content = (
        <div style={{ backgroundColor: props.bgColor }} ref={parentRef} onClick={clickOutsideModalHandler} className={styles.modal_container}>
            <div 
                // style={{ width: props.width, minHeight: props.height, backgroundColor: props.color, padding: props.padding }} 
                className={`${styles.modal_content_wrapper} ${props.fullSize && styles.full_width}`}
                ref={childRef}
            >
                {props.children}
            </div>
        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

const Modal = props => {
    return <Fragment>
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={300}
        >
            <ModalOverlay {...props} />
        </CSSTransition>
    </Fragment>
}

export default Modal;

