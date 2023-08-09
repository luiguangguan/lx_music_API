import leaderboard from './leaderboard.js'
import lyric from './lyric.js'
import songList from './songList.js'
import musicSearch from './musicSearch.js'
import { apis } from '../api-source.js'
import hotSearch from './hotSearch.js'
import comment from './comment.js'
// import tipSearch from './tipSearch.js'

const tx = {
  // tipSearch,
  leaderboard,
  songList,
  musicSearch,
  hotSearch,
  comment,

  getMusicUrl(songInfo, type) {
    return apis('tx').getMusicUrl(songInfo, type)
  },
  getLyric(songInfo) {
    // let singer = songInfo.singer.indexOf('、') > -1 ? songInfo.singer.split('、')[0] : songInfo.singer
    return lyric.getLyric(songInfo)
  },
  getPic(songInfo) {
    return apis('tx').getPic(songInfo)
  },
  getMusicDetailPageUrl(songInfo) {
    return `https://y.qq.com/n/yqq/song/${songInfo.songmid}.html`
  },
}

export default tx
