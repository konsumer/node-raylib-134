import r from 'raylib'

// async wait
export const wait = time => new Promise((resolve, reject) => { setTimeout(resolve, time) })

// try to hit target FPS, returns current FPS (for render while-loop)
export async function MaintainFPS (targetFPS) {
  // TODO: math here that gets right timeout
  const fps = r.GetFPS()
  await wait(100)
  if (!r.WindowShouldClose()) {
    return true
  } else {
    return false
  }
}
