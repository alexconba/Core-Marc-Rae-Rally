import { Actor } from "./Actor";
import { Point } from "./types/Point";
import { converAngleToRad } from "./utils/angleToRad";
import imageR from "./sprites/road.png";
import imageC from "./sprites/elGrass.png";
import imageA from "./sprites/SNES water.png";
import imageM from "./sprites/meta.png";
import { checkLimits } from "./utils/checkLimits";

let pacmanMap = `
WWWWWWWW...........WWWWWWWWWWWW
WWWWWWW.............wwwwwwwwwww
WWWWWWW............wwwwwwwwwwww
WWWWWWW............WWWWWWWwwwww
WWWWWWW............WWWWWWWWWWWW
WWWWWWW............WWWWWWWWWWWW
WWWWWWW............WWWWaaWWWWW
WWWWWWW............WWWWWWWWWWWW
WWWWWWa............WWWWWWWWWWWW
WWww..................WWWWWWWWW
WWww..................wwwwwwWWW
WWWW......aaa........wWWWWWWWww
WWWW.......aaa........WWWWWwwww
WWWWWWW................WWWWWwww
WWWWWWW...............WWWWwwwww
WWWWWWW.......WW......WWWWwwwww
WWWWWWW.......WW......WWWWwwwww
WWWWWWW.......aaa.....WWWWwwwww
WWWWWWW.......WWWW....WWWWwwwww
WWWWWWWww.......WWW...WWWWwwwww
WWWWWWWwwww.......a.....WWWWwww
WWWWWWWwwwww.......a....WWWWWww
WWWWWWWwwwwwww..........WWWWWWW
WWWWWWWwwwwwwww.........WWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWawwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWaWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWw.......WWWWWWWaaWwwwwww
WWWWWW.......WWWWWWWWWWwwwwwwww
WWWWWWW............WWWWWWWwwwww
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWWWWWWWWWW....a..WWWWWWWWWWWW
WWWWWWWWWWWW.......WWWWWWWWWWWW
WWWaaWWWWWWW.......WWWWWWWWWWWW
WWwwwwwwwww.......wwwwwwwwwwWWW
WWWWWWWWWW.......WWWWWWWWWWWWww
WWWWWWWW.......WWWWWWWWWWWWwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWWWwwwww
WWWWWWW.......WWWWWWWWWWaWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWwwwww.......WWWWWWWWWWww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwawwwww.......WWWWWWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWaaWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWawww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWWWWW
WWWWaaawwwwwwwwwww.......WWWWWW
WWWWWWWwwwwwwwwwaww.......WWWWW
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
WWWaWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWaaaWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWaWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWaaawwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWaaaWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WaWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwww.........WWWWWWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WWWW..........a..........WWWWWW
WWWW.......a..w..........WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWW............WWWaWWwwwwwww
WWWW..............WWWaawwwwwwww
WWWWW....................WWWWWW
WWWW......aa.............WWWWWW
WWWW......aa.............WWWWWW
WWWW......aa.............WWWWWW
WWWW.....................WWWWWW
WWWWWW.......www.........WWaWWW
WWWWW........www.........WWWWWW
WWWW.........www.........WWWWWW
WWWW.....................WWWWWW
WWWW...w..........w......WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWWWwwwwww............WWWWWW
WWaaWWWwwwwww.............WWWWW
WWWWWWWwwwww..........WWWWWwwww
WWWWWWWww..........WWWWWWWaWWww
WWWWWWW............WWWWWWWWWWww
ww.........www.......WWWWWWWWWW
W.........wwwww.......WWWWWWWWW
WW........wwwwww.......WWWWWWWW
WWW.......wwwwwwww.......WWWWWW
WWWW......wwwwwwwww.......WWWWW
WWWWWW....wwwwwwwww.......WWWWW
WWWW......wwwaaaww.......WWWWWW
WWWW......wwwwwwwww.......WWWWW
WWWW......wwwwwwwww.......WWWWW
WWWW....wwwwwwwwww.......aaWWWW
WWWW....wwwwwwwaaww.......WWWWW
WWW.......wwwwwwwww.......WWWWW
WWW.......wwwwwwww.......aaaWWW
WWWWW...aawwwwawwww.......WWWWW
WWWWW...aawwwwwwwww.......WWWWW
WWWWW...aawwwwwwwww.......WWWWW
WWWW....aawwwwwww.......WWWWWWW
WWWW....aawwww.......WWWWWWWWWW
WWWW....aaaw.......WWWWWWWWWWwww
WWWWW..........WWWWWWWWWWwwwwww
WWWWWW.......WWWWWWWWWWwwwwwwww
WWWWWWWww.......WWWWaWWWWWwwwww
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWwwwww.......WWWWWWWWWWww
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwwwwwww.......WWWWWWWWW
WWWWWWWwwwwwwwww.......WWWWaWWW
WWWWWWWwwwwwwwwwww.......WWWWWW
WWWWWWWwwaawwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwwa.......WWWWWWWWWWwwww
WWWWWWwww.......WWWWWaWWWWwwwww
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
WWWWWWWww.......WWaWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWaaWWWwwwww
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
WWWWWWWww....a..WWWWWWWWWWwwwww
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
WWWWWWWww..a....WWWWWWWWWWwwwww
WWWWaWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWww.......WWWWWWWWawwwww
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
WWWWWWWawwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwwwww.......WWWWW
WWWWWWWwwwwwwwwww.......WWWWWWW
WWWWWWWwwwwwww.......WWWWWWWWWW
WWWWWWWwwww.......WWWWWWWWWWwww
WWWWWWWw.......WWWWWWWWWWwwwwww
WWWWWaaa.....WWWWWWWWWWwwwwwwww
WWWWWaaa......WWWWWWWWWWwwwwwww
WWWWWWwww.......WWWWWWWaWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWww.......WWWWWWWWWWwwwww
WWWWWWWwww.......WWWWWWWWWWwwww
WWWWWWWwwwww.........WWWWWWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WWWW..........a..........WWWWWW
WWWW..........a..........WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWW............aaaaaWwwwwwww
WWWW..............aaaaawwwwwwww
WWWWW....................WWWWWW
WWWW......ww.............WWWWWW
WWWW......ww.............WWWWWW
WWWW......ww.............WWWWWW
WWWW.....................WWWWWW
WWWWWW.......aaa.........WWWWWW
WWWWW........aaa.........WWWWWW
WWWW.........aaa.........WWWWWW
WWWW.....................WWWWWW
WWWW...w..........aa.....WWWWWW
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
WWWWWWwww.a.....WWWWWWWWWWwwwww
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
WWWWWWWwwwwwwwwwwaa......WWWWWW
WWWWWWWwwwwwwwwwwwaa......WWWWW
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
WWWWW............WWWWWWwwwwwww
WWWW..............WWWWWwwwwwwww
WWWWW....................WWWWWW
WWWW......ww.............WWWWWW
WWWaa.....ww.............WWWWWW
WWWaaa....ww.............WWWWWW
WWWaaa...................WWWWWW
WWWWWa.......waa.........WWWWWW
WWWWW........waa.........WWWWWW
WWWW.........waa.........WWWWWW
WWWW.....................WWWWWW
WWWW...a..........w......WWWWWW
WWWW.....................WWWWWW
WWWWWW...................WWWWWW
WWWWWWWwwwwww............WWWWWW
WWWWWWWwwwwww.............WWWWW
WWWWWWWwwwww..........wwwwwwwww
WWWWWWwww.......WWWWWWWWWWwwwww
WWWWW............WWWWWWwwwwwww
WWWW..............WWWWWwwwwwwww
WWWWW....................WWWWWW
WWWW......wa.............WWWWWW
WWWW......wa.............WWWWWW
WWWW......aa.............WWWWWW
WWWW.....................WWWWWW
WWWWWW.......aaa.........WWWWWW
WWWWW........aaa.........WWWWWW
WWWW.........aaa.........WWWWWW
WWWW.....................WWWWWW
WWWW...a..........a......WWWWWW
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
WWWWWWwww.........WWWWWWWWWWwww
WWWWWWWww.........WWWWWWWWWWwww
WWWWWWWww.........WWWWWWWWWWwww
WWWWWWWww...........WWWWWWWWWWw
WWWWWWWww...........WWWWWWWWWWw
WWWWWW................WWWWWWWWW
WWWWW....................WWWWWW
WWWW.....................WWWWWW
WWWWWggggggggggggggggggggWWWWWW
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
  origin: Point;
  maxSpeed: number;
  speed: number;
  roadimg: HTMLImageElement;
  grassimg: HTMLImageElement;
  waterimg: HTMLImageElement;
  metaimg: HTMLImageElement;
  roadMap: number;
  timer: number;
  xFrame: number;
  yFrame: number;
  sxParameters: number[];
  mapY: number;
  constructor(initialPos: Point) {
    super(initialPos);
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.maxSpeed = 15;
    this.speed = 0;
    this.roadimg = new Image();
    this.roadimg.src = imageR;
    this.grassimg = new Image();
    this.grassimg.src = imageC;
    this.waterimg = new Image();
    this.waterimg.src = imageA;
    this.metaimg = new Image();
    this.metaimg.src = imageM;
    this.roadMap = pacmanMap.length;
    this.sxParameters = [7, 6, 5, 4, 5, 6];
    this.timer = 0;
    this.xFrame = 0;
    this.yFrame = 5;
    this.mapY = 1;
  }
  update(delta: number): void {
    //   const horizonLimits = (mapY: number) => {
    //     if (this.mapY === -1) {
    //       return (this.speed = 0);
    //     } else this.mapY === pacmanMap.length;
    //     if (pacmanMap.length === this.mapY - 1) {
    //       return (this.speed = 0);
    //     }
    //   };
    //   horizonLimits(this.mapY);
  }
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    /* Fill the code */

    let origin = this.origin;

    ctx.translate(2040, 1024);
    ctx.rotate(converAngleToRad(180));
    const totalRatio = 26624 / pacmanMap.length;
    this.mapY += this.speed;

    for (let y = this.mapY; y < pacmanMap.length; y++) {
      // en el caso de querer ajustar la linea horizontal al canvas
      //let horizontalSize = 1024 / pacmanMap[y].length;

      for (let x = 0; x < pacmanMap[y].length; x++) {
        ctx.beginPath();
        const mapCharacter = pacmanMap[y][x];
        if (mapCharacter === "W") {
          ctx.drawImage(
            this.grassimg,
            x * totalRatio,
            (y - this.mapY) * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter === "w") {
          ctx.drawImage(
            this.grassimg,
            x * totalRatio,
            (y - this.mapY) * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter === ".") {
          ctx.drawImage(
            this.roadimg,
            x * totalRatio,
            (y - this.mapY) * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter === "a") {
          ctx.drawImage(
            this.waterimg,
            x * totalRatio,
            (y - this.mapY) * totalRatio,
            totalRatio,
            totalRatio
          );
        }
        if (mapCharacter === "g") {
          ctx.drawImage(
            this.metaimg,
            x * totalRatio,
            (y - this.mapY) * totalRatio,
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
  keyboard_event_down(key: string) {
    switch (key) {
      case "ArrowUp":
        this.speed = 1;

        break;
      case "ArrowDown":
        this.speed = !this.speed ? 0 : this.speed--;
        break;
    }
  }

  keyboard_event_up(key: string) {
    switch (key) {
      case "ArrowUp":
        this.speed = 0;
        break;
    }
  }
}
