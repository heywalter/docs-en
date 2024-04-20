# Architecture and Workflow

import Content from '../reuse-content/_all-features.md';

<Content />

As a new-generation real-time data service platform, Tapdata enables enterprises to easily break the limitations of data silos. It provides real-time, accurate data for analytical and transactional businesses through real-time data collection technology, flexible data processing methods, comprehensive data governance capabilities, and convenient data publishing methods, supporting businesses in achieving more agile innovation.

## Tapdata Cloud Architecture
Tapdata Cloud components include Tapdata Cloud Manager and Tapdata Agent:

* **Tapdata Cloud Manager** (TCM): Responsible for installing and configuring agents, as well as monitoring the status of tasks.
* **Tapdata Agent:** Obtain task information from the Task Control Manager (TCM), processing and converting the data to be sent to the target, and reporting the task status back to the TCM during the execution of the task.

![](../images/architecture.png)


Tapdata employs a range of cyber-security measures to ensure the protection and security of user data and information.

* **One-way Connection**: The Tapdata Agent instance does not actively expose network information, and only connects to the TCM management service to obtain task information and report status information.
* **HTTPS Protocol**: Tapdata Agent instances establish communication with TCM using the HTTPS protocol, ensuring protection against information theft and tampering.
* **Trusted Environment**: In self-built mode, all data is transmitted exclusively within the user's server and networking environment, ensuring that there is no risk of data leakage.


## Tapdata Enterprise Architecture

![Product Architecture](https://20778419.s21i.faiusr.com/3/2/ABUIABADGAAgtLr-lgYotInUhwYwgA84uAg.gif)

Tapdata Enterprise is structured into four layers, from left to right:

- **Data Collection Layer**: Based on log parsing capabilities and through the open Plugin Framework, it collects changes in data sources in real-time and standardizes them. The standardized data then enters the stream processing framework.
- **Stream Data Processing Layer**: Through Tapdata's proprietary solution, data computation, modeling, and transformation are completed within the process, quickly yielding results that move into the storage layer.
- **Storage Layer**: By the time data is placed into the storage layer, a logical model has already been formed. Users only need to focus on the data required for their business, without concern for the storage location.
- **Service Layer**: In the service layer, there are two mainstream data service models: Pull and Push. The API supports low-code publishing and can be released according to specific needs. When the required data is already stored in the business system, it can be pushed to users through REVERSE ETL after being organized and governed.

:::tip

If you do not need to deploy Tapdata locally, you can choose to use Tapdata Cloud. For more introduction, see [Version Comparison](https://tapdata.net/pricing.html).

:::

