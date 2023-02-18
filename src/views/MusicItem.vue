<template>

  <div>
    <el-button type="danger" @click="$router.push({path:'/'})">退出登录</el-button>
<!--    <el-upload-->
<!--        ref="upload"-->
<!--        class="upload-demo"-->
<!--        :action="this.$http.defaults.baseURL+'file/upload'"-->
<!--        multiple-->
<!--        :on-success:="onSuccess"-->
<!--        style="display: inline-block">-->
<!--      <el-button size="small" type="primary">文件上传</el-button>-->
<!--    </el-upload>-->
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
              :preview-src-list="[]">
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
      <el-table-column
          label="操作"
      >
        <template v-slot="scope">
          <el-button @click="playMusic($event,scope.row)">播放</el-button>
          <el-button @click="clickUpdate(scope.row)">更新</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        title="更新"
        :visible.sync="dialogVisible"
        width="30%"
    >
      <el-form label-position="right" label-width="80px" :model="diadta">
        <el-form-item label="歌名">
          <el-input v-model="diadta.name"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="diadta.creator"></el-input>
        </el-form-item>
        <el-form-item label="时长">
          <el-input v-model="diadta.length"></el-input>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-model="diadta.cover"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="diadta.type"></el-input>
        </el-form-item>
        <el-form-item label="歌曲地址">
          <el-input v-model="diadta.file"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dsubmit()">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>


<script>

export default {
  name: "MusicItem",
  data() {
    return {
      dialogVisible: false,
      diadta: {
        "id": 2,
        "name": "Kodokushi",
        "creator": "Mihka!",
        "length": "3:20",
        "cover": "http://rq5j7qudz.hn-bkt.clouddn.com/109951163998298252.jpg",
        "type": "电子",
        "file": null,
        "createdAt": "2023-02-09 15:10:04"
      },
      tableData: [],
      playIcon: 'el-icon-video-play',
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  components: {},
  methods: {

    onSuccess(response, file, fileList) {

      console.log(response)
      console.log(123123)
      this.$refs['upload'].clearFiles();
    },

    dsubmit() {
      this.dialogVisible = false
      this.$http.put('music/update', [this.diadta])
          .then(resp => {
            this.$message({
              message: resp.data.msg,
              showClose: true,
              type: 'success',
              duration: 1000,
              onClose: () => {
                this.getList();
              }
            });
          })
    },

    clickUpdate(row) {
      this.diadta = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true
    },

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
          target.target.innerText = '暂停'
        } else {
          row.player.pause();
          target.target.innerText = '播放'
        }
      } else {
        let player = new Audio(row.file);
        player.play(); //播放 mp3这个音频对象
        row.player = player;
        target.target.innerText = '暂停'
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
