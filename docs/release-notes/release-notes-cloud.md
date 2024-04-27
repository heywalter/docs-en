# Tapdata Cloud Release Notes

import Content from '../reuse-content/_cloud-features.md';

<Content />

To enhance the user experience, Tapdata Cloud continuously enriches and optimizes product features and rectifies known defects by releasing new versions. This article provides an update log for Tapdata Cloud, helping you grasp the new feature specifications more effectively.

### 2024-04-26

#### New Features

* [Data replication tasks](../user-guide/data-pipeline/copy-data/create-task.md) now support table-level checkpoint resumption, allowing tasks to continue syncing from the last incomplete table upon restart.
* Added the ability to quickly [set task labels](../user-guide/data-pipeline/copy-data/manage-task.md) by dragging and dropping.
* Added support for MySQL replica architecture, ensuring tasks continue to sync data normally after a failover event.

#### Enhancements

* The Windows version of the Cloud Agent now includes digital certificate signing to avoid installation delays caused by system security prompts.
* Improved the User Center page layout.

#### Bug Fixes

* Fixed an issue where tasks were failing with Aliyun PolarDB MySQL data sources due to unsupported event types.
* Corrected a statistical progress display error in the completion metrics of full data synchronization tasks.

### 2024-04-12

#### New Features

* Added support for real-time log parsing of [TiDB data sources](../prerequisites/on-prem-databases/tidb.md), fulfilling incremental data synchronization needs.
* During the full sync phase from Oracle to MySQL, support has been added for syncing unique and normal indexes that do not utilize functions.
* Enhanced the task start process to include an option to skip errors encountered during the last run.

#### Enhancements

* Improved DDL synchronization settings in data sync tasks by allowing users to configure DDL statements to ignore (based on regular expressions) when DDL errors occur.
* Enhanced data verification capabilities to support tasks that include processing nodes.
* Optimized the data verification results page to quickly filter between consistent and inconsistent tables.

#### Bug Fixes

* Fixed an issue where MongoDB used as external storage failed when storing values in a Map format with keys containing the `.` character.
* Addressed a looping error that occurred during connection tests for Kafka data sources containing non-JSON topics.
* Resolved a bug where JS nodes reported errors during trial runs under specific conditions.
* Fixed an issue with incorrect data results when changing join keys in master-slave merge nodes.
* Fixed a problem where using RocksDB as cache storage could cause task errors.

### 2024-03-29

#### Enhancements

* To further enhance user experience, Beta and Alpha [data sources](../prerequisites/README.md) now require an application for use, allowing Tapdata to provide better technical support based on your business scenarios.

#### Bug Fixes

* Resolved an issue where Agents crashed under specific circumstances.
* Fixed a bug related to importing RM files in MongoDB.

##  2024-03-08

### New Features

