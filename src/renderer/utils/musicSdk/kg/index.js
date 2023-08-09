import leaderboard from './leaderboard.js'
import { apis } from '../api-source.js'
import songList from './songList.js'
import musicSearch from './musicSearch.js'
import pic from './pic.js'
import lyric from './lyric.js'
import hotSearch from './hotSearch.js'
import comment from './comment.js'
// import tipSearch from './tipSearch.js'

const kg = {
  // tipSearch,
  leaderboard,
  songList,
  musicSearch,
  hotSearch,
  comment,
  getMusicUrl(songInfo, type) {
    return apis('kg').getMusicUrl(songInfo, type)
  },
  getLyric(songInfo) {
    return lyric.getLyric(songInfo)
  },
  // getLyric(songInfo) {
  //   return apis('kg').getLyric(songInfo)
  // },
  getPic(songInfo) {
    return pic.getPic(songInfo)
  },
  getMusicDetailPageUrl(songInfo) {
    return `https://www.kugou.com/song/#hash=${songInfo.hash}&album_id=${songInfo.albumId}`
  },
  // getPic(songInfo) {
  //   return apis('kg').getPic(songInfo)
  // },
}

export default kg
