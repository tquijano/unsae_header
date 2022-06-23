import React from 'react'
import './GeneralInfo.scss'
import GInfoConceptual from '../../molecules/gInfoConceptual/GInfoConceptual'
import GInfoGoals from '../../molecules/gInfoGoals/GInfoGoals'
import GInfoJustification from '../../molecules/gInfoJustification/GInfoJustification'
import GInfoModels from '../../molecules/gInfoModels/GInfoModels'

const GeneralInfo = () => {
  return (
    <div className="generalInfo-container">
      <GInfoJustification />
      <GInfoConceptual />
      <GInfoGoals />
      <GInfoModels />
    </div>
  )
}

export default GeneralInfo