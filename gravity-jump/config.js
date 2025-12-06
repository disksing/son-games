// 重力跳跃游戏配置文件
// 修改此文件可以调整游戏参数和说明

const GameConfig = {
    // ========== 游戏基本信息 ==========
    title: "重力跳跃",                        // 游戏标题
    subtitle: "挑战重力的极限！",              // 游戏副标题
    
    // ========== 游戏说明 ==========
    instructions: {
        title: "游戏说明",                     // 说明标题
        items: [                               // 说明项列表
            { control: "空格键", action: "切换重力方向" },           // 空格键说明
            { control: "点击屏幕", action: "切换重力方向（移动端）" },  // 点击说明
            { control: "收集金币", action: "获得分数" },             // 收集金币说明
            { control: "躲避障碍", action: "不要撞到天花板和地板！" },  // 躲避说明
            { control: "目标", action: "尽可能获得高分！" }          // 目标说明
        ]
    },
    
    // ========== 画布设置 ==========
    canvas: {
        width: 800,                            // 画布宽度（像素）
        height: 600                            // 画布高度（像素）
    },
    
    // ========== 玩家设置 ==========
    player: {
        startX: 100,                           // 玩家起始X坐标
        startY: 300,                           // 玩家起始Y坐标
        width: 30,                             // 玩家宽度
        height: 30,                            // 玩家高度
        color: '#667eea',                      // 玩家颜色（紫色）
        trailLength: 20                        // 拖尾长度（帧数）
    },
    
    // ========== 物理参数 ==========
    physics: {
        gravity: 0.5,                          // 重力加速度
        initialSpeed: 2                        // 初始滚动速度
    },
    
    // ========== 平台设置 ==========
    platform: {
        initialCount: 20,                      // 初始平台数量
        spacing: 400,                          // 平台间距（像素）
        types: ['top', 'bottom', 'both'],      // 平台类型（顶部/底部/两者）
        minWidth: 100,                         // 平台最小宽度
        maxWidth: 200,                         // 平台最大宽度
        minHeight: 50,                         // 平台最小高度
        maxHeight: 150,                        // 平台最大高度
        color: '#ffffff'                       // 平台颜色（白色）
    },
    
    // ========== 金币设置 ==========
    coin: {
        minPerPlatform: 3,                     // 每个平台最少金币数
        maxPerPlatform: 6,                     // 每个平台最多金币数
        radius: 12,                            // 金币半径
        scoreValue: 5,                         // 金币分数
        verticalSpacing: 70,                   // 金币垂直间距
        offsetFromPlatform: 30,                // 金币距离平台的偏移量
        colors: {
            main: '#ffd700',                   // 金币主颜色（金色）
            inner: '#ffed4e'                   // 金币内部颜色（亮金色）
        },
        rotationSpeedMin: 0.05,                // 金币最小旋转速度
        rotationSpeedMax: 0.1                  // 金币最大旋转速度
    },
    
    // ========== 粒子效果设置 ==========
    particles: {
        countOnCollect: 8,                     // 收集金币时的粒子数量
        life: 30,                              // 粒子生命周期（帧数）
        color: '#ffd700',                      // 粒子颜色（金色）
        velocityMultiplier: 10,                // 粒子速度倍数
        friction: 0.95                         // 粒子摩擦力（0-1之间）
    },
    
    // ========== 分数设置 ==========
    scoring: {
        platformPassed: 10,                    // 通过一个平台的分数
        coinCollected: 5,                      // 收集一个金币的分数
        difficultyIncreaseScore: 50,           // 多少分后增加难度
        speedIncreaseAmount: 0.1               // 难度增加时速度增加量
    },
    
    // ========== 视觉效果设置 ==========
    visual: {
        trail: {                               // 拖尾效果
            color: '#667eea',                  // 拖尾颜色
            width: 3,                          // 拖尾宽度
            opacity: 0.3                       // 拖尾透明度（0-1）
        },
        shadows: {                             // 阴影效果
            platform: {
                color: 'rgba(102, 126, 234, 0.5)',  // 平台阴影颜色
                blur: 10                       // 平台阴影模糊度
            },
            player: {
                color: '#667eea',              // 玩家阴影颜色
                blur: 15                       // 玩家阴影模糊度
            },
            coin: {
                color: '#ffd700',              // 金币阴影颜色
                blur: 10                       // 金币阴影模糊度
            }
        },
        background: {                          // 背景设置
            clouds: {                          // 云朵设置
                count: 10,                     // 云朵数量
                color: 'rgba(255, 255, 255, 0.3)',  // 云朵颜色
                sizes: [30, 35, 25],           // 云朵大小数组
                spacing: 200                   // 云朵间距
            },
            parallax: {                        // 视差效果
                speedMultiplier: 0.3           // 视差速度倍数
            }
        },
        gravityIndicator: {                    // 重力指示器
            downColor: '#ff6b6b',              // 向下重力颜色（红色）
            upColor: '#4ecdc4',                // 向上重力颜色（青色）
            size: 10                           // 指示器大小
        }
    },
    
    // ========== 游戏控制 ==========
    controls: {
        toggleGravity: {                       // 切换重力控制
            keyboard: 'Space',                 // 键盘按键
            mouse: 'click',                    // 鼠标事件
            touch: 'touchstart'                // 触摸事件
        }
    },
    
    // ========== 游戏规则 ==========
    rules: {
        gameOverConditions: [                  // 游戏结束条件
            "撞到天花板",
            "撞到地板",
            "撞到平台"
        ],
        collisionBuffer: 20                    // 碰撞检测缓冲距离（像素）
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameConfig;
}
