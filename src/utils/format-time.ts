const formatTime = (time: number) => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, '0')
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, '0')
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0')
    const mSecond = String(Math.floor((time % 1000) /10 )).padStart(2, '0')
    return Number(hours) > 0
      ? `${hours}:${minutes}:${seconds}.${mSecond}`
      : `${minutes}:${seconds}.${mSecond}`
  }

  export default formatTime