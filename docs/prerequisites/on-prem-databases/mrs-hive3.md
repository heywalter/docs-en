# mrs-hive3

import Content from '../../reuse-content/_all-features.md';

<Content />

Follow these instructions to ensure that the Hive database is successfully added and used in TapData Cloud.

### **Restriction Description **

TapData The current version of the Hive system supports only the target.

### **Supported version **

Hive3.1.2

### **Configuration description **

#### Data source configuration

- Host/IP
- Port
- Database name Name of the database
- Account and Password

#### Enables the CDC configuration

Hive row-level operations UPDATE and DELETE are transaction operations. Therefore, you need to enable transaction operations in Hive and modify the configuration items in 'hive-site. XML' to take effect after the modification is complete.

```
<property>
<name>hive.support.concurrency</name>
<value>true</value>
</property>
<property>
<name>hive.enforce.bucketing</name>
<value>true</value>
</property>
<property>
<name>hive.exec.dynamic.partition.mode</name>
<value>nonstrict</value>
</property>
<property>
<name>hive.txn.manager</name>
<value>org.apache.hadoop.hive.ql.lockmgr.DbTxnManager</value>
</property>
<property>
<name>hive.compactor.initiator.on</name>
<value>true</value>
</property>
<property>
<name>hive.compactor.worker.threads</name>
<value>1</value>
</property>
<property>
<name>hive.in.test</name>
<value>true</value>
</property>
```

### Connect test items

- Checks host/IP and port
- Check the database name
- Check account and password
