import React from 'react'
import Combating from './components/Combating/Combating'
import Clients from './components/FirstComponent/Clients'
import Innovation from './components/Innovation/Innovation'
import Limitless from './components/Limitless/Limitless'
import Logos from './components/LogoCompany/Logos'
import LogoText from './components/LogoText/LogoText'
import NewsLetter from './components/NewsLetter/NewsLetter'
import TeamSpiritNew from './components/TeamSpiritNew/TeamSpirit'
import Ideation from './components/ThirdComponent/Ideation'

const WorkWithClient = () => {
    return (
        <div>
            <Clients />
            <Combating />
            <Ideation />
            <Limitless />
            <Innovation />
            <LogoText />
            <Logos />
            <TeamSpiritNew />
            <NewsLetter />
        </div>
    )
}

export default WorkWithClient
