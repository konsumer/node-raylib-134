import r from 'raylib'
import { MaintainFPS } from './async.js'

const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [async] example - async game-loop')
r.SetTargetFPS(0)

let fps = 0
while(fps = await MaintainFPS(60)) {
  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)
  r.DrawText('Congrats! You created your first window!', 190, 200, 20, r.LIGHTGRAY)
  
  // this is close to correct FPS
  r.DrawText(fps.toString(), screenWidth - 100, 10, 20, r.BLACK)
  
  // this is inaccurate
  r.DrawFPS(10, 10)

  r.EndDrawing()
}

r.CloseWindow()