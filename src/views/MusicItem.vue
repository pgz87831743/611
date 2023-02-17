<template>

  <div>
    <el-button type="danger" @click="$router.push({path:'/'})">退出登录</el-button>
    <el-table
        :data="tableData"
        border
        style="width: 100%">

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
        <template v-slot="scope">
          <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.cover"
              :preview-src-list="[scope.row.cover]">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
          align="center"
          prop="type"
          label="type"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="file"
          label="file"
      >
      </el-table-column>
      <el-table-column
          align="center"
          prop="createdAt"
          label="createdAt"
      >
      </el-table-column>
      <el-table-column>
        <template v-slot="scope">
          <el-button @click="playMusic($event,scope.row)">播放</el-button>
        </template>
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
      console.log(target)
      if (row.player) {
        if (row.player.paused) {
          row.player.play();
          target.target.innerText='暂停'
        } else {
          row.player.pause();
          target.target.innerText='播放'
        }
      } else {
        let player = new Audio(row.file);
        player.play(); //播放 mp3这个音频对象
        row.player = player;
        target.target.innerText='暂停'
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
