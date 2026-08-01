import React, { useEffect, useRef } from 'react';
import { TweenMax, Power1, Cubic } from 'gsap';
import * as createjs from 'createjs-module';
import './Canvas.css';


const ParticleEngine = (canvas_id) => {
    'use strict';

    const _ParticleEngine = {};

    _ParticleEngine.canvas_id = canvas_id;
    _ParticleEngine.stage = new createjs.Stage(canvas_id);
    _ParticleEngine.totalWidth = _ParticleEngine.canvasWidth = document.getElementById(canvas_id).width = document.getElementById(canvas_id).offsetWidth;
    _ParticleEngine.totalHeight = _ParticleEngine.canvasHeight = document.getElementById(canvas_id).height = document.getElementById(canvas_id).offsetHeight;
    _ParticleEngine.compositeStyle = "lighter";

    _ParticleEngine.particleSettings = [
        { id: "small", num: 300, fromX: 0, toX: _ParticleEngine.totalWidth, ballwidth: 3, alphamax: 0.4, areaHeight: .5, color: "#0cdbf3", fill: false },
        { id: "medium", num: 100, fromX: 0, toX: _ParticleEngine.totalWidth, ballwidth: 8, alphamax: 0.3, areaHeight: 1, color: "#6fd2f3", fill: true },
        { id: "large", num: 10, fromX: 0, toX: _ParticleEngine.totalWidth, ballwidth: 30, alphamax: 0.2, areaHeight: 1, color: "#93e9f3", fill: true }
    ];
    _ParticleEngine.particleArray = [];
    _ParticleEngine.lights = [
        { ellipseWidth: 400, ellipseHeight: 100, alpha: 0.6, offsetX: 0, offsetY: 0, color: "#6ac6e8" },
        { ellipseWidth: 350, ellipseHeight: 250, alpha: 0.3, offsetX: -50, offsetY: 0, color: "#54d5e8" },
        { ellipseWidth: 100, ellipseHeight: 80, alpha: 0.2, offsetX: 80, offsetY: -50, color: "#2ae8d8" }
    ];

    _ParticleEngine.stage.compositeOperation = _ParticleEngine.compositeStyle;

    const drawBgLight = () => {
        let light;
        let bounds;
        let blurFilter;
        for (let i = 0, len = _ParticleEngine.lights.length; i < len; i++) {
            light = new createjs.Shape();
            light.graphics.beginFill(_ParticleEngine.lights[i].color).drawEllipse(0, 0, _ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight);
            light.regX = _ParticleEngine.lights[i].ellipseWidth / 2;
            light.regY = _ParticleEngine.lights[i].ellipseHeight / 2;
            light.y = light.initY = _ParticleEngine.totalHeight / 2 + _ParticleEngine.lights[i].offsetY;
            light.x = light.initX = _ParticleEngine.totalWidth / 2 + _ParticleEngine.lights[i].offsetX;

            blurFilter = new createjs.BlurFilter(_ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight, 1);
            bounds = blurFilter.getBounds();
            light.filters = [blurFilter];
            light.cache(bounds.x - _ParticleEngine.lights[i].ellipseWidth / 2, bounds.y - _ParticleEngine.lights[i].ellipseHeight / 2, bounds.width * 2, bounds.height * 2);
            light.alpha = _ParticleEngine.lights[i].alpha;

            light.compositeOperation = "screen";
            _ParticleEngine.stage.addChildAt(light, 0);

            _ParticleEngine.lights[i].elem = light;
        }

        TweenMax.fromTo(_ParticleEngine.lights[0].elem, 10, { scaleX: 1.5, x: _ParticleEngine.lights[0].elem.initX, y: _ParticleEngine.lights[0].elem.initY }, { yoyo: true, repeat: -1, ease: Power1.easeInOut, scaleX: 2, scaleY: 0.7 });
        TweenMax.fromTo(_ParticleEngine.lights[1].elem, 12, { x: _ParticleEngine.lights[1].elem.initX, y: _ParticleEngine.lights[1].elem.initY }, { delay: 5, yoyo: true, repeat: -1, ease: Power1.easeInOut, scaleY: 2, scaleX: 2, y: _ParticleEngine.totalHeight / 2 - 50, x: _ParticleEngine.totalWidth / 2 + 100 });
        TweenMax.fromTo(_ParticleEngine.lights[2].elem, 8, { x: _ParticleEngine.lights[2].elem.initX, y: _ParticleEngine.lights[2].elem.initY }, { delay: 2, yoyo: true, repeat: -1, ease: Power1.easeInOut, scaleY: 1.5, scaleX: 1.5, y: _ParticleEngine.totalHeight / 2, x: _ParticleEngine.totalWidth / 2 - 200 });
    };

    const drawParticles = () => {
        let blurFilter;
        for (let i = 0, len = _ParticleEngine.particleSettings.length; i < len; i++) {
            const ball = _ParticleEngine.particleSettings[i];

            let circle;
            for (let s = 0; s < ball.num; s++) {
                circle = new createjs.Shape();
                if (ball.fill) {
                    circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.ballwidth);
                    blurFilter = new createjs.BlurFilter(ball.ballwidth / 2, ball.ballwidth / 2, 1);
                    circle.filters = [blurFilter];
                    const bounds = blurFilter.getBounds();
                    circle.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
                } else {
                    circle.graphics.beginStroke(ball.color).setStrokeStyle(1).drawCircle(0, 0, ball.ballwidth);
                }

                circle.alpha = range(0, 0.1);
                circle.alphaMax = ball.alphamax;
                circle.distance = ball.ballwidth * 2;
                circle.ballwidth = ball.ballwidth;
                circle.flag = ball.id;
                _ParticleEngine.applySettings(circle, ball.fromX, ball.toX, ball.areaHeight);
                circle.speed = range(2, 10);
                circle.y = circle.initY;
                circle.x = circle.initX;
                circle.scaleX = circle.scaleY = range(0.3, 1);

                _ParticleEngine.stage.addChild(circle);

                animateBall(circle);

                _ParticleEngine.particleArray.push(circle);
            }
        }
    };

    _ParticleEngine.applySettings = (circle, positionX, totalWidth, areaHeight) => {
        circle.speed = range(1, 3);
        circle.initY = weightedRange(0, _ParticleEngine.totalHeight, 1, [_ParticleEngine.totalHeight * (2 - areaHeight / 2) / 4, _ParticleEngine.totalHeight * (2 + areaHeight / 2) / 4], 0.8);
        circle.initX = weightedRange(positionX, totalWidth, 1, [positionX + ((totalWidth - positionX)) / 4, positionX + ((totalWidth - positionX)) * 3 / 4], 0.6);
    };

    const animateBall = (ball) => {
        const scale = range(0.3, 1);
        const xpos = range(ball.initX - ball.distance, ball.initX + ball.distance);
        const ypos = range(ball.initY - ball.distance, ball.initY + ball.distance);
        const speed = ball.speed;
        TweenMax.to(ball, speed, { scaleX: scale, scaleY: scale, x: xpos, y: ypos, onComplete: animateBall, onCompleteParams: [ball], ease: Cubic.easeInOut });
        TweenMax.to(ball, speed / 2, { alpha: range(0.1, ball.alphaMax), onComplete: fadeout, onCompleteParams: [ball, speed] });
    };

    const fadeout = (ball, speed) => {
        ball.speed = range(2, 10);
        TweenMax.to(ball, speed / 2, { alpha: 0 });
    };

    drawBgLight();
    drawParticles();

    _ParticleEngine.render = () => {
        _ParticleEngine.stage.update();
    };

    _ParticleEngine.resize = () => {
        _ParticleEngine.totalWidth = _ParticleEngine.canvasWidth = document.getElementById(_ParticleEngine.canvas_id).width = document.getElementById(_ParticleEngine.canvas_id).offsetWidth;
        _ParticleEngine.totalHeight = _ParticleEngine.canvasHeight = document.getElementById(_ParticleEngine.canvas_id).height = document.getElementById(_ParticleEngine.canvas_id).offsetHeight;
        _ParticleEngine.render();

        for (let i = 0, length = _ParticleEngine.particleArray.length; i < length; i++) {
            _ParticleEngine.applySettings(_ParticleEngine.particleArray[i], 0, _ParticleEngine.totalWidth, _ParticleEngine.particleArray[i].areaHeight);
        }

        for (let j = 0, len = _ParticleEngine.lights.length; j < len; j++) {
            _ParticleEngine.lights[j].elem.initY = _ParticleEngine.totalHeight / 2 + _ParticleEngine.lights[j].offsetY;
            _ParticleEngine.lights[j].elem.initX = _ParticleEngine.totalWidth / 2 + _ParticleEngine.lights[j].offsetX;
            TweenMax.to(_ParticleEngine.lights[j].elem, 0.5, { x: _ParticleEngine.lights[j].elem.initX, y: _ParticleEngine.lights[j].elem.initY });
        }
    };

    return _ParticleEngine;
};

const ParticleComponent = () => {
    const canvasRef = useRef(null);
    let particles;

    useEffect(() => {
        if (canvasRef.current) {
            particles = new ParticleEngine(canvasRef.current.id);
            createjs.Ticker.addEventListener('tick', updateCanvas);
            window.addEventListener('resize', resizeCanvas, false);

            function updateCanvas() {
                particles.render();
            }

            function resizeCanvas() {
                particles.resize();
            }

            return () => {
                createjs.Ticker.removeEventListener('tick', updateCanvas);
                window.removeEventListener('resize', resizeCanvas);
            };
        }
    }, [canvasRef]);

    return <canvas id="projector" ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>Your browser does not support the Canvas element.</canvas>;
};

export default Canvas;
