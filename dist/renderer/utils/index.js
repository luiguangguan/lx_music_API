// const { dateFormat } = require('@common/utils/common');
// export * from '@common/utils/renderer'
// export * from '@common/utils/nodejs'
// export * from '@common/utils/common'
// export * from '@common/utils/tools'
// /**
//  * 格式化播放数量
//  * @param {*} num 数字
//  */
// export const formatPlayCount = (num: number): string => {
//   if (num > 100000000) return `${Math.trunc(num / 10000000) / 10}亿`
//   if (num > 10000) return `${Math.trunc(num / 1000) / 10}万`
//   return String(num)
// }
// /**
//  * 时间格式化
//  */
// export const dateFormat2 = (time: number): string => {
//   let differ = Math.trunc((Date.now() - time) / 1000)
//   if (differ < 60) {
//     return window.i18n.t('date_format_second', { num: differ })
//   } else if (differ < 3600) {
//     return window.i18n.t('date_format_minute', { num: Math.trunc(differ / 60) })
//   } else if (differ < 86400) {
//     return window.i18n.t('date_format_hour', { num: Math.trunc(differ / 3600) })
//   } else {
//     return dateFormat(time)
//   }
// }
// /**
//  * 设置标题
//  */
// let dom_title = document.getElementsByTagName('title')[0]
// export const setTitle = (title: string | null) => {
//   title ||= '洛雪音乐助手'
//   dom_title.innerText = title
// }
// // export const getProxyInfo = () => {
// //   return proxy.enable && proxy.host
// //     ? `http://${proxy.username}:${proxy.password}@${proxy.host}:${proxy.port}`
// //     : proxy.envProxy
// //       ? `http://${proxy.envProxy.host}:${proxy.envProxy.port}`
// //       : undefined
// // }
// export const getFontSizeWithScreen = (screenWidth: number = window.innerWidth): number => {
//   return screenWidth <= 1440
//     ? 16
//     : screenWidth <= 1920
//       ? 18
//       : screenWidth <= 2560
//         ? 20
//         : screenWidth <= 2560 ? 20 : 22
// }
// export const deduplicationList = <T extends LX.Music.MusicInfo>(list: T[]): T[] => {
//   const ids = new Set<string>()
//   return list.filter(s => {
//     if (ids.has(s.id)) return false
//     ids.add(s.id)
//     return true
//   })
// }
// export const langS2T = async(str: string) => {
//   return await window.lx.worker.main.langS2t(Buffer.from(str).toString('base64')).then(b64 => Buffer.from(b64, 'base64').toString())
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVuZGVyZXIvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBRTFELHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLHNDQUFzQztBQUV0QyxNQUFNO0FBQ04sYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixNQUFNO0FBQ04sNERBQTREO0FBQzVELHNFQUFzRTtBQUN0RSw4REFBOEQ7QUFDOUQsdUJBQXVCO0FBQ3ZCLElBQUk7QUFHSixNQUFNO0FBQ04sV0FBVztBQUNYLE1BQU07QUFDTix5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELHVCQUF1QjtBQUN2QixrRUFBa0U7QUFDbEUsZ0NBQWdDO0FBQ2hDLG1GQUFtRjtBQUNuRixpQ0FBaUM7QUFDakMsbUZBQW1GO0FBQ25GLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsTUFBTTtBQUNOLElBQUk7QUFHSixNQUFNO0FBQ04sVUFBVTtBQUNWLE1BQU07QUFDTiw0REFBNEQ7QUFDNUQsc0RBQXNEO0FBQ3RELHVCQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsSUFBSTtBQUdKLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsb0ZBQW9GO0FBQ3BGLDBCQUEwQjtBQUMxQixvRUFBb0U7QUFDcEUsdUJBQXVCO0FBQ3ZCLE9BQU87QUFHUCw4RkFBOEY7QUFDOUYsK0JBQStCO0FBQy9CLFdBQVc7QUFDWCw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixlQUFlO0FBQ2YsMENBQTBDO0FBQzFDLElBQUk7QUFHSix1RkFBdUY7QUFDdkYsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QixzQ0FBc0M7QUFDdEMsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1AsSUFBSTtBQUVKLGlEQUFpRDtBQUNqRCx1SUFBdUk7QUFDdkksSUFBSSJ9