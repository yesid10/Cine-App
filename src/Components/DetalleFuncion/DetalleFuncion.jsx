import React, { useContext, useEffect } from 'react'
import DetailComponent from '../detailsComponent/DetailComponent'
import { searchParamsContext } from '../../Routes/AppRouter';
import { useNavigate } from 'react-router-dom';



const DetalleFuncion = () => {
  const { filters } = useContext(searchParamsContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!Object.entries(filters)===0) {
      navigate('/')
    }

  }, [filters, navigate])
  return (
    <div>
      <DetailComponent/>
    </div>
  )
}

export default DetalleFuncion