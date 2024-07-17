import styles from "./body.module.css";
import Controllers from "./controllers";
import Comments from "./comments";

const Body = (props) => {


  return (

      <div className={styles.body}>

        <Controllers
          item={props.item}
          onShowMap={props.onShowMap}
          onFilter={props.onFilter}
        />

        {/* <Comments item={props.item} /> */}
      
      </div>

  )
}

  export default Body