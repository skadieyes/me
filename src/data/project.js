const projectData = {
    work: [
        {
            title: '猫眼演出全品类票档页',
            label: '购票流程选票改造，不针对不同品类演出又不同的票务结构，根据不同演出品类，场次时间跨度提供多模版，提升用户在不同品类项目的购票体验<br/>对页面进行结构划分和模块划分的设计，模块高内聚低耦合，承担自己单独的任务，更好的去做模块灵活性的变化和页面的通用逻辑的抽取。<br/>开发多种UI组件，Tab，日历，卡片等，由不同组件灵活的去组合成针对不同场景的五种模版。<br/>进行业务和性能埋点，观测数据持续对页面进行针对性的优化。',
            skills: ['Vue', '小程序', 'H5', '点评', '美团', '猫眼', '微信'],
            img: 'https://s2.ax1x.com/2020/02/08/1R2n0S.jpg',
            avator:'https://s2.ax1x.com/2020/02/08/1W9678.jpg',
        },
        {
            title: '售票实时流量监控',
            label: '一个实时数据推送，数据实时动态渲染的数据可视化看板<br/>前期进行技术选型的调研和项目搭建，选用Dva+Umi+G2的技术栈来开发这个项目，搭建自动化构建的测试环境和生产环境<br/>实现数据的实时更新和render，增量更新解决大数据量级下的实时重绘<br/>上线后用于监控十场林俊杰，N场周杰伦，陈情令，RISE，VAC等超大流量项目，稳定的性能和清晰数据可视化帮助运营和产品及时调整策略提高售卖转化率',
            skills: ['Dva', 'Umi', 'React', 'G2', '数据可视化', '实时更新'],
            img: 'https://s2.ax1x.com/2020/02/08/1RHT0A.png',
            avator:'https://s2.ax1x.com/2020/02/08/1RHT0A.png',
        },
        {
            title: 'LOL/售卖权限验证',
            label: 'LOL，王者荣耀等电竞类项目需进行售票权限校验，比如拥有游戏账户或账号到达一定等级等，于是需要跳转至第三方进行校验再回到演出页面。<br/>设计方案并开发三方权限验证页，通用的功能和兼容性，仅开发了一个页面，就支持美团猫眼点评APP以及小程序，微信公众号用户的校验后跳转回演出项目进行购买。<br/>接入美团风控滑块Yoda。<br/>支持了LOL音乐会，王者荣耀秋季决赛，王者荣耀音乐会等项目的权限验证，帮助真正的用户能够买到票。',
            skills: ['Vue', 'H5', 'Yoda'],
            img: 'https://s2.ax1x.com/2020/02/08/1RjFQf.jpg',
            avator: 'https://s2.ax1x.com/2020/02/08/1Rx3a4.jpg',
        },
        {
            title: '助力抢票专项',
            label: '参与开发猫眼演出助力抢票售卖新模式，主要负责助力抢票池的动画开发，使用Canvas完成这个页面的开发，小猫的眼睛会随着进度条的变化缓动。<br/>后续和设计师一起后续不断调整迭代，调整出最优效果上线。<br/>已用于周笔畅，新裤子等多场演唱会售卖活动。<br/>',
            skills: ['小程序','Canvas'],
            img: 'https://s2.ax1x.com/2020/02/09/1f7oJP.jpg',
            avator: 'https://s2.ax1x.com/2020/02/08/1W9DXt.jpg',
        },
        {
            title: '经纪公司SAAS猫眼粉丝通',
            label: '负责猫眼新业务线粉丝通Saas项目。<br/>使用React+Redux搭建项目，配置webpack编译参数，搭建项目的自动化构建测试环境&生产环境。<br/>开发项目的大框架，划分导航模块，内容模块，用户模块，完成基础模块的开发，并调通账号体系。<br/>带领团队小伙伴一起完成内容模块的开发。<br/>开发完成上线并成功交付数家经纪公司。',
            skills: ['React','Redux','Umi','AntDesign','Typescript'],
            img: 'https://s2.ax1x.com/2020/02/09/1fxCqK.jpg',
            avator: 'https://s2.ax1x.com/2020/02/09/1fO13t.jpg',
        },
        {
            title: 'FIS公用组件库开发 ',
            label: '对公司 UI/UX的标准化，开发了基于Angular的一套基础组件库<br/>提供常用场景的模块和模板，可以开箱即用<br/> <a target="_blank" style="color:yellow"" href="https://skadieyes.github.io/cherry-ui/dist/index.html">https://skadieyes.github.io/cherry-ui/dist/index.html</a>',
            skills: ['Angular','Typescript','UI'],
            img: 'https://s2.ax1x.com/2020/02/09/1hia9S.jpg',
            avator: 'https://s2.ax1x.com/2020/02/09/1hioH1.jpg',
        },
    ],
    personal: [
        {
            title: '在你右边画一道彩虹',
            label: '和tensorlfow.js结合的小应用, 在屏幕中露出的你 左手腕 或者 右手腕，来试试看吧<br/> > <a target="_blank" style="color:#FD8F61" href="https://github.com/skadieyes/tensorflow-draw">Github</a><a target="_blank" style="color:#F84B62;margin-left:5px" href="https://skadieyes.github.io/tensorflow-app/">LiveDemo</a>',
            skills: ['tensorlfow.js', 'Canvas'],
            img: null,
            avator:'https://s2.ax1x.com/2020/02/09/1h0DKO.jpg',
        },
        {
            title: '歌曲爬虫&音乐播放器',
            label: '一个音乐播放器<br/>使用puppeteer去拦截页面请求，拿到音乐地址，并批量下载到本地再上传到云，然后自己就可以去做一个好看的播放器播放自己的音乐啦。<br/> > <a target="_blank" style="color:#FD8F61" href="https://github.com/skadieyes/musicPlayer">Github</a><a target="_blank" style="color:#F84B62;margin-left:5px" href="https://skadieyes.github.io/musicPlayer/app/index.html">LiveDemo</a>',
            skills: ['puppeteer', 'nodejs', 'audio'],
            img: 'https://s2.ax1x.com/2020/02/09/1htzrj.jpg',
            avator:'https://s2.ax1x.com/2020/02/09/1hwJht.jpg',
        },
        {
            title: 'Banana-AR',
            label: '项目主要依赖ar.js和three.js。<br/> ar.js基于增强显示的SDK-ARToolkit,是我们实现web-ar的基础，<br/>使得我们在浏览器上也可以使用相机跟踪和识别标记卡(maker), 计算摄像机和标记卡之间的位置，让我们能够把虚拟的事物覆盖到真实的标记卡上。<br/>three.js在此处的作用主要是识别maker后的显示，跟踪到maker后我们可以精确地将3D模型渲染到maker上<br/> > <a target="_blank" style="color:#FD8F61" href="https://github.com/skadieyes/Banana-AR">Github</a><a target="_blank" style="color:#F84B62;margin-left:5px" href="https://github.com/skadieyes/Banana-AR">LiveDemo</a> ',
            skills: ['AR.js', 'Three.js', 'Webgl'],
            img: 'https://s2.ax1x.com/2020/02/10/15Q2o8.jpg',
            avator:'https://s2.ax1x.com/2020/02/10/15QrQA.jpg',
        },
        {
            title: '音频可视化',
            label: '使用h5提供的Web Audio API，获取音频把音频解码，然后获取频率及时间域分析的信息，使用canvas将其绘制和表达出来<br/>希望你的心情也如阳光般明媚。<br/> > <a target="_blank" style="color:#FD8F61" href="https://github.com/skadieyes/BlingBlingToMe">Github</a><a target="_blank" style="color:#F84B62;margin-left:5px" href="https://skadieyes.github.io/blingblingBuild/index.html#/audio">LiveDemo</a> ',
            skills: ['lavas', 'pwa', 'webAudio', '音频解码', 'canvas'],
            img: 'https://s2.ax1x.com/2020/02/10/15pty9.jpg',
            avator:'https://s2.ax1x.com/2020/02/10/14zZtS.jpg',
        }
    ]
}

export default projectData