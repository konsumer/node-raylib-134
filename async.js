import r from 'raylib'

// async wait
export const wait = time => new Promise((resolve, reject) => { setTimeout(resolve, time) })

let i = 0
export async function MaintainFPS (targetFPS) {
  // only do it every-other frame
  const timetarget = 1 / targetFPS
  const timeframe = r.GetFrameTime()
  const waittime = (timetarget - timeframe) * 2000 // 1000 is for conversion to ms, * 2 is because it seems to draw 2 frames (1 slower, 1 very fast)
  const realFPS = (1 / timeframe) * 2 // it seems to draw 2 frames (1 slower, 1 very fast)
  if (waittime > 0) {
    await wait(waittime)
  }

  // this should show a TICK every second
  console.log(i++ % targetFPS === 0 ? 'TICK' : '')
  return r.WindowShouldClose() ? false : realFPS
}
