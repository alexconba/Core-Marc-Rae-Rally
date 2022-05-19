import { Actor } from "./Actor";
import { Point } from "./types/Point";
import { converAngleToRad } from "./utils/angleToRad";
import imageR from "./sprites/road.png";
import imageC from "./sprites/elGrass.png";

let pacmanMap = `
WWWWWWWW...........WWWWWWWWWWWW
WWWWWWW.............wwwwwwwwwww
WWWWWWW............wwwwwwwwwwww
WWWWWWW............WWWWWWWwwwww
WWWWWWW............WWWWWWWWWWWW
WWWWWWW............WWWWWWWWWWWW
WWWWWWW............WWWWWWWWWWWW
WWWWWWW............WWWWWWWWWWWW
WWWWWWW............WWWWWWWWWWWW
WWww..................WWWWWWWWW
WWww..................wwwwwwWWW
WWWW......www........wWWWWWWWww
WWWW.......www........WWWWWwwww
WWWWWWW................WWWWWwww
WWWWWWW...............WWWWwwwww
WWWWWWW.......WW......WWWWwwwww
WWWWWWW.......WW......WWWWwwwww
WWWWWWW.......WWW.....WWWWwwwww
WWWWWWW.......WWWW....WWWWwwwww
WWWWWWWww.......WWW...WWWWwwwww
WWWWWWWwwww.......W.....WWWWwww
WWWWWWWwwwww.......W....WWWWWww
WWWWWWWwwwwwww..........WWWWWWW
WWWWWWWwwwwwwww.........WWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWw.......WWWWWWWWWWwwwwww
WWWWWW.......WWWWWWWWWWwwwwwwww
WWWWWWW............WWWWWWWwwwww
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWwwwwwwwww.......wwwwwwwwwwWWW
WWWWWWWWWW.......WWWWWWWWWWWWww
WWWWWWWW.......WWWWWWWWWWWWwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWwwwww.......WWWWWWWWWWww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWw.......WWWWWWWWWWwwwwww
WWWWWW.......WWWWWWWWWWwwwwwwww
WWWWWWw.......WWWWWWWWWWwwwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwww.........WWWWWWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WWWW..........w..........WWWWWW
WWWW..........w..........WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWW............WWWWWWwwwwwww
WWWW..............WWWWWwwwwwwww
WWWWW....................WWWWWW
WWWW......ww.............WWWWWW
WWWW......ww.............WWWWWW
WWWW......ww.............WWWWWW
WWWW.....................WWWWWW
WWWWWW.......www.........WWWWWW
WWWWW........www.........WWWWWW
WWWW.........www.........WWWWWW
WWWW.....................WWWWWW
WWWW...w..........w......WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWWWwwwwww............WWWWWW
WWWWWWWwwwwww.............WWWWW
WWWWWWWwwwww..........WWWWWwwww
WWWWWWWww..........WWWWWWWWWWww
WWWWWWW............WWWWWWWWWWww
ww.........www.......WWWWWWWWWW
W.........wwwww.......WWWWWWWWW
WW........wwwwww.......WWWWWWWW
WWW.......wwwwwwww.......WWWWWW
WWWW......wwwwwwwww.......WWWWW
WWWWWW....wwwwwwwww.......WWWWW
WWWW......wwwwwwww.......WWWWWW
WWWW......wwwwwwwww.......WWWWW
WWWW......wwwwwwwww.......WWWWW
WWWW....wwwwwwwwww.......WWWWWW
WWWW....wwwwwwwwwww.......WWWWW
WWW.......wwwwwwwww.......WWWWW
WWW.......wwwwwwww.......WWWWWW
WWWWW...wwwwwwwwwww.......WWWWW
WWWWW...wwwwwwwwwww.......WWWWW
WWWWW...wwwwwwwwwww.......WWWWW
WWWW....wwwwwwwww.......WWWWWWW
WWWW....wwwwww.......WWWWWWWWWW
WWWW....www.......WWWWWWWWWWwww
WWWWW..........WWWWWWWWWWwwwwww
WWWWWW.......WWWWWWWWWWwwwwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWwwwww.......WWWWWWWWWWww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWwwwww.......WWWWWWWWWWww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWw.......WWWWWWWWWWwwwwww
WWWWWW.......WWWWWWWWWWwwwwwwww
WWWWWWw.......WWWWWWWWWWwwwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwww.........WWWWWWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WWWW..........w..........WWWWWW
WWWW..........w..........WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWW............WWWWWWwwwwwww
WWWW..............WWWWWwwwwwwww
WWWWW....................WWWWWW
WWWW......ww.............WWWWWW
WWWW......ww.............WWWWWW
WWWW......ww.............WWWWWW
WWWW.....................WWWWWW
WWWWWW.......www.........WWWWWW
WWWWW........www.........WWWWWW
WWWW.........www.........WWWWWW
WWWW.....................WWWWWW
WWWW...w..........w......WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWWWwwwwww............WWWWWW
WWWWWWWwwwwww.............WWWWW
WWWWWWWwwwww..........wwwwwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWwwwww.......WWWWWWWWWWww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.........WWWWWWWWWWwww
WWWWWWWww.........WWWWWWWWWWwww
WWWWWWWww.........WWWWWWWWWWwww
WWWWWWWww...........WWWWWWWWWWw
WWWWWWWww...........WWWWWWWWWWw
WWWWWW................WWWWWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WWWWW....................WWWWWW
WWWWw....................WWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WW.WWWWWWWWWW....WWWWWWWWWW.WWW
WW.WWWWWWWWWW....WWWWWWWWWW.WWW
WW..........................WWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`
  .split("\n")
  .map((f) => f.split(""));

export class Map extends Actor {
  roadimg: HTMLImageElement;
  grassimg: HTMLImageElement;
  constructor(initialPos: Point) {
    super(initialPos);
    this.roadimg = new Image();
    this.roadimg.src = imageR;
    this.grassimg = new Image();
    this.grassimg.src = imageC;
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    /* Fill the code */
    const totalRatio = 26624 / pacmanMap.length;
    ctx.translate(2040, 1024);
    ctx.rotate(converAngleToRad(180));

    for (let y = pacmanMap.length - 1; y >= 0; y--) {
      // en el caso de querer ajustar la linea horizontal al canvas
      //let horizontalSize = 1024 / pacmanMap[y].length;

      for (let x = 0; x < pacmanMap[y].length; x++) {
        ctx.beginPath();
        const mapCharacter = pacmanMap[y][x];
        if (mapCharacter === "W") {
          ctx.drawImage(
            this.grassimg,
            x * totalRatio,
            y * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter === "w") {
          ctx.drawImage(
            this.grassimg,
            x * totalRatio,
            y * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter === ".") {
          ctx.drawImage(
            this.roadimg,
            x * totalRatio,
            y * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
  }
  // keyboard_event_down(key: string) {
  //   switch (key) {
  //     case "ArrowUp":
  //       console.log("up");
  //       break;
  //     case "ArrowDown":
  //       console.log("down");
  //       break;
  //     default:
  //       console.log("not a valid key");
  //       break;
  //   }
  // }
}
