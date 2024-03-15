'use client'

import Button from '@/components/buttons/buttons'
import LapsComponent from '@/components/laps/laps-component'
import { ButtonStyle } from '@/enum/component'
import useCreateTimer from '@/hooks/use-create-timer'
import '@/styles/stop-watch-app.scss'
import formatTime from '@/utils/format-time'

export default function StopWatchApp() {
  const [onStart, onStop, onReset, onLap, recordTime, time, start] =
    useCreateTimer()

  return (
    <main className="main">
      <h2>{formatTime(time)}</h2>
      <div className="buttonGroup">
        {(start || time === 0) && (
          <Button
            handleClick={onLap}
            disabled={time === 0}
            buttonStyle={ButtonStyle.Lap}
          >
            Lap
          </Button>
        )}
        {!start && time > 0 && (
          <Button handleClick={onReset} buttonStyle={ButtonStyle.Reset}>
            Reset
          </Button>
        )}
        <Button
          handleClick={start ? onStop : onStart}
          buttonStyle={start ? ButtonStyle.Stop : ButtonStyle.Start}
        >
          {start ? 'Stop' : 'Start'}
        </Button>
      </div>
      <div className="lapsGroup">
        {time > 0 &&
          recordTime.map(({ id, time }) => {
            return <LapsComponent key={id} id={id} time={time} />
          })}
      </div>
    </main>
  )
}
