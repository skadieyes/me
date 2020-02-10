import React, { Component } from 'react';
import F2 from '@antv/f2';
import DataSet from '@antv/data-set';

let radar;
let cloud;
const Util = F2.Util;
class Skill extends Component {
    componentDidMount() {
        this.initRadar()
        this.initCloud()
    }
    render() {
        return (
            <div className="skill">
                <canvas id="skill-radar" className="skill-radar"></canvas>
                <canvas id="cloud-chart" className="cloud-chart"></canvas>
            </div>
        );
    }
    initRadar() {
        radar = new F2.Chart({
            id: 'skill-radar',
            pixelRatio: window.devicePixelRatio,
            padding: [20, 50, 10],
        });

        radar.coord('polar');
        radar.source(this.props.data.radarData, {
            score: {
                min: 0,
                max: 120,
                nice: false,
                tickCount: 4
            }
        });
        radar.axis('score', {
            label: function label(text, index, total) {
                if (index === total - 1) {
                    return null;
                }
                return {
                    top: true
                };
            },
            grid: {
                lineDash: null,
                type: 'arc' // 弧线网格
            }
        });
        radar.axis('item', {
            grid: {
                lineDash: null
            }
        });
        radar.legend(false)
        radar.line().position('item*score').color('#f8c312');
        radar.point().position('item*score').color('#f8c312')
            .style({
                stroke: '#fff',
                lineWidth: 2
            });
        radar.render();

    }
    initCloud() {
        // 给point注册一个词云的shape
        this.setCloudShape()
        const dv = new DataSet.View().source(this.props.data.cloudData);
        const range = dv.range('value');
        const min = range[0];
        const max = range[1];
        const MAX_FONTSIZE = 36; // 最大的字体
        const MIN_FONTSIZE = 12; // 最小的字体
        // 生成词云的布局
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [375, 260], // 同 canvas 画布保持一致
            font: 'Verdana',
            padding: 0,
            timeInterval: 5000, // max execute time
            rotate: function rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize: function fontSize(d) {
                if (d.value) {
                    return (d.value - min) / (max - min) * (MAX_FONTSIZE - MIN_FONTSIZE) + MIN_FONTSIZE;
                }
                return 0;
            }

        })
        cloud = new F2.Chart({
            id: 'cloud-chart',
            padding: 0,
            pixelRatio: window.devicePixelRatio
          });
          cloud.source(dv.rows, {
            x: {
              nice: false
            },
            y: {
              nice: false
            }
          });
          cloud.legend(false);
          cloud.axis(false);
          cloud.tooltip(false);
      
          cloud.point()
            .position('x*y')
            .color('category')
            .shape('cloud');
            cloud.render();
    }
    setCloudShape() {
        const that = this
        F2.Shape.registerShape('point', 'cloud', {
            draw: function draw(cfg, container) {
                const attrs = that.getTextAttrs(cfg);
                const x = cfg.x;
                const y = this._coord.y.start - cfg.y;
                return container.addShape('text', {
                    attrs: Util.mix(attrs, {
                        x,
                        y
                    })
                });
            }
        });
    }
    getTextAttrs(cfg) {
        return Util.mix({}, {
            fillOpacity: cfg.opacity,
            fontSize: cfg.origin._origin.size,
            rotate: cfg.origin._origin.rotate * Math.PI / 180,
            text: cfg.origin._origin.text,
            textAlign: 'center',
            fontFamily: cfg.origin._origin.font,
            fill: cfg.color,
            textBaseline: 'Alphabetic'
        }, cfg.style);
    }
}

export default Skill;
