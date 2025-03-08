# TapData Community Release Notes

import Content from '../reuse-content/_community-features.md';

<Content />

This document introduces the recent release notes for TapData Community. For more information on earlier versions, please refer to the [GitHub Release Page](https://github.com/tapdata/tapdata/releases).

## 3.24.0

### Bug Fixes

- Fixed an issue in primary-secondary merge tasks where changes to the primary table's association conditions caused extra pre-update records in the target data.

## 3.23.0

### New Features

- Enabled the ability to define a primary key for tables without a primary key when configuring [Primary-Secondary Merge Nodes](../user-guide/data-development/process-node.md#pri-sec-merged), ensuring data synchronization consistency and improving merge efficiency.

### Bug Fixes

- Fixed an issue with multi-level associated keys in primary-secondary merges, preventing incorrect merging of child table data.

## 3.22.0

### Enhancements

- Improved the method for retrieving software version information to prevent version discrepancies caused by page caching.

### Bug Fixes

- Fixed an issue where heartbeat task startup failures prevented data synchronization tasks from starting properly.

## 3.21.0

### Bug Fixes

- Fixed the issue where webhook alerts configured by the admin user could not retrieve all alert data.

## 3.20.0

### Enhancements

- Added the ability to download log files from the task monitoring page for easier fault diagnosis.
- Optimized engine startup to eliminate the need for MongoDB configuration during initialization.
- Expanded error code coverage and provided more detailed solution hints.

### Bug Fixes

- Fixed a problem where tasks synchronizing only primary key tables using regex continued to log "new table detected" after adding non-primary key tables.

## 3.19.0

### Enhancements

- Optimized and added new engine error codes to help users quickly locate the cause of issues.

### Bug Fixes

- Fixed an issue where the system failed to start when configuring SSL connections for MongoDB as an intermediate database.
- Fixed an issue where data was not updated to the target during incremental synchronization when synchronizing Oracle tables with multi-column composite primary keys to GaussDB (DWS).
- Fixed an issue where the task incorrectly reported missing table creation privileges after synchronizing some tables to MySQL.

## 3.18.0

### Enhancements

- Enabled copy all selected table names during task configuration, improving operational efficiency.
- Expanded the range of built-in error codes for better issue identification and diagnosis.
- Enhanced milestone tracking and display logic during task execution.
- Improved log viewing experience for script processing nodes by supporting split log display.

### Bug Fixes

- Resolved an issue where MongoDB indexes were not correctly loaded, causing schema loading failures.
- Fixed an issue where data extraction tasks could get stuck at the table structure replication stage.

## 3.17.0

### Enhancements

- Expanded the range of built-in error codes for faster issue identification and diagnosis.

### Bug Fixes

- Fixed an issue where resetting tasks on the edit page failed, causing a “current status not allowed” error when saving the task.
- Resolved an issue where removing and re-adding a table being synchronized in a replication task failed to resume synchronization correctly.

## 3.16.0

### New Features

- Added HTTPS connection support for [Elasticsearch data sources](../prerequisites/on-prem-databases/elasticsearch.md), enhancing data transmission security to meet more stringent data security and compliance requirements.
- Enabled support for synchronizing tables without primary keys by adding a hash field (default name: `_no_pk_hash`), ensuring data consistency and stable synchronization in non-primary key scenarios.

### Enhancements

- Enhanced data filtering logic in Row Filter nodes, ensuring that target data is updated to maintain consistency when data status changes from meeting to not meeting filter conditions.

### Bug Fixes

- Fixed an issue preventing the display of all tables (completed, in progress, and not started) in full sync details.
- Corrected inaccuracies in time and milestone statistics.
- Resolved an issue with MongoDB Atlas functionality when DNS resolution fails.

## 3.15.0

### New Features

* Kafka-Enhanced and TiDB have passed the TapData certification testing process and have been upgraded to [Certified Data Sources](../prerequisites/supported-databases.md), providing more advanced features and enhanced production stability.

### Enhancements

- Optimized the cache management logic for processing nodes, enhancing resource usage efficiency and improving task execution speed.

### Bug Fixes

- Fixed an issue where, after enabling the heartbeat table, tasks displayed no delay but data was not synchronized.
- Fixed an issue where not all tags could be viewed when setting tags.
- Fixed an issue where the task retry start time was incorrectly displayed as 1970.
- Fixed an issue where index creation failed when Elasticsearch was used as the target database.

## 3.14.0

### New Features

* Doris, ClickHouse, PostgreSQL, and MongoDB have passed the TapData certification testing process and have been upgraded to [Certified Data Sources](../prerequisites/supported-databases.md), providing more advanced features and enhanced production stability.
* When using PostgreSQL as a source, it is now possible to specify the time point for incremental data in task settings.

### Enhancements

* When configuring an Elasticsearch data source, the task setup now allows you to select an update strategy for data writing.
* For data replication tasks, the source node's table selection defaults to primary key tables, with an added prompt message.

### Bug Fixes

- Fixed an issue where tasks would encounter errors during the incremental phase after enabling the heartbeat table in new tasks.
- Fixed the issue where tasks got stuck in the full phase and could not move to the incremental phase after a reset.

## 3.13.0

### New Features

* MySQL has passed the TapData certification testing process, upgrading it to a [certified data source](../prerequisites/supported-databases.md), providing more comprehensive features and enhanced production stability.

### Bug Fixes

- Fixed an issue where regular indexes were not properly synchronized after enabling the **Sync Indexes on Table Creation** option, ensuring data synchronization integrity.

## 3.12.0

### New Features

- Dameng have passed the TapData certification testing process and have been upgraded to [Certified Data Sources](../prerequisites/supported-databases.md), offering richer features and higher production stability.
- For [PostgreSQL](../prerequisites/on-prem-databases/postgresql.md) data sources, incremental data synchronization is now supported using the walminer plugin, catering to more use cases.
- Data replication tasks now support reading from multiple tables simultaneously, improving parallel processing capabilities and task execution efficiency.

### Feature Enhancements

- Significantly enhanced data synchronization performance.
- Optimized the layout and structure of menu entries.
- Improved error messages and high-risk operation warnings.
- For data sources that do not support hash validation, hash validation is now disabled by default.
- After full sync tasks are completed, restarting the task will trigger a full resynchronization to ensure data consistency.

### Bug Fixes

- Fixed an issue where some task monitoring metrics were lost after task completion.
- Fixed a query efficiency issue caused by missing necessary indexes in the intermediate database, reducing data scan volume.
- Fixed an issue where selecting "Show only different fields" when downloading data validation discrepancies resulted in downloading all fields.
- Fixed a problem where task editing could get stuck during model generation, improving the task editing experience.
- Fixed an issue where, after stopping a data replication task in the incremental phase and restarting it, the full completion time displayed incorrectly.
- Fixed an issue with TDengine where SQL statement length exceeded limits when writing to super tables with many fields.
- Fixed an error occurring in data transformation tasks using TDengine as a source when the table name contained Chinese characters.
- Fixed potential exceptions when running mining tasks on PostgreSQL data sources.
- Fixed an issue in Oracle to Doris shared mining tasks where source table DDL events could not be parsed.
- Fixed specific exception issues during the incremental phase of MongoDB to Kafka data transformation tasks.
- Fixed an issue where an unexpected `_id` field appeared in the model when synchronizing MongoDB oplog to Kafka.
- Fixed an issue where MongoDB oplog data replication tasks could not replicate properly during synchronization.

## 3.11.0

### New Features

- Enhanced [Data Transformation Task Configuration](../user-guide/data-development/create-task.md) to support reloading of single table models in the source node model preview area, improving loading efficiency.
- Introduced time detection functionality that automatically detects the time difference between the engine deployment server and the database server and displays it on the task monitoring page.

### Optimizations

* User-defined field business descriptions can now be directly displayed in the column name position of the table sample data.

### Bug Fixes

- Fixed an issue where MongoDB database cursor timeout prevented normal full synchronization.
- Fixed an issue where the custom SQL filter switch could not be turned on in the source node data filtering settings.

## 3.10.0

### New Features

- Added a [Union Node](../user-guide/copy-data/process-node.md#union-node) to data replication tasks, enabling the merging (UNION) of multiple tables within the same database. This is useful for data integration and analysis scenarios.
- [Doris](../prerequisites/warehouses-and-lake/doris.md) data source now supports certificate-free HTTPS connections.
- MySQL, Oracle, OpenGauss, SQL Server, and PostgreSQL data sources now support enabling the **Hash Sharding** feature in the advanced settings of nodes during task configuration, significantly improving the full data sync speed for large tables.
- Added support for [VastBase](../prerequisites/on-prem-databases/vastbase.md) data source, with a maturity level of Beta, further enriching the variety of data sources.

### Enhancements

- Improved synchronization logic for time zone fields.

### Bug Fixes

- Addressed the unclear error messages and lack of detailed information in the error codes when the source MySQL does not support incremental.
- Corrected the format of task warning alerts.
- Resolved an issue where imported tasks showed running records and the current running record status appeared as "deleting."
- Addressed an issue where editing tasks incorrectly modified the association key when the target table association key was set.
- Fixed a potential failure when removing fields in Python nodes.
- Resolved an issue where deleting the primary node in master-slave merge operations caused configuration errors in the master-slave merge node, leading to task errors.
- Fixed garbled text issue with Chinese node names in tasks when a source-side DDL occurs and the engine server is not set to UTF character encoding.

## 3.9.0

### New Features

* Added a new button for using shared mining when creating [Shared Caches](../user-guide/advanced-settings/share-cache.md), simplifying cache task configuration and improving the efficiency and flexibility of cache sharing.

### Enhancements

* Added field restriction configuration parameters for the ElasticSearch data source.
* Optimized exception handling logic when enabling the preimage capability for the MongoDB data source.

### Bug Fixes

- Fixed an issue where some task event statistics might occasionally be missing when reported.
- Fixed an issue where shared cache tasks without shared mining might encounter errors due to exceeding the log time window if data does not change upon restarting or upgrading the engine.
- Fixed an issue where the unset operation on the source table could cause task errors in scenarios where the write mode is updating sub-documents.
- Fixed an issue where joining collections with time types in MongoDB and MySQL caused errors.
- Fixed an issue where incremental update events unexpectedly performed lookups in master-slave merge scenarios.
- Fixed conflict errors when modifying columns in master-slave merge nodes.

## 3.8.0

### Enhancements

* Improved the display of primary keys and indexes in the task's table model.
* Enhanced the model deduction logic, supporting model deduction directly in the engine.

### Bug Fixes

* Fixed an issue where some exceptions were ignored during data source error handling.
* Fixed an issue where aggregation tasks using time fields as join keys could not backtrack data.
* Fixed an issue with delayed times in mining tasks.
* Fixed an issue where MySQL as a source would consume a large amount of database memory during initial synchronization of large tables.

## 3.7.0

### New Features

* Introduced Mock Source and Mock Target data sources for data migration testing scenarios.

### Enhancements

* Improved the interaction logic for skipping errors when starting tasks.
* Improved the loading speed of the connection list.

### Bug Fixes

* Fixed inconsistencies between the task runtime model and configuration model.
* Fixed inaccurate task event statistics after filtering source data.
* Fixed timezone handling issues in Oracle and PostgreSQL synchronization scenarios.
* Fixed an issue where heartbeat task reset failures could prevent related tasks from starting.