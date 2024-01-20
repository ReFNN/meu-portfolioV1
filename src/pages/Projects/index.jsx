import React from 'react'
import './styles.scss'

import LeftMenu from '../../components/LeftMenu'
import RightProjects from './RightProjects'

export default function Projects() {

  return (
    <main className='padding-calc'>
            <div className='centerContainer'>
                <LeftMenu actRoute={'/projetos'} />
                <RightProjects />
            </div>
        </main>
  )
}