* Support for setting [default alarm recipients](user-guide/workshop#notifications), allowing customization of alarm receipt email addresses (supports multiple addresses).
* New options in [DDL synchronization settings](../best-practice/handle-schema-changes.md): **Stop Task on DDL Error** and **Automatically Ignore All DDLs**, catering to different business scenario needs.
* Added a [time field injection](user-guide/data-pipeline/data-development/process-node#time_injection) node, allowing the addition of a custom timestamp field to data during synchronization. This provides a more flexible way to capture incremental changes from the source database.

### Enhancements

* Optimized task retry logic and interface prompt information.
* Enhanced the setting for incremental collection timing, supporting quick selection of the incremental time point from the last incremental run.
* Improved the interaction logic for using external storage with the master-slave merge node.

## 2024-01-26

### New Features

- Added support for [Shared Mining](../user-guide/advanced-settings/share-mining.md), allowing multiple tasks to share incremental logs from the source database, thus avoiding redundant reads and significantly reducing the load on the source database during incremental synchronization.
- The Shared Mining feature now supports using RocksDB as [local external storage](../user-guide/advanced-settings/manage-external-storage.md) to extend storage for incremental logs.

### Enhancements

- Improved the onboarding process for users from the [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/product/tapdata-public/detail).
- Added a time filter option for the incremental phase in the [Task Monitoring Page](../user-guide/data-pipeline/copy-data/monitor-task.md) to quickly observe QPS during the incremental phase.
- Added warning messages for critical operations that might impact the database (e.g., filtering source table data).
- Refined the logic for unsubscribing after instance subscription expiration.

### Bug Fixes

- Fixed an issue with the [Primary-Secondary Merge Node](user-guide/data-pipeline/data-development/process-node#pri-sec-merged) where changes in the key conditions between the primary and secondary tables resulted in data not matching expectations.

## 2024-01-12

### New Features

* Added support for [Capped Collections](https://www.mongodb.com/docs/manual/core/capped-collections/) in data synchronization between MongoDB database.
* Data replication/transformation tasks now have import capabilities. Design your data flow process on [MongoDB Relational Migrator](https://www.mongodb.com/docs/relational-migrator/), export it, and then directly import it into Tapdata data pipelines from the top right corner, enhancing the convenience of data pipeline design.

### Enhancements

* Enhanced the new user onboarding process, including the ability to collapse prompts and return to previous steps.

### Bug Fixes

* Fixed an issue where JS node model declaration settings showed incorrect prompts on the task editing page.
* Fixed an issue where the DROP COLUMN operation in Oracle to MySQL synchronization was not syncing correctly.
* Addressed an issue causing DDL errors when syncing from MySQL to ClickHouse.
* Fixed instability in tasks due to frequent WebSocket reconnections.
* Corrected several UI interaction experience issues.

## 2023-12-26

### New Features

* Added support for [Time Series collections](https://www.mongodb.com/docs/manual/core/timeseries-collections/) in MongoDB 5.x and above versions.
* Added support for [preImage](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images) in MongoDB 6.x and above versions.

### Enhancements

* Improved system prompts when enabling scheduled tasks while reaching the task limit.

### Bug Fixes

* Fixed inaccuracies in checkpoints in multi-table data replication scenarios.
* Resolved issues with unsubscribed and deleted Agent instances continuing to report heartbeat information.
* Addressed known UI interaction experience issues.

## 2023-12-08

### New Features

- Added [Azure Cosmos DB](../prerequisites/cloud-databases/azure-cosmos-db.md) as a new data source, enabling full data synchronization to facilitate quick cloud data transfers.

### Enhancements

- Upgraded data source connections, with [SQL Server](../prerequisites/on-prem-databases/sqlserver.md) now supporting SSL connections, enhancing data security.
- Optimized field type adjustments in [data replication tasks](../user-guide/data-pipeline/copy-data/create-task.md), allowing for direct selection of common types from the target database.
- Improved task source node settings, enabling customization of the number of rows read per batch in the incremental phase, catering to performance needs of incremental synchronization.

### Bug Fixes

- Addressed issues with enhanced JS nodes failing or causing exceptions under certain scenarios.
- Corrected several UI interaction experience issues for better usability.



## 2023-11-24

### New Features

* Support for loading table comments on [Oracle data sources](prerequisites/on-prem-databases/oracle#advanced), which can be enabled in the **Advanced Settings** when configuring the data source. This makes it easier to quickly identify the business meaning of tables through their comments.
* In the task [monitoring page](../user-guide/data-pipeline/copy-data/monitor-task.md), support viewing QPS (Queries Per Second) information based on the size of events.

### Enhancements

* Enhanced the display effects of resource management and the subscription center pages.
* When performing data source connection tests, support for displaying connector download progress is now available, helping to quickly grasp connection progress and pinpoint timeout issues.

### Bug Fixes

* Fixed an issue where incremental information was not successfully cleared after resetting and rerunning a task.
* Fixed an issue where some SaaS data sources displayed incremental timestamps during full data synchronization.

### Enhancements

### Bug Fixes

## 2023-11-03

### Enhancements

- Enhanced [Data Source Connection](../prerequisites/README.md) methods, supporting SSL connections for data sources like MySQL, PostgreSQL, Kafka, TiDB, MariaDB, etc., to further enhance data security.
- Improved user interface interaction logic.
- To better manage data duplication for updates on non-primary keys, Tapdata Cloud now supports creating unique indexes.

### Bug Fixes

- Fixed an issue where data synchronization could fail when table names contain `.`.
- Fixed an issue where task exception messages did not include table names.
- Fixed an issue with incorrect judgment of task quotas and task count limits when specifying an Agent for a task.


## 2023-10-20

### New Features

- Added support for [automatically creating sharded collections](user-guide/data-pipeline/copy-data/create-task#advanced-settings) when MongoDB Cluster is set as the target.
- Add support for [Unwind Processing Node](user-guide/data-pipeline/data-development/process-node#Unwind), which can help you efficiently "unwind" each element in an array, converting each element into independent data rows.
- Added support for disabling node capabilities when configuring tasks. You can access this feature by hovering over a node, which can help reduce the cost of data flow during processing.

### Enhancements

- When [configuring data replication tasks](../user-guide/data-pipeline/copy-data/create-task.md), you can now quickly filter tables with or without primary keys through the "**Selectable table range**" dropdown. Tables with primary keys include those without primary keys but with unique indexes.
- Added a Demo data source to the onboarding guide flow for new users, helping you quickly complete the tutorial and set up your first data flow task.
- Optimized the front-end display effects of operation buttons on the engine interface.

### Bug Fixes

- Fixed an issue where an error occurred in MongoDB as a target during an INSERT operation when there was no shard key.
- Fixed an issue where MongoDB did not support REPLACE properly, and the fields deleted by REPLACE could not be properly removed.

## 2023-10-08

### New Features

- Introduced the [Create Materialized View](../user-guide/data-pipeline/data-development/create-materialized-view.md) feature for swift construction of real-time data models.
- Added capability to fetch read-only access information of [subscribed MongoDB Atlas](../user-guide/real-time-data-hub/daas-mode/enable-daas-mode.md#Procedure).
- Kafka data source now supports settings for replication factor and partition count.
- For synchronization between MongoDB instances, added support for `$unset` operations.

### Enhancements

- During the task guidance process, when creating a connection for a fully managed Agent, instructions about the public IP address of the fully managed Agent have been added.
- Enabled rapid target node location through node search at the top of the data replication/data transformation configuration page.

### Bug Fixes

* Fixed an issue where the wrong category of operation logs was recorded when restarting the Agent via the webpage.

---

## 2023-09-20

### New Features

- Added [Python processing node](user-guide/data-pipeline/data-development/process-node#python), which supports customizing data processing logic through Python scripts. This offers improved performance compared to the JS processing node.
- Added a "**Contact Us**" entry point, making it easier for users to quickly reach out to technical support when faced with issues.

### Feature Improvements

- Enhanced [error codes for data sources](../user-guide/error-code-solution.md), covering more scenarios and providing solutions.
- While setting up email alert notifications, added guidance for binding email addresses.
- Improved reminders and easy upgrade guide for when the task count reaches its limit.





## 2023-08-28

### New Features

- Introduced the [Primary-Secondary Merge Node](user-guide/data-pipeline/data-development/process-node#pri-sec-merged), enabling quick construction and real-time updates of wide tables, assisting you in achieving better data analysis.
- [Real-Time Data Hub](../user-guide/real-time-data-hub/daas-mode/enable-daas-mode.md) now offer a storage instances for free trial, with more new specifications available, including M10, M20, and M30.
- Added support for connecting [existing MongoDB Atlas instances](../user-guide/real-time-data-hub/daas-mode/enable-daas-mode.md#atlas) as data storage for the Real-Time Data Hub.

### Feature Improvements

- Changed the display of help documentation on the right side during data source connection to embedded online documentation, assisting users in accessing the most recent help information.
- For core data sources (such as Oracle, PostgreSQL, etc.), improved the page parameter descriptions and guidance when creating connections.

### Bug Fixes

- Fixed the issue where users couldn't view the monitoring page for previously run tasks.
