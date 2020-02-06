import React, { Component } from 'react';
import F2 from '@antv/f2';
import DataSet from '@antv/data-set';

let radar;
let cloud;
const Util = F2.Util;
class Skill extends Component {
    constructor() {
        super();
        this.state = {
            data: [{
                item: '设计',
                score: 80
            }, {
                item: '工程',
                score: 80
            }, {
                item: '沟通',
                score: 90
            }, {
                item: '学习',
                score: 90
            }, {
                item: '技术',
                score: 88
            }],
            cloudData: [
                {
                    "x": "China",
                    "value": 1383220000,
                    "category": "asia"
                }, {
                    "x": "India",
                    "value": 1316000000,
                    "category": "asia"
                }, {
                    "x": "United States",
                    "value": 324982000,
                    "category": "america"
                }, {
                    "x": "Indonesia",
                    "value": 263510000,
                    "category": "asia"
                }, {
                    "x": "Brazil",
                    "value": 207505000,
                    "category": "america"
                }, {
                    "x": "Pakistan",
                    "value": 196459000,
                    "category": "asia"
                }, {
                    "x": "Nigeria",
                    "value": 191836000,
                    "category": "africa"
                }, {
                    "x": "Bangladesh",
                    "value": 162459000,
                    "category": "asia"
                }, {
                    "x": "Russia",
                    "value": 146804372,
                    "category": "europe"
                }, {
                    "x": "Japan",
                    "value": 126790000,
                    "category": "asia"
                }, {
                    "x": "Mexico",
                    "value": 123518000,
                    "category": "america"
                }, {
                    "x": "Ethiopia",
                    "value": 104345000,
                    "category": "africa"
                }, {
                    "x": "Philippines",
                    "value": 104037000,
                    "category": "asia"
                }, {
                    "x": "Egypt",
                    "value": 93013300,
                    "category": "africa"
                }, {
                    "x": "Vietnam",
                    "value": 92700000,
                    "category": "asia"
                }, {
                    "x": "Germany",
                    "value": 82800000,
                    "category": "europe"
                }, {
                    "x": "Democratic Republic of the Congo",
                    "value": 82243000,
                    "category": "africa"
                }, {
                    "x": "Iran",
                    "value": 80135400,
                    "category": "asia"
                }, {
                    "x": "Turkey",
                    "value": 79814871,
                    "category": "asia"
                }, {
                    "x": "Thailand",
                    "value": 68298000,
                    "category": "asia"
                }, {
                    "x": "France",
                    "value": 67013000,
                    "category": "europe"
                }, {
                    "x": "United Kingdom",
                    "value": 65110000,
                    "category": "europe"
                }, {
                    "x": "Italy",
                    "value": 60599936,
                    "category": "europe"
                }, {
                    "x": "Tanzania",
                    "value": 56878000,
                    "category": "africa"
                }, {
                    "x": "South Africa",
                    "value": 55908000,
                    "category": "africa"
                }, {
                    "x": "Myanmar",
                    "value": 54836000,
                    "category": "asia"
                }, {
                    "x": "South Korea",
                    "value": 51446201,
                    "category": "asia"
                }, {
                    "x": "Colombia",
                    "value": 49224700,
                    "category": "america"
                }, {
                    "x": "Kenya",
                    "value": 48467000,
                    "category": "africa"
                }, {
                    "x": "Spain",
                    "value": 46812000,
                    "category": "europe"
                }, {
                    "x": "Argentina",
                    "value": 43850000,
                    "category": "america"
                }, {
                    "x": "Ukraine",
                    "value": 42541633,
                    "category": "europe"
                }, {
                    "x": "Sudan",
                    "value": 42176000,
                    "category": "africa"
                }, {
                    "x": "Uganda",
                    "value": 41653000,
                    "category": "africa"
                }, {
                    "x": "Algeria",
                    "value": 41064000,
                    "category": "africa"
                }, {
                    "x": "Poland",
                    "value": 38424000,
                    "category": "europe"
                }
            ]
        }
    }
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
        radar.source(this.state.data, {
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
        const dv = new DataSet.View().source(this.state.cloudData);
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
