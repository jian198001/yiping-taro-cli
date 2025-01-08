/// <reference types="@tarojs/taro" />

/**
 * 声明所有以 .png 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .png 结尾的文件都可以被视为模块。
 */
declare module '*.png';

/**
 * 声明所有以 .gif 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .gif 结尾的文件都可以被视为模块。
 */
declare module '*.gif';

/**
 * 声明所有以 .jpg 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .jpg 结尾的文件都可以被视为模块。
 */
declare module '*.jpg';

/**
 * 声明所有以 .jpeg 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .jpeg 结尾的文件都可以被视为模块。
 */
declare module '*.jpeg';

/**
 * 声明所有以 .svg 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .svg 结尾的文件都可以被视为模块。
 */
declare module '*.svg';

/**
 * 声明所有以 .css 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .css 结尾的文件都可以被视为模块。
 */
declare module '*.css';

/**
 * 声明所有以 .less 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .less 结尾的文件都可以被视为模块。
 */
declare module '*.less';

/**
 * 声明所有以 .scss 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .scss 结尾的文件都可以被视为模块。
 */
declare module '*.scss';

/**
 * 声明所有以 .sass 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .sass 结尾的文件都可以被视为模块。
 */
declare module '*.sass';

/**
 * 声明所有以 .styl 结尾的模块
 * @description 这个声明告诉 TypeScript 编译器，所有以 .styl 结尾的文件都可以被视为模块。
 */
declare module '*.styl';

/**
 * 声明 NodeJS 中的 ProcessEnv 接口
 * @description 这个声明扩展了 NodeJS 的 ProcessEnv 接口，添加了一个 TARO_ENV 属性。
 */
declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * Taro 环境变量
     * @description 这个属性定义了 Taro 支持的所有环境。
     */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

