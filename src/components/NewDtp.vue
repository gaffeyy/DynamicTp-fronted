<template>
  <div>
    <el-row gutter="1" type="flex">
      <el-col :span="10" offset="0"><div class="grid-content bg-purple"></div>
        <div style="margin: 20px;"></div>
        <el-form label-position="right" label-width="100px" :model="formLabelAlign">
          <el-form-item label="线程池名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="核心线程数">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="最大线程数">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="线程存活时间">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="10" offset="5"><div class="grid-content bg-purple-light"></div>
        <el-form label-position="left" label-width="100px" :model="formLabelAlign">
          <el-form-item>

          </el-form-item>
          <el-form-item label="阻塞队列名称">
            <el-select v-model="form.region" placeholder="请选择队列类型">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="队列容量">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item>

          </el-form-item>
          <el-form-item label="拒绝策略">
            <el-select v-model="form.region" placeholder="请选择拒绝策略">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>




  </div>
</template>
<script>
import {left} from "core-js/internals/array-reduce";

export default {
  methods: {left},
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
      tableData: [{
        threadPoolName: "",
        corePoolSize: "",
        maximumPoolSize: "",
        keepAliveTime: "",
        queueName: "",
        capacity: "",
        rejectHandlerName: ""
      }],
    };

  }
}
</script>