<template>
  <div>
<!--      <el-button @click="searchAllDtp">Search</el-button>-->
      <el-table
          :data="form"
          border
          style="width: 100%">
        <el-table-column
            fixed
            prop="threadPoolName"
            label="线程池名称"
            width="150">
        </el-table-column>
        <el-table-column
            prop="corePoolSize"
            label="核心线程数"
            width="150">
        </el-table-column>
        <el-table-column
            prop="maximumPoolSize"
            label="最大线程数"
            width="150">
        </el-table-column>
        <el-table-column
            prop="keepAliveTime"
            label="线程存活时间"
            width="150">
        </el-table-column>
        <el-table-column
            prop="queueName"
            label="工作队列名称"
            width="150">
        </el-table-column>
        <el-table-column
            prop="capacity"
            label="队列容量"
            width="150">
        </el-table-column>
        <el-table-column
            prop="rejectHandlerName"
            label="拒绝策略"
            width="150">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
<!--            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
            <!--          <el-button type="text" size="small">编辑</el-button>-->
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- Form -->

      <el-dialog title="DtpThreadPool" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Dtp名称" :label-width="formLabelWidth">
            <el-input v-model="form.threadPoolName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="核心线程数" :label-width="formLabelWidth">
            <el-input v-model="form.corePoolSize" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="最大线程数" :label-width="formLabelWidth">
            <el-input v-model="form.maximumPoolSize" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="线程存活时间" :label-width="formLabelWidth">
            <el-input v-model="form.keepAliveTime" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="工作队列名称" :label-width="formLabelWidth">
            <el-input v-model="form.queueName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="队列容量" :label-width="formLabelWidth">
            <el-input v-model="form.capacity" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="拒绝策略" :label-width="formLabelWidth">
            <el-input v-model="form.rejectHandlerName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="可选项" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateDtp">确 定</el-button>
        </div>
      </el-dialog>
    <el-container>
      <el-footer>
        <div class="block">
          <el-pagination
              @size-change="sizeChange"
              @current-change="currentChange"
              :hide-on-single-page="true"
              layout="prev, pager, next"
              :total="total"
              :page-size="pageSize"
              :current-page="page"
          >

          </el-pagination>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {

    return {
      dataForm: {
        core: '',
        max: ''
      },
      pageSize:5,
      total:0,
      page:0,
      tableData: [{
        threadPoolName: "",
        corePoolSize: "",
        maximumPoolSize: "",
        keepAliveTime: "",
        queueName: "",
        capacity: "",
        rejectHandlerName: ""
      }],

      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        threadPoolName: "",
        corePoolSize: "",
        maximumPoolSize: "",
        keepAliveTime: "",
        queueName: "",
        capacity: "",
        rejectHandlerName: ""
      },
      formLabelWidth: '120px'

    };
  },
  created() {
    this.searchAllDtp()
    this.getTableData()
  },
  methods: {
    updateDtp() {
      this.$http.post("/update/updateDtp", this.form).then((response) => {
        this.tableData = response.data
        console.log(response.data)
      })
      this.dialogFormVisible = false
    },
    searchAllDtp() {
      this.$http.get("/update/getAllDtp").then((response) => {
        this.tableData = response.data
        this.total = response.data.length
        this.page=1
        this.pageSize=5
        this.getTableData()
        console.log("alldata",this.tableData)
      })
    },
    handleClick(row) {
      console.log(row);
    },
    submitForm(formName) {
      this.$http.get("/update/getAllDtp", this.dataForm).then((
          response
      ) => {
        this.tableData = response.data
        console.log(response.data)
      })
    },
    resetForm(formName) {
    },
    edit(row) {
      this.dialogFormVisible = true
      this.form = row
    },
    pageChange(currentPage){
      this.$http.post("/getPage",{
        currentPage: currentPage,
        pageSize: this.pageSize
      }).then((response)=>{
        //
      })
    },
    getTableData(){
      // this.searchAllDtp()
      this.form=this.tableData.slice(
          (this.page - 1)*this.pageSize,
          this.page*this.pageSize
      );
      this.total = this.tableData.length
      console.log("form gettable",this.form)
    },
    currentChange(val){
      console.log("翻页,当前为第几页",val);
      console.log("form curretnchange",this.form)
      this.page=val;
      this.getTableData();
    },
    sizeChange(val){
      console.log("改变每页多少条,当前一页多少条数据",val);
      this.pageSize=val;
      this.page=1;
      this.getTableData();
    },
  }
}
</script>