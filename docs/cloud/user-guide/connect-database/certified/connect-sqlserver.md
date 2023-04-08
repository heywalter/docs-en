# 连接 SQL Server

PostgreSQL是功能强大的开源对象关系数据库管理系统（ORDBMS）。Tapdata Cloud 支持将 SQL Server 作为源和目标数据库构建数据管道，本文介绍如何在 Tapdata Cloud 中添加 SQL Server 数据源。

## 准备工作

[SQL Server 数据源准备工作](../../../prerequisites/config-database/certified/sqlserver.md)

## 操作步骤

1. 登录 [Tapdata Cloud 平台](https://cloud.tapdata.net/console/v3/)。

2. 在左侧导航栏，单击**连接管理**。

3. 单击页面右侧的**创建连接**。

4. 在弹出的对话框中，单击**认证数据源**，然后选择 **SQL Server**。

5. 在跳转到的页面，根据下述说明填写 SQL Server 的连接信息。

   ![SQL Server 连接示例](../../../images/sqlserver_connection.png)

   * 连接信息设置
     * **连接名称**：填写具有业务意义的独有名称。
     * **连接类型**：支持将 SQL Server 作为源或目标库。
     * **数据库地址**：数据库连接地址。
     * **端口**：数据库的服务端口。
     * **数据库名称**：数据库名称，即一个连接对应一个数据库，如有多个数据库则需创建多个数据连接。
     * **账号**：数据库的账号。
     * **密码**：数据库账号对应的密码。
     * **Schema**：Schema 名称。
     * **其他连接串参数**：额外的连接参数，默认为空。
   * 高级设置
     * **时间类型的时区**：默认为数据库所用的时区，您也可以根据业务需求手动指定。
     * **包含表**：默认为**全部**，您也可以选择自定义并填写包含的表，多个表之间用英文逗号（,）分隔。
     * **排除表**：打开该开关后，可以设定要排除的表，多个表之间用英文逗号（,）分隔。
     * **Agent 设置**：默认为**平台自动分配**，您也可以手动指定 Agent。
     * **模型加载频率**：数据源中模型数量大于 1 万时，Tapdata Cloud 将按照设置的时间定期刷新模型。

6. 单击**连接测试**，测试通过后单击**保存**。

   :::tip

   如提示连接测试失败，请根据页面提示进行修复。

   :::