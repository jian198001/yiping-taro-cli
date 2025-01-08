// 定义一个配置对象，包含了Taro项目的各种配置信息
const config = {
  // 项目名称
  projectName: 't',
  // 项目创建日期
  date: '2024-10-31',
  // 设计稿宽度，用于样式计算
  designWidth: 375,
  // 设备像素比，用于适配不同分辨率的设备
  deviceRatio: {
    640: 2.34 / 2, // 640px设备的像素比
    750: 1, // 750px设备的像素比
    828: 1.81 / 2, // 828px设备的像素比
    375: 2 / 1 // 375px设备的像素比
  },
  // 源文件目录
  sourceRoot: 'src',
  // 输出文件目录
  outputRoot: 'dist',
  // 使用的插件列表
  plugins: ['@tarojs/plugin-html'],
  // 定义的常量
  defineConstants: {
  },
  // 复制文件的配置
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  // 使用的框架，这里是React
  framework: 'react',
  // 使用的编译器，这里是Webpack5
  compiler: 'webpack5',
  // Webpack持久化缓存配置
  cache: {
    enable: false // 建议开启，默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  // Sass配置
  sass:{
    // 导入的Sass变量文件
    data: `@import "@nutui/nutui-biz/dist/styles/variables.scss"; @import "@nutui/nutui-react-taro/dist/styles/variables.scss"; `
  },
  // 小程序配置
  mini: {
    // PostCSS配置
    postcss: {
      // px转换配置
      pxtransform: {
        enable: true,
        config: {
          // 不进行px转换的选择器黑名单
          selectorBlackList: ['nut-']
        }
      },
      // 图片处理配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      // CSS Modules配置
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // H5配置
  h5: {
    // 公共路径
    publicPath: '/',
    // 静态资源目录
    staticDirectory: 'static',
    // esnext模块
    // esnextModules: ['nutui-react'],
    // PostCSS配置
    postcss: {
      // px转换配置
      pxtransform: {
        enable: true,
        config: {
          // 不进行px转换的选择器黑名单
          selectorBlackList: ['nut-']
        }
      },
      // 自动添加前缀配置
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      // CSS Modules配置
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

// 导出一个函数，根据环境变量合并配置
module.exports = function (merge) {
  // 如果是开发环境
  if (process.env.NODE_ENV === 'development') {
    // 合并开发环境配置
    return merge({}, config, require('./dev'))
  }
  // 合并生产环境配置
  return merge({}, config, require('./prod'))
}
