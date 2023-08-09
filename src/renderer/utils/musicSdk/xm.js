// import { apis } from '../api-source.js'
// import leaderboard from './leaderboard.js'
// import songList from './songList.js'
// import musicSearch from './musicSearch.js'
// import pic from './pic.js'
// import lyric from './lyric.js'
// import hotSearch from './hotSearch.js'
// import comment from './comment.js'
// import musicInfo from './musicInfo.js'
// import { closeVerifyModal } from './util.js'

const xm = {
  // songList,
  // musicSearch,
  // leaderboard,
  // hotSearch,
  // closeVerifyModal,
  comment: {
    getComment() {
      return Promise.reject(new Error('fail'))
    },
    getHotComment() {
      return Promise.reject(new Error('fail'))
    },
  },
  getMusicUrl(songInfo, type) {
    return {
      promise: Promise.reject(new Error('fail')),
    }
    // return apis('xm').getMusicUrl(songInfo, type)
  },
  getLyric(songInfo) {
    return {
      promise: Promise.reject(new Error('fail')),
    }
    // return lyric.getLyric(songInfo)
  },
  getPic(songInfo) {
    return Promise.reject(new Error('fail'))
    // return pic.getPic(songInfo)
  },
  // getMusicDetailPageUrl(songInfo) {
  //   if (songInfo.songStringId) return `https://www.xiami.com/song/${songInfo.songStringId}`

  //   musicInfo.getMusicInfo(songInfo).then(({ data }) => {
  //     songInfo.songStringId = data.songStringId
  //   })
  //   return `https://www.xiami.com/song/${songInfo.songmid}`
  // },
  // init() {
  //   getToken()
  // },
}

export default xm
