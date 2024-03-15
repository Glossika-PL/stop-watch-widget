import { useEffect, useState, useRef,useCallback } from 'react'

const useCreateTimer = ()=>{
    const [start, setStart] = useState(false)

    const [time, setTime] = useState(0)
  
    const [recordTime, setRecordTime] = useState<{ id: number; time: number }[]>([
      { id: 1, time: 0 },
    ])
  
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const startTimeRef = useRef<number>(0)
    const startRecordTimeRef = useRef<number | null>(null)
  
    const onStart = () => {
      setStart(true)
      startTimeRef.current = Date.now() - time
      startRecordTimeRef.current = Date.now() - recordTime[0].time
    }
  
    const onStop = () => {
      if (start && timerRef.current) {
        clearInterval(timerRef.current)
      }
      setStart(false)
    }
  
    const onReset = useCallback(() => {
      setTime(0)
      setRecordTime([{ id: 1, time: 0 }])
      setStart(false)
    },[])
  
    const onLap = useCallback(() => {
      setRecordTime(prev => [{ id: prev.length + 1, time: 0 }, ...prev])
      startRecordTimeRef.current = Date.now()
    },[])

    useEffect(
        function createTimer() {
          if (start) {
            timerRef.current = setInterval(() => {
              setTime(Date.now() - startTimeRef.current)
              setRecordTime(prev => {
                prev[0].time = startRecordTimeRef.current
                  ? Date.now() - startRecordTimeRef.current
                  : time
                return prev
              })
            }, 10)
          }
    
          return function cleanup() {
            if (timerRef.current) {
              clearInterval(timerRef.current)
            }
          }
        },
        [start, time],
      )
    

    return [onStart, onStop, onReset, onLap, recordTime, time, start] as const
}

export default useCreateTimer