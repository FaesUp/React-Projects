import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="FaesRock">
                Fabián González
            </TwitterFollowCard>
            <TwitterFollowCard userName="Faes_up">
                Fabián González 
            </TwitterFollowCard>
            <TwitterFollowCard userName="Faesgofu">
                Fabián González
            </TwitterFollowCard>
        </section>
    )
}