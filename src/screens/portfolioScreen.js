import React,{useEffect} from 'react'
import  { useLocation } from 'react-router-dom'

export default function PortfolioScreen(props) {
    const location = useLocation();

    useEffect(() => {
        props.setPage(location.pathname);
      }, [props,location]);

    return (
        <div>
            portfolioScreen
        </div>
    )
}
