import r from 'raylib'

// async wait
export const wait = time => new Promise((resolve, reject) => { setTimeout(resolve, time) })

// try to hit target FPS async
export async function MaintainFPS (targetFPS) {
  const timetarget = 1 / targetFPS
  const timeframe = r.GetFrameTime()
  const waittime = (timetarget - timeframe) * 1000 * 30
  if (waittime > 0) {
    console.log(waittime)
    await wait(waittime)
  }
  return !r.WindowShouldClose()
}
