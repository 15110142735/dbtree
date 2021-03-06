import request from '@/utils/request'

const code = {

  /**
   * 生成mybatis代码
   * @param {*} dbName 库名
   * @param {*} domainPackage domain包
   * @param {*} mapperPackage mapper包
   * @param {*} useActualColumnNames 使用真实列名作为字段名
   * @param {*} tables 表
   */
  generate(dbName, domainPackage, mapperPackage, useActualColumnNames, tables) {
    return request({
      url: '/code/generate',
      method: 'get',
      params: {
        dbName: dbName,
        domainPackage: domainPackage,
        mapperPackage: mapperPackage,
        useActualColumnNames: useActualColumnNames,
        tables: tables
      }
    });
  },

  /**
   * 下载mybatis资源
   * @param {*} zipFile 文件名
   */
  mybatisDownload(zipFile) {
    return request({
      url: '/code/mybatisDownload',
      method: 'get',
      params: {
        zipFile: zipFile
      },
      responseType: 'blob'
    });
  },

  /**
   * 表结构导出markdown文档
   * @param {*} dbName 库名
   * @param {*} tables 表
   */
  exportMarkdown(dbName, tables) {
    return request({
      url: '/code/exportMarkdown',
      method: 'get',
      params: {
        dbName: dbName,
        tables: tables
      },
      responseType: 'blob'
    });
  }
}



export default code
