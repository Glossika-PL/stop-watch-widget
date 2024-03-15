import '@/styles/laps.scss'
import formatTime from '@/utils/format-time'
import React from 'react'

type LapsComponentProps = {
  id: number
  time: number
}

const LapsComponent: React.FC<LapsComponentProps> = React.memo(
  function LapsComponent(props) {
    const { id, time } = props

    return (
      <div className="laps">
        <p>{`Lap ${id}:`}</p>
        <p>{formatTime(time)}</p>
      </div>
    )
  },
)

export default LapsComponent
