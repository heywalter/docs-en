# Troubleshooting Connections

To ensure the effectiveness of the data source connection, you can perform a connection test after completing the [data connection configuration](connect-database/README.md). By clicking on **Test Connection**, you can verify if the data source configuration meets the requirements and check for normal network connectivity. This article provides an overview of common inspection items within Tapdata Cloud and offers troubleshooting methods in case of connection failures.

- **Check if connections are available**

   When Tapdata Cloud attempts to connect to the data source and encounters an unreachable network, the connection test will fail. In such cases, it is recommended to check the network connectivity by examining factors such as the local iptables configuration and any ACL limits present in the network. These checks will help identify potential issues that may be preventing successful network communication.

- **Check if the username, password, and database are correct**

   Tapdata Cloud utilizes the configured username and password to establish a connection with the data source. If the provided username, password, or database name is incorrect, the connection test will fail. In such cases, it is important to verify the accuracy of the authentication information entered. Double-check the username, password, and database name to ensure they are correct and match the credentials required for the data source.

- **Check if data source version is supported**

   Tapdata Cloud detects the version of the data source, and if the version is not supported, the test fails.

- **Load model**

   Tapdata Cloud tries to load the table meta information in the data source, if it fails to load, the test fails, then check whether the database user has been granted the corresponding permission.

- **Check if binlog is enabled and set to ROW format** (for MySQL)

   Tapdata Cloud verifies whether the database's binlog is enabled and set to the ROW format. If these requirements are not met, the connection test will fail. To gather more information about binlog settings, it is recommended to refer to the [MySQL preparations documentation](../prerequisites/config-database/certified/mysql.md). In such cases, it is necessary to review and verify the configuration of the database's binlog to ensure it is properly enabled and set to the ROW format as per the requirements.

- **Check if permissions required for CDC are authorized**

   Tapdata Cloud checks whether the database account has the necessary permissions to perform CDC (Change Data Capture), if the permission is not met, the test fails, then check whether the database user has been granted the corresponding permission.

- **Check if archive logging is enabled** (for Oracle)

   Tapdata Cloud checks if the archive log is enabled. If it is not enabled, the test fails. For more information about how to enable it, see [Oracle preparation](../prerequisites/config-database/certified/oracle.md).

- **Check if supplemental log mode is correct** (for Oracle)

   Tapdata Cloud checks if the supplemental log mode is correct. If it is incorrect, the test fails. For more information about how to set it up, see [Oracle preparation](../prerequisites/config-database/certified/oracle.md).

- **Check if permissions required for DDL are authorized** (for Oracle)

   Tapdata Cloud checks if the database account has DDL execution permissions. If the permission is not met, the test fails. For an example of authorization, see [Oracle preparation](../prerequisites/config-database/certified/oracle.md).



## See also

[Preparations Before Connection](../prerequisites/config-database/README.md)