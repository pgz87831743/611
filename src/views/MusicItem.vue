<template>
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
        prop="auth"
        label="作者">
    </el-table-column>
    <el-table-column
        align="center"
        label="封面">
      <template slot-scope="scope">
        <el-image style="width: 100%; height: 100px"
                  src="https://img1.baidu.com/it/u=133990705,310893509&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668013200&t=a635a305a5a97d9bb6e31332e1e59220"
                  >
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </template>
    </el-table-column>
    <el-table-column
        align="center"
        prop="url"
        label="播放">
      <template slot-scope="scope">
        <el-button type="primary" :icon="playIcon" circle @click="playMusic($event,scope.row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>

export default {
  name: "MusicItem",
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: '稻香',
          img: '1',
          auth: '周杰伦',
          url: 'http://m801.music.126.net/20230217011320/369b4cb70d2d683360e512af814d6b09/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8880902899/44d6/d0fc/6897/2822398101b5a22394cb834d072e8b33.mp3',
        },
        {
          id: '2',
          name: 'hahha',
          img: '2',
          auth: '嘿嘿',
          url: 'http://m801.music.126.net/20230217012702/131269cfe7c33405ba1c1bfe02689fbf/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096498052/0021/b769/3920/01cd7b3391fb1375bf406135d10371d9.mp3',
        }
      ],
      playIcon:'el-icon-video-play'

  }
  },
  components: {},
  methods: {
    playMusic(target,row) {
      if (row.player) {
        if (row.player.paused) {
          row.player.play();
          target.target.setAttribute('class','el-icon-loading')
        } else {
          row.player.pause();
          target.target.setAttribute('class','el-icon-video-play')
        }
      } else {
        let player = new Audio(row.url);
        player.play(); //播放 mp3这个音频对象
        row.player = player;
        target.target.setAttribute('class','el-icon-loading')
      }

    }
  },
  mounted() {
  },

}
</script>


<style scoped>

</style>
