import { useContext } from 'react'
import { CountdownContainer, Separator } from './styles'
import { CountDownContext } from '../../../../contexts/CountDownContext'

export function Countdown() {
  const { minutes, seconds } = useContext(CountDownContext)

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
