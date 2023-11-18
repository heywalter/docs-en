# SQL Server

Tapdata Cloud provides comprehensive support for building data pipelines utilizing Microsoft SQL Server as both the source and target database. Microsoft SQL Server is a highly regarded relational database management system developed by Microsoft.

This article serves as a detailed guide, outlining the steps to seamlessly incorporate a SQL Server database into Tapdata Cloud, enabling efficient data integration and management within your pipelines.

## Supported Versions

SQL Server 2005, 2008, 2008 R2, 2012, 2014, 2016, 2017, 2019 and 2022.

:::tip

This article uses SQL Server 2017, which was deployed on Windows Server 2019 as an example to demonstrate the operation process. If you are deployed on a Linux platform and as a source database, you need to [install and enable the SQL Server agent](https://learn.microsoft.com/zh-cn/sql/linux/sql-server-linux-setup-sql-agent?view=sql-server-2017#EnableAgentAfterCU4).

:::

<details>
<summary>SQL Server 2005 as a Source Database Solution</summary>
Since CDC support starts with SQL Server 2008, for earlier versions, you need to use the Custom SQL feature to simulate change data capture. When copying data from an older version, the source table must have a change tracking column, such as <b>last_updated_time</b>, which is updated each time a record is inserted or updated. Then, when creating a data replication task, the task's synchronization type is selected to be <b>full</b>, and the <b>custom SQL</b> is set to <b>true</b> for repeated runs, while providing the appropriate custom SQL for the mapping design.

</details>

## Preparations

import Content from '../../../reuse-content/_preparations.md';

<Content />

### As a Source Database

1. Log in to SQL Server Management Studio or SQLcmd as a sysadmin (for example, **sa**).

2. Execute the following command to enable Change Data Capture (CDC) for the specified database (recommended) or table.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="dbcdc" label="Enable Change Data Capture for a Database" default>
    <p>Before execute the following command, replace the <b>database_name</b>  with your database name.</p>
    <pre>-- Enable change data capture<br />
   USE database_name<br />
   GO<br />
   EXEC sys.sp_cdc_enable_db<br />
   GO
   <br />
   <br />
-- Check the value of is_cdc_enabled, if it's 1, change data capture is on<br />
   SELECT [name], database_id, is_cdc_enabled<br />
   FROM sys.databases<br />
   WHERE [name] = N'database_name'<br />
   GO</pre>
   </TabItem>
   <TabItem value="tablecdc" label="Enable Change Data Capture for a Table">

   <p>Before the following command, replace the database name, schema name, and other information respectively, as described below the code block.</p>
    <pre>-- Enable change data capture<br />
    USE database_namebr />
GO
EXEC sys.sp_cdc_enable_table<br />
@source_schema = N'schema_name',<br />
@source_name = N'table_name',<br />
@role_name = N'role_name'<br />
GO<br />
<br />-- Check the value of is_tracked_by_cdc, if it's 1, change data capture is on<br />
use database_name<br />
go<br />
SELECT [name],is_tracked_by_cdc<br />
FROM sys.tables<br />
WHERE [name] = N'table_name'<br />
go</pre>

<ul>
<li>database_name: Enter the database name.</li>
<li>table_name: Enter the table name。</li>
<li>role_name: Enter the role name that can access change data, or set the settings role to NULL if you don't want to use it.</li>
</ul>
<p>If you specified a role when you enabled incremental replication, make sure that the database user has the appropriate role, so Tapdata Cloud can access incremental replication tables.</p>
   </TabItem>
  </Tabs>


4. Execute the following format of the command to create a user for the data copy or development task.

   ```sql
   -- Create a login user
   CREATE LOGIN login_name WITH PASSWORD='passwd', default_database=database_name;

   -- Create a database user
   CREATE USER login_name FOR LOGIN login_name with default_schema=schema_name;

   ```

   * **login_name**: Enter user name.
   * **passwd**: Enter user's password.
   * **database_name**: Enter the database name to be logged in.
   * **schema_name**: Enter schema name (such as **dbo**), which acts as a namespace or container for objects (such as tables, views, procedures, and functions). For more information, see [Creating a Database Schema](https://learn.microsoft.com/zh-cn/sql/relational-databases/security/authentication-access/create-a-database-schema?view=sql-server-ver16).

   The following example creates a user named **tapdata**, specifying that the logged-in database is **demodata** and the schema is **dbo**:

   ```sql
   -- Create a login user
   CREATE LOGIN tapdata WITH password='Tap@123456', default_database=demodata;

   -- Create a database user
   CREATE USER tapdata FOR LOGIN tapdata with default_schema=dbo;
   ```

5. Grant permissions to the account we just created, or you can customize permissions control based on business needs.

   ```sql
   -- Grant permission to read all tables under the specified schema
   GRANT SELECT ON SCHEMA::schema_name TO tapdata;

   -- Grant permission to read change data capture
   GRANT SELECT ON SCHEMA::cdc TO tapdata;
   ```

   * **login_name**: Enter user name.
   * **schema_name**: Enter schema name (such as **dbo**), which acts as a namespace or container for objects (such as tables, views, procedures, and functions).

   The following example shows that the **tapdata** user is granted read permission for all tables under the **dbo** and **cdc** schemas.

   ```sql
   GRANT SELECT ON SCHEMA::dbo TO tapdata;
   GRANT SELECT ON SCHEMA::cdc TO tapdata;
   ```

7. (Optional) To read incremental data from the secondary database for data synchronization, you need to follow the above steps.



### As a Target Database

1. Log in to SQL Server Management Studio or SQLcmd as a sysadmin (for example, **sa**).

2. Execute the following format of the command to create a user for the data copy or development task.

   ```sql
   -- Create a login user
   CREATE LOGIN login_name WITH PASSWORD='passwd', default_database=database_name;

   -- Create a database user
   CREATE USER login_name FOR LOGIN login_name with default_schema=schema_name;

   ```

   * **login_name**: Enter user name.
   * **passwd**: Enter user's password.
   * **database_name**: Enter the database name to be logged in.
   * **schema_name**: Enter schema name (such as **dbo**), which acts as a namespace or container for objects (such as tables, views, procedures, and functions). For more information, see [Creating a Database Schema](https://learn.microsoft.com/zh-cn/sql/relational-databases/security/authentication-access/create-a-database-schema?view=sql-server-ver16).

   The following example creates a user named **tapdata**, specifying that the logged-in database is **demodata** and the schema is **dbo**:

   ```sql
   -- Create a login user
   CREATE LOGIN tapdata WITH password='Tap@123456', default_database=demodata;

   -- Create a database user
   CREATE USER tapdata FOR LOGIN tapdata with default_schema=dbo;
   ```

3. Grant permissions to the account we just created, or you can customize permissions control based on business needs.

   ```sql
   -- Grant permission to create table
   GRANT ALTER ON SCHEMA::schema_name TO login_name;
   GRANT CREATE TABLE TO login_name;
   
   -- Grant permission to read and write all table in specific schema
   GRANT DELETE, INSERT, SELECT, UPDATE ON SCHEMA::schema_name TO login_name;
   ```

   * **login_name**: Enter user name.
   * **schema_name**: Enter schema name (such as **dbo**), which acts as a namespace or container for objects (such as tables, views, procedures, and functions).

   The following example shows that the **tapdata** user has been granted permission to create tables in the **dbo** schema and read/write data to all tables:

   ```sql
   GRANT ALTER ON SCHEMA::dbo TO tapdata
   GRANT CREATE TABLE TO tapdata
   GRANT DELETE, INSERT, SELECT, UPDATE ON SCHEMA::dbo TO tapdata;
   ```

## Connect to SQL Server

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **SQL Server**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for SQL Server.

   ![SQL Server Connection Example](../../images/sqlserver_connection.png)

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports SQL Server as a source or target database.
      * **DB address**: The database connection address.
      * **Port**: The service port of database.
      * **DB name**: Database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
      * **User**: The database username.
      * **Password**: The database password.
      * **Schema**: Schema name.
      * **Connection parameter string**: additional connection parameters, default empty.
   * Advanced settings

      * **Timezone**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.
      * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
      * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::



## See also


This section describes the issues you may encounter when using the Change Data Capture (CDC) feature. For more information, please refer to the [ Microsoft documentation](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/change-data-capture-stored-procedures-transact-sql?view=sql-server-ver15).


* Clean Change Data Capture Log

   SQL Server does not automatically clean up incremental data logs and requires the following settings to open the cleanup task.

   ```sql
   -- The unit of retention is in minutes, and the cleanup cycle is set to 2 days here.
   USE AdventureWorks2012;  
   GO  
   EXECUTE sys.sp_cdc_change_job   
       @job_type = N'cleanup',  
       @retention = 2880;  
   GO
   ```

* If you perform a DDL operation (such as adding fields) on the fields of the incremental synchronization table, you need to perform the following operation to restart the CDC, otherwise, the data cannot be synchronized or an error is reported.

   ```sql
   -- Disable the CDC for table
   go
   EXEC sys.sp_cdc_disable_table
   @source_schema = N'schema_name',
   @source_name = N'table_name',
   @capture_instance = N'Schema_Table'
   go
   // The capture_instance is usually concatenated in the format of schema_table.
   // You can use the following command to query the actual value.
   exec sys.sp_cdc_help_change_data_capture
   @source_schema = N'schema_name',
   @source_name = N'table_name';
   
   -- Enable the CDC for table
   use database_name
   go
   EXEC sys.sp_cdc_enable_table
   @source_schema = N'schemas',
   @source_name = N'table_name',
   @role_name = N'role_name'
   go
   ```



* Turn on Global Change Data Capture

   ```sql
   -- Replace TAPDATA with your database name
   -- Replace INSURANCE with your schema name
   USE TAPDATA
   GO
   EXEC sys.sp_cdc_enable_db
   GO

   declare @table_name varchar(100)
   declare @database_name varchar(100)
   declare @schema_name varchar(100)

   set @database_name = 'TAPDATA'
   set @schema_name = 'INSURANCE'

   declare my_cursor cursor for SELECT TABLE_NAME
                                FROM TAPDATA.INFORMATION_SCHEMA.TABLES
                                where TABLE_CATALOG = @database_name
                                  and TABLE_SCHEMA = @schema_name;
   open my_cursor
   fetch next from my_cursor into @table_name
   while @@FETCH_STATUS = 0
       begin
           begin try
               exec sys.sp_cdc_enable_table
                    @source_schema = @schema_name,
                    @source_name = @table_name,
                    @role_name = NULL
           end try
           begin catch
               print('[ERROR] ' + @table_name)
           end catch

           fetch next from my_cursor into @table_name
       end
   close my_cursor
   deallocate my_cursor
   ```

* Turn off Global Change Data Capture

   ```sql
   -- Replace TAPDATA with your database name
   -- Replace INSURANCE with your schema name
   USE TAPDATA
   GO
   
   declare @table_name varchar(100)
   declare @database_name varchar(100)
   declare @schema_name varchar(100)
   
   set @database_name = 'TAPDATA'
   set @schema_name = 'INSURANCE'
   
   declare my_cursor cursor for SELECT TABLE_NAME
                                FROM TAPDATA.INFORMATION_SCHEMA.TABLES
                                where TABLE_CATALOG = @database_name
                                  and TABLE_SCHEMA = @schema_name;
   open my_cursor
   fetch next from my_cursor into @table_name
   while @@FETCH_STATUS = 0
       begin
           begin try
               EXEC sys.sp_cdc_disable_table
                    @source_schema = @schema_name,
                    @source_name = @table_name,
                    @capture_instance = 'all';
           end try
           begin catch
               print ('[ERROR] ' + @table_name)
           end catch
   
           fetch next from my_cursor into @table_name
       end
   close my_cursor
   deallocate my_cursor
   
   EXEC sys.sp_cdc_disable_db
   GO
   ```



