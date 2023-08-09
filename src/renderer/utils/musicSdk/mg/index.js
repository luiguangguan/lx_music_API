import { apis } from '../api-source.js'
import leaderboard from './leaderboard.js'
import songList from './songList.js'
import musicSearch from './musicSearch.js'
import pic from './pic.js'
import lyric from './lyric.js'
import hotSearch from './hotSearch.js'
import comment from './comment.js'
// import tipSearch from './tipSearch.js'

const mg = {
  // tipSearch,
  songList,
  musicSearch,
  leaderboard,
  hotSearch,
  comment,
  getMusicUrl(songInfo, type) {
    return apis('mg').getMusicUrl(songInfo, type)
  },
  getLyric(songInfo) {
    return lyric.getLyric(songInfo)
  },
  getPic(songInfo) {
    return pic.getPic(songInfo)
  },
  getMusicDetailPageUrl(songInfo) {
    return `http://music.migu.cn/v3/music/song/${songInfo.copyrightId}`
  },
}

export default mg
