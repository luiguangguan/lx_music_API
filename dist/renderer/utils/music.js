// const { checkPath, joinPath, extname, basename, readFile, getFileStats } = require('@common/utils/nodejs');
// const { formatPlayTime } = require('@common/utils/common');
// export const checkDownloadFileAvailable = async(musicInfo: LX.Download.ListItem, savePath: string): Promise<boolean> => {
//   return musicInfo.isComplate && !/\.ape$/.test(musicInfo.metadata.fileName) &&
//     (await checkPath(musicInfo.metadata.filePath) || await checkPath(joinPath(savePath, musicInfo.metadata.fileName)))
// }
// export const checkLocalFileAvailable = async(musicInfo: LX.Music.MusicInfoLocal): Promise<boolean> => {
//   return await checkPath(musicInfo.meta.filePath)
// }
// /**
//  * 检查音乐文件是否存在
//  * @param musicInfo
//  * @param savePath
//  */
// export const checkMusicFileAvailable = async(musicInfo: LX.Music.MusicInfo | LX.Download.ListItem, savePath: string): Promise<boolean> => {
//   if ('progress' in musicInfo) {
//     return await checkDownloadFileAvailable(musicInfo, savePath)
//   } else if (musicInfo.source == 'local') {
//     return await checkLocalFileAvailable(musicInfo)
//   } else return true
// }
// export const getDownloadFilePath = async(musicInfo: LX.Download.ListItem, savePath: string): Promise<string> => {
//   if (musicInfo.isComplate && !/\.ape$/.test(musicInfo.metadata.fileName)) {
//     if (await checkPath(musicInfo.metadata.filePath)) return musicInfo.metadata.filePath
//     const path = joinPath(savePath, musicInfo.metadata.fileName)
//     if (await checkPath(path)) return path
//   }
//   return ''
// }
// export const getLocalFilePath = async(musicInfo: LX.Music.MusicInfoLocal): Promise<string> => {
//   return await checkPath(musicInfo.meta.filePath) ? musicInfo.meta.filePath : ''
// }
// /**
//  * 获取音乐文件路径
//  * @param musicInfo
//  * @param savePath
//  * @returns
//  */
// export const getMusicFilePath = async(musicInfo: LX.Music.MusicInfo | LX.Download.ListItem, savePath: string): Promise<string> => {
//   if ('progress' in musicInfo) {
//     return await getDownloadFilePath(musicInfo, savePath)
//   } else if (musicInfo.source == 'local') {
//     return await getLocalFilePath(musicInfo)
//   }
//   return ''
// }
// /**
//  * 创建本地音乐信息对象
//  * @param path 文件路径
//  * @returns
//  */
// export const createLocalMusicInfo = async(path: string): Promise<LX.Music.MusicInfoLocal | null> => {
//   if (!await checkPath(path)) return null
//   const { parseFile } = await import('music-metadata')
//   let metadata
//   try {
//     metadata = await parseFile(path)
//   } catch (err) {
//     console.log(err)
//     return null
//   }
//   // console.log(metadata)
//   let ext = extname(path)
//   // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
//   let name = (metadata.common.title || basename(path, ext)).trim()
//   let singer = metadata.common.artists?.length ? metadata.common.artists.map(a => a.trim()).join('、') : ''
//   let interval = metadata.format.duration ? formatPlayTime(metadata.format.duration) : ''
//   let albumName = metadata.common.album?.trim() ?? ''
//   return {
//     id: path,
//     name,
//     singer,
//     source: 'local',
//     interval,
//     meta: {
//       albumName,
//       filePath: path,
//       songId: path,
//       picUrl: '',
//       ext: ext.replace(/^\./, ''),
//     },
//   }
// }
// let prevFileInfo: {
//   path: string
//   promise: Promise<LX.MusicMetadataModule.IAudioMetadata | null>
// } = {
//   path: '',
//   promise: Promise.resolve(null),
// }
// const getFileMetadata = async(path: string) => {
//   if (prevFileInfo.path == path) return prevFileInfo.promise
//   prevFileInfo.path = path
//   return prevFileInfo.promise = checkPath(path).then(async(isExist) => {
//     return isExist ? import('music-metadata').then(async({ parseFile }) => parseFile(path)) : null
//   })
// }
// /**
//  * 获取歌曲文件封面图片
//  * @param path 路径
//  */
// export const getLocalMusicFilePic = async(path: string) => {
//   const metadata = await getFileMetadata(path)
//   if (!metadata) return null
//   const { selectCover } = await import('music-metadata')
//   return selectCover(metadata.common.picture)
// }
// // const timeExp = /^\[([\d:.]*)\]{1}/
// /**
//  * 解析歌词文件，分离可能存在的翻译、罗马音歌词
//  * @param lrc 歌词内容
//  * @returns
//  */
// // export const parseLyric = (lrc: string): LX.Music.LyricInfo => {
// //   const lines = lrc.split(/\r\n|\r|\n/)
// //   const lyrics: string[][] = []
// //   const map = new Map<string, number>()
// //   for (let i = 0; i < lines.length; i++) {
// //     const line = lines[i].trim()
// //     let result = timeExp.exec(line)
// //     if (result) {
// //       const index = map.get(result[1]) ?? 0
// //       if (!lyrics[index]) lyrics[index] = []
// //       lyrics[index].push(line)
// //       map.set(result[1], index + 1)
// //     } else {
// //       if (!lyrics[0]) lyrics[0] = []
// //       lyrics[0].push(line)
// //     }
// //   }
// //   const lyricInfo: LX.Music.LyricInfo = {
// //     lyric: lyrics[0].join('\n'),
// //     tlyric: '',
// //   }
// //   if (lyrics[1]) lyricInfo.tlyric = lyrics[1].join('\n')
// //   if (lyrics[2]) lyricInfo.rlyric = lyrics[2].join('\n')
// //   return lyricInfo
// // }
// /**
//  * 获取歌曲文件歌词
//  * @param path 路径
//  */
// export const getLocalMusicFileLyric = async(path: string): Promise<string | null> => {
//   // 尝试读取同目录下的同名lrc文件
//   const lrcPath = path.replace(new RegExp('\\' + extname(path) + '$'), '.lrc')
//   const stats = await getFileStats(lrcPath)
//   // console.log(lrcPath, stats)
//   if (stats && stats.size < 1024 * 1024 * 10) {
//     const lrcBuf = await readFile(lrcPath)
//     const { detect } = await import('jschardet')
//     const { confidence, encoding } = detect(lrcBuf)
//     console.log('lrc file encoding', confidence, encoding)
//     if (confidence > 0.8) {
//       const iconv = await import('iconv-lite')
//       if (iconv.encodingExists(encoding)) {
//         const lrc = iconv.decode(lrcBuf, encoding)
//         if (lrc) return lrc
//       }
//     }
//   }
//   // 尝试读取文件内歌词
//   const metadata = await getFileMetadata(path)
//   if (!metadata) return null
//   if (metadata.common.lyrics?.length && metadata.common.lyrics[0].length > 10) {
//     return metadata.common.lyrics[0]
//   }
//   // console.log(metadata)
//   for (const info of Object.values(metadata.native)) {
//     const ust = info.find(i => i.id == 'USLT')
//     if (ust && ust.value.text.length > 10) return ust.value.text
//   }
//   return null
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVuZGVyZXIvdXRpbHMvbXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEdBQThHO0FBQzlHLDhEQUE4RDtBQUU5RCw0SEFBNEg7QUFDNUgsa0ZBQWtGO0FBQ2xGLHlIQUF5SDtBQUN6SCxJQUFJO0FBRUosMEdBQTBHO0FBQzFHLG9EQUFvRDtBQUNwRCxJQUFJO0FBRUosTUFBTTtBQUNOLGdCQUFnQjtBQUNoQixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLE1BQU07QUFDTiw4SUFBOEk7QUFDOUksbUNBQW1DO0FBQ25DLG1FQUFtRTtBQUNuRSw4Q0FBOEM7QUFDOUMsc0RBQXNEO0FBQ3RELHVCQUF1QjtBQUN2QixJQUFJO0FBRUosb0hBQW9IO0FBQ3BILCtFQUErRTtBQUMvRSwyRkFBMkY7QUFDM0YsbUVBQW1FO0FBQ25FLDZDQUE2QztBQUM3QyxNQUFNO0FBQ04sY0FBYztBQUNkLElBQUk7QUFFSixrR0FBa0c7QUFDbEcsbUZBQW1GO0FBQ25GLElBQUk7QUFHSixNQUFNO0FBQ04sY0FBYztBQUNkLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckIsY0FBYztBQUNkLE1BQU07QUFDTixzSUFBc0k7QUFDdEksbUNBQW1DO0FBQ25DLDREQUE0RDtBQUM1RCw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLE1BQU07QUFDTixjQUFjO0FBQ2QsSUFBSTtBQUVKLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLGNBQWM7QUFDZCxNQUFNO0FBQ04sd0dBQXdHO0FBQ3hHLDRDQUE0QztBQUM1Qyx5REFBeUQ7QUFFekQsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDVix1Q0FBdUM7QUFDdkMsb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsTUFBTTtBQUVOLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsNkVBQTZFO0FBQzdFLHFFQUFxRTtBQUNyRSw2R0FBNkc7QUFDN0csNEZBQTRGO0FBQzVGLHdEQUF3RDtBQUV4RCxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixjQUFjO0FBQ2QsdUJBQXVCO0FBQ3ZCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLHFDQUFxQztBQUNyQyxTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUk7QUFFSixzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLG1FQUFtRTtBQUNuRSxRQUFRO0FBQ1IsY0FBYztBQUNkLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osbURBQW1EO0FBQ25ELCtEQUErRDtBQUMvRCw2QkFBNkI7QUFDN0IsMkVBQTJFO0FBQzNFLHFHQUFxRztBQUNyRyxPQUFPO0FBQ1AsSUFBSTtBQUNKLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLE1BQU07QUFDTiwrREFBK0Q7QUFDL0QsaURBQWlEO0FBQ2pELCtCQUErQjtBQUMvQiwyREFBMkQ7QUFDM0QsZ0RBQWdEO0FBQ2hELElBQUk7QUFFSix5Q0FBeUM7QUFDekMsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckIsY0FBYztBQUNkLE1BQU07QUFDTixzRUFBc0U7QUFDdEUsNkNBQTZDO0FBQzdDLHFDQUFxQztBQUNyQyw2Q0FBNkM7QUFFN0MsZ0RBQWdEO0FBQ2hELHNDQUFzQztBQUN0Qyx5Q0FBeUM7QUFDekMsdUJBQXVCO0FBQ3ZCLGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QyxrQkFBa0I7QUFDbEIsMENBQTBDO0FBQzFDLGdDQUFnQztBQUNoQyxXQUFXO0FBQ1gsU0FBUztBQUNULCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCw4REFBOEQ7QUFDOUQsOERBQThEO0FBRTlELHdCQUF3QjtBQUN4QixPQUFPO0FBR1AsTUFBTTtBQUNOLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIsTUFBTTtBQUNOLHlGQUF5RjtBQUN6Rix3QkFBd0I7QUFDeEIsaUZBQWlGO0FBQ2pGLDhDQUE4QztBQUM5QyxtQ0FBbUM7QUFDbkMsa0RBQWtEO0FBQ2xELDZDQUE2QztBQUM3QyxtREFBbUQ7QUFDbkQsc0RBQXNEO0FBQ3RELDZEQUE2RDtBQUM3RCw4QkFBOEI7QUFDOUIsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5QyxxREFBcUQ7QUFDckQsOEJBQThCO0FBQzlCLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTTtBQUVOLGlCQUFpQjtBQUNqQixpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLG1GQUFtRjtBQUNuRix1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOLDZCQUE2QjtBQUM3Qix5REFBeUQ7QUFDekQsaURBQWlEO0FBQ2pELG1FQUFtRTtBQUNuRSxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLElBQUkifQ==