import leaderboard from './leaderboard.js'
import { apis } from '../api-source.js'
import musicInfo from './musicInfo.js'
import songList from './songList.js'
import { httpFetch } from '../../request.js'
import musicSearch from './musicSearch.js'
import hotSearch from './hotSearch.js'

const bd = {
  leaderboard,
  songList,
  musicSearch,
  hotSearch,
  getMusicUrl(songInfo, type) {
    return apis('bd').getMusicUrl(songInfo, type)
  },
  getPic(songInfo) {
    const requestObj = this.getMusicInfo(songInfo)
    return requestObj.promise.then(info => info.pic_premium)
  },
  getLyric(songInfo) {
    const requestObj = this.getMusicInfo(songInfo)
    requestObj.promise = requestObj.promise.then(info => httpFetch(info.lrclink).promise.then(resp => ({ lyric: resp.body, tlyric: '' })))
    return requestObj
  },
  // getLyric(songInfo) {
  //   return apis('bd').getLyric(songInfo)
  // },
  // getPic(songInfo) {
  //   return apis('bd').getPic(songInfo)
  // },
  getMusicInfo(songInfo) {
    return musicInfo.getMusicInfo(songInfo.songmid)
  },
  getMusicDetailPageUrl(songInfo) {
    return `http://music.taihe.com/song/${songInfo.songmid}`
  },
}

export default bd
