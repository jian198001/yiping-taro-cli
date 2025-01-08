// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md

/**
 * Babel 配置对象
 * @description 这个配置对象定义了 Babel 的预设和插件。
 */
module.exports = {
  /**
   * Babel 预设
   * @description 这个数组定义了 Babel 的预设，包括 Taro 预设。
   */
  presets: [
    /**
     * Taro 预设
     * @description 这个预设配置了 Taro 框架的 Babel 转换。
     */
    ['taro', {
      // 指定使用的框架为 React
      framework: 'react',
      // 启用 TypeScript 支持
      ts: true
    }]
  ],
  /**
   * Babel 插件
   * @description 这个数组定义了 Babel 的插件，包括 NutUI 的 React Taro 和 Biz 插件。
   */
  plugins: [
    /**
     * NutUI React Taro 插件
     * @description 这个插件配置了 NutUI React Taro 库的按需导入。
     */
    [
      "import",
      {
        // 指定库的名称
        "libraryName": "@nutui/nutui-react-taro",
        // 指定库的目录
        "libraryDirectory": "dist/esm",
        // 启用样式导入
        "style": true,
        // 禁用驼峰命名转换
        "camel2DashComponentName": false
      },
      'nutui-react-taro'
    ],
    /**
     * NutUI Biz 插件
     * @description 这个插件配置了 NutUI Biz 库的按需导入。
     */
    [
      "import",
      {
        // 指定库的名称
        "libraryName": "@nutui/nutui-biz",
        // 指定库的目录
        "libraryDirectory": "dist/esm",
        // 启用样式导入
        "style": true,
        // 禁用驼峰命名转换
        "camel2DashComponentName": false
      },
      'nutui-biz'
    ]
  ]
}
