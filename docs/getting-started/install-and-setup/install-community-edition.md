# Deploy TapData Community

TapData Community is an open-source real-time data platform that facilitates data synchronization and transformation. This guide demonstrates how to quickly install and start TapData Community.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Prerequisites

Before you begin, ensure your environment meets the following requirements:

- Hardware specifications: 8-core CPU (x86 architecture), 16 GB of memory
- Storage specifications: 100 GB
- Operating System: **CentOS 7+** , **Ubuntu 16.04+** , **Red Hat Enterprise Linux（RHEL）7.x/8.x** or **Windows OS (64-bit)**.

## Component Overview

TapData Community includes the following main components:

- **Data Connectors**: Allow TapData Community to connect to various data sources, such as databases, data warehouses, and message queues.
- **Data Processing Engine**: Responsible for performing tasks such as data transformation, cleaning, and processing.
- **Monitoring and Management Interface**: Provides an easy-to-use graphical platform for configuring, managing, and monitoring data flows.

## Install TapData Community

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Deploy on Docker Platform">
```
1. Ensure [Docker](https://docs.docker.com/get-docker/) is installed and running.

2. Open a terminal or command line interface and run the following command to pull the latest TapData Docker image:

   ```bash
   docker pull ghcr.io/tapdata/tapdata:latest
   ```

3. Run the following command to start the TapData container:

   ```bash
   docker run -d -p 3030:3030 --restart always --name tapdata --privileged ghcr.io/tapdata/tapdata:latest
   ```

   Explanation of parameters:

   - `-d`: Run the container in the background.
   - `-p 3030:3030`: Map port 3030 of the container to port 3030 on the host machine, allowing access to TapData through a browser.
   - `--name tapdata`: Assign a name to your container, in this case, **tapdata**.
   - `--restart always`: Automatically start this container when Docker services restart.
   - `--privileged`: Grants the container elevated permissions to ensure proper functioning of dependencies (e.g., embedded MongoDB). It is recommended to configure permissions more precisely in production environments as needed.

   :::tip

   By default, TapData Community uses an internal MongoDB to store metadata, task configurations, etc. If you want to use your own MongoDB, specify the MongoDB [URI connection string](https://www.mongodb.com/docs/v5.0/reference/connection-string/#standard-connection-string-format) during container startup with the `-e` parameter, for example: `docker run -d -p 3030:3030 --name tapdata -e MONGO_URI='mongodb://root:Tap123456@192.168.1.18:29917/tapdata_community?authSource=admin' --restart always ghcr.io/tapdata/tapdata:latest`.

   :::

4. (Optional) Run `docker logs -f tapdata` to view container startup logs. Key logs after successful startup should indicate:

   ```bash
   <<< Start Server [SUCCESS]
   All Done, Please Visit http://localhost:3030
   ```

5. Access the TapData platform via a browser at http://localhost:3030. The default login is admin@admin.com with the password admin. Promptly change your password after the first login to ensure security.

   :::tip

   To access TapData services from other devices on the same network, ensure the network is interconnected.

   :::

</TabItem>

<TabItem value="Deploy on Linux Platform">

1. Visit the [TapData Community Release page](https://github.com/tapdata/tapdata/releases), download the latest installation package, and upload it to the device where you intend to deploy it.

2. On the deployment device, execute the following commands to extract the installation package and enter the extracted directory:

   ```shell
   tar -zxvf installation-package-name && cd tapdata
   ```

   For example, for version 3.5.16, the command would be: `tar -zxvf tapdata-v3.5.16-663b7b11.tar.gz && cd tapdata`

3. Install environmental dependencies.

   1. Install Java 1.8 version.

      ```bash
      yum -y install java-1.8.0-openjdk
      ```

   2. [Install MongoDB](../../platform-ops/production-deploy/install-replica-mongodb.md) (version 4.0 and above), which will serve as the storage system for TapData to run related data, such as logs and metadata.

3. Execute the following command to specify the [URI connection string](https://www.mongodb.com/docs/v5.0/reference/connection-string/#standard-connection-string-format) of the MongoDB instance you just deployed.

   ```bash
   export MONGO_URI='mongodb://{admin}:{password}@{host}:{port}/{database_name}?replicaSet={replica_name}&authSource=admin'
   ```

   Example: `export MONGO_URI='mongodb://root:Tap123456@192.168.1.18:29917/tapdata_community?replicaSet=rs1&authSource=admin'`

4. Run `./start.sh` to start the TapData service. Key logs after successful startup should indicate:

   :::tip

   If deploying with a non-root user, avoid using `sudo` to elevate privileges to prevent installation failure. Before executing commands, use `sudo chown -R <your-username>:<your-group> <installation-dir>` or `sudo chmod -R 777 <installation-dir>` to grant full permissions to the installation directory for the current user.

   :::

   ```bash
   <<< Start Server [SUCCESS]
   All Done, Please Visit http://localhost:3030
   ```

5. Access the TapData platform via a browser at http://localhost:3030. The default login is admin@admin.com with the password admin. Promptly change your password after the first login to ensure security.

   :::tip

   To access TapData services from other devices on the same network, ensure the network is interconnected.

   :::

</TabItem>
</Tabs>

## Next Steps

[Connect to a Database](../connect-data-source.md)