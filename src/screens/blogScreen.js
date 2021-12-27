import React,{useEffect} from 'react'
import  { useLocation } from 'react-router-dom'

export default function BlogScreen(props) {
  const location = useLocation();
  useEffect(() => {
    props.setPage(location.pathname);
  }, [props,location]);
    return (
        <div>
          blog Screen  
        </div>
    )
}
