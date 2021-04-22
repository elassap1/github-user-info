import React from 'react'
import styled from 'styled-components'
import ChartJS from '../minCard/ChartJS'

const Charting = () => {

  const language = [
    {
      label: 'HTML',
      value: '13'
    },
    {
      label: 'CSS',
      value: '8'
    },
    {
      label: 'JAVASCRIPT',
      value: '78'
    }
  ]


  return (
    <Around>
      <ChartJS type={'doughnut3d'} data={language} />
      <ChartJS type={'column3d'} data={language} />
      <ChartJS type={'doughnut2d'} data={language} />
      <ChartJS type={'doughnut3d'} data={language} />
    </Around>
  )
}

export default Charting

let Around = styled.div`
display: grid;
width: 85% !important;
grid-template-columns: 1fr 1fr;
align-items: center;
>*{
  width: 95% !important;
  margin: 20px
}
@media (max-width: 850px){
  grid-template-columns: 1fr;
}
`