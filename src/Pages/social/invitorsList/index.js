import React, { useEffect, useState } from 'react'
import styles from "./list.module.css";
import InvitorItem from './invitorItem';
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';


const InvitorsList = ({data}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1300);

    }

  }, [isLoading])

  return (
    <div className={`${styles.container}`}>
      {
        isLoading && 
        <InsideBounce />
      }
      
        <h1 className={styles.header_line}>{data.length} travelers are looking for <span>companions</span></h1>

      {data.map((invite, key) => <InvitorItem key={key} invite={invite} />)}
    </div>
  )
}

export default InvitorsList