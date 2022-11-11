/**@type {HTMLCanvasElement} */

import {
  canvas,
  ctx,
  collisionCanvas,
  collisionCanvasCtx,
} from "../utils/canvasSettings.js";

export default class Explosions {
  constructor(x, y, size) {
    this.image = new Image();
    this.image.src = "boom.png";
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.size = size;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.sound = new Audio();
    this.sound.src = "crow.mp3";
    this.timeSinseLastFrame = 0;
    this.frameInterval = 200;
    this.markedForDeletion = false;
  }
  update(deltatime) {
    if (this.frame === 0) this.sound.play();
    this.timeSinseLastFrame += deltatime;
    if (this.timeSinseLastFrame > this.frameInterval) {
      this.frame++;
      this.timeSinseLastFrame = 0;
      if (this.frame > 5) this.markedForDeletion = true;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y - this.size / 4,
      this.size,
      this.size
    );
  }
}
