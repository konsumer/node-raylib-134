import r from 'raylib'
import { MaintainFPS } from './async.js'

const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [async] example - async game-loop')
r.SetTargetFPS(0)

while(await MaintainFPS(60)) {
  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)
  r.DrawText('Congrats! You created your first window!', 190, 200, 20, r.LIGHTGRAY)
  r.DrawFPS(10, 10)
  r.EndDrawing()
}

r.CloseWindow()