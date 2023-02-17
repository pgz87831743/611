<template>

  <div>
    <el-button type="danger" @click="$router.push({path:'/'})">退出登录</el-button>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          align="center"
          prop="id"
          label="id">
      </el-table-column>
      <el-table-column
          align="center"
          prop="name"
          label="歌名"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="creator"
          label="作者"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="length"
          label="时长"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="cover"
          label="cover"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="type"
          label="type"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="filter"
          label="filter"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="createdAt"
          label="createdAt"
      >
      </el-table-column>

    </el-table>
  </div>
</template>


<script>

export default {
  name: "MusicItem",
  data() {
    return {
      tableData: [],
      playIcon: 'el-icon-video-play'

    }
  },
  components: {},
  methods: {

    getList() {

      this.$http.get('music/getlist')
          .then(resp => {
            this.tableData = resp.data.data;
          })
    },

    playMusic(target, row) {
      if (row.player) {
        if (row.player.paused) {
          row.player.play();
          target.target.setAttribute('class', 'el-icon-loading')
        } else {
          row.player.pause();
          target.target.setAttribute('class', 'el-icon-video-play')
        }
      } else {
        let player = new Audio(row.url);
        player.play(); //播放 mp3这个音频对象
        row.player = player;
        target.target.setAttribute('class', 'el-icon-loading')
      }

    }
  },
  mounted() {
    this.getList()
  },

}
</script>


<style scoped>

</style>
