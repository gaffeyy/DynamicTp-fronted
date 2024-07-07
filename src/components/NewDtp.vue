<template>
  <div>
    <el-row gutter="1" type="flex">
      <el-col :span="10" offset="0"><div class="grid-content bg-purple"></div>
        <div style="margin: 20px;"></div>
        <el-form label-position="right" label-width="100px" :model="formLabelAlign">
          <el-form-item label="线程池名称">
            <el-input v-model="tableData.threadPoolName"></el-input>
          </el-form-item>
          <el-form-item label="核心线程数">
            <el-input v-model="tableData.corePoolSize"></el-input>
          </el-form-item>
          <el-form-item label="最大线程数">
            <el-input v-model="tableData.maximumPoolSize"></el-input>
          </el-form-item>
          <el-form-item label="线程存活时间">
            <el-input v-model="tableData.keepAliveTime"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="10" offset="5"><div class="grid-content bg-purple-light"></div>
        <el-form label-position="left" label-width="100px" :model="formLabelAlign">
          <el-form-item>

          </el-form-item>
          <el-form-item label="阻塞队列名称">
            <el-select v-model="tableData.queueName" placeholder="请选择队列类型">
              <el-option label="ArrayBlockingQueue" value="ArrayBlockingQueue"></el-option>
              <el-option label="LinkedBlockingQueue" value="LinkedBlockingQueue"></el-option>
              <el-option label="PriorityBlockingQueue" value="PriorityBlockingQueue"></el-option>
              <el-option label="DelayQueue" value="DelayQueue"></el-option>
              <el-option label="SynchronousQueue" value="SynchronousQueue"></el-option>
              <el-option label="LinkedTransferQueue" value="LinkedTransferQueue"></el-option>
              <el-option label="LinkedBlockingDeque" value="LinkedBlockingDeque"></el-option>

            </el-select>
          </el-form-item>
          <el-form-item label="队列容量">
            <el-input v-model="tableData.capacity"></el-input>
          </el-form-item>
          <el-form-item label="队列公平">
            <el-select v-model="tableData.queueFair" placeholder="是否公平">
              <el-option label="True" value="True"></el-option>
              <el-option label="False" value="False"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item label="拒绝策略">
            <el-select v-model="tableData.rejectHandlerName" placeholder="请选择拒绝策略">
              <el-option label="AbortPolicy" value="AbortPolicy"></el-option>
              <el-option label="CallerRunsPolicy" value="CallerRunsPolicy"></el-option>
              <el-option label="DiscardOldestPolicy" value="DiscardOldestPolicy"></el-option>
              <el-option label="DiscardPolicy" value="DiscardPolicy"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="newDtp">创 建</el-button>
      </el-col>
    </el-row>




  </div>
</template>
<script>
import {left} from "core-js/internals/array-reduce";

export default {
  methods: {left,
    newDtp(){
    this.$http.post("/update/updateDtp",this.tableData).then((response)=>{
      this.$router.push("/main")
    })
    }
  },
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: {
        threadPoolName: "",
        corePoolSize: "",
        maximumPoolSize: "",
        keepAliveTime: "",
        queueName: "",
        capacity: "",
        rejectHandlerName: "",
        allowCoreThreadTimeOut:true,
        queueFair:true
      },
    };

  }
}
</script>