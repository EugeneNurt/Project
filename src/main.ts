import "./scss/main.scss";
import * as PIXI from "pixi.js-legacy";
import Handlers from "./utils/handlers";
import Demo from "./_Main/MainMenu";

initPIXI();
const handlers = new Handlers();
handlers.init();
start();

/**
 * Инициализация PIXI
 */
function start(): void {
    const demo = new Demo();
}

function initPIXI(): void {
    window.PIXI = PIXI;
    // Проверим инициализацию библиотеки PIXI
    if (PIXI === undefined) {
        throw new Error('PIXI is undefined');
    }

    window.sceneWidth = screen.width || 800;
    window.sceneHeight = screen.height || 600;

    const app = new PIXI.Application({
        width: window.sceneWidth,
        height: window.sceneHeight,
        ///transparent: true,
        forceCanvas: true,
        backgroundColor: 0xFFFFFF,
        view: <HTMLCanvasElement>getElement("scene")
    });
    window.renderer = app.renderer;
    window.app = app;
    // app.stage.rotation += 1.57;
    getElement("sceneDiv").appendChild(app.view);
}

function getElement(elementName: string): HTMLElement {
    return <HTMLElement>document.getElementById(elementName);
}

document.onready = function () {

    window.changeResolution(1280, 720)
    window.sizeHandler();
    window.app.stage.scale.set(sceneWidth / 1920, sceneHeight / 1080);
};