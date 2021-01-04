<template>
  <div class="table-pagination">
    <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="key"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableCount"
        :page-size="5"
        @current-change="handleCurrentChange">
      </el-pagination>
  </div>
</template>

<script>
import { tableMap } from './tableMap';

export default {
  name: 'TablePagination',
  data() {
    return {
        tableData: [],
        loading: false,
    }
  },
  computed: {
    tableCount() {
      return tableMap.length;
    }
  },
  mounted() {
    this.tableData = tableMap.slice(0, 5);
  },
  methods: {
    handleCurrentChange(pageNum) {
      this.loading = true;
      setTimeout(() => {
        const start = (pageNum - 1) * 5;
        const end = start + 5;
        this.tableData = tableMap.slice(start, end);
        this.loading = false;
      }, 1000)

    }
  }
}
</script>

<style scoped>
.home-page .el-pagination {
  margin-top: 20px;
  float: right;
}
</style>