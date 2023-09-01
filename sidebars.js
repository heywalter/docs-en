/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

// Tapdata Cloud docs list
  cloud: [
    'cloud/what-is-tapdata-cloud',
    {
     type: 'category',
     label: 'Introduction',
     link: {type: 'doc', id: 'cloud/introduction/README'},
     items: [
            'cloud/introduction/architecture',
            'cloud/introduction/features',
            'cloud/introduction/benefits',
            'cloud/introduction/use-cases',
            'cloud/introduction/supported-databases',
            'cloud/introduction/terms',
     ]
    },
{
     type: 'category',
     label: 'Billing',
     link: {type: 'doc', id: 'cloud/billing/README'},
     items: [
            'cloud/billing/billing-overview',
            'cloud/billing/purchase',
            'cloud/billing/renew-subscribe',
            'cloud/billing/expiration',
            'cloud/billing/refund',
     ]
    },
    {
     type: 'category',
     label: 'Quick Start',
     link: {type: 'doc', id: 'cloud/quick-start/README'},
     items: [
            'cloud/quick-start/install-agent',
            'cloud/quick-start/connect-database',
            'cloud/quick-start/create-task',
     ]
    },
{
     type: 'category',
     label: 'Connect Data Sources',
     link: {type: 'doc', id: 'cloud/prerequisites/README'},
     items: [
             'cloud/prerequisites/allow-access-network',
             {
              type: 'category',
              label: 'Warehouses and Lakes',
              link: {type: 'doc', id: 'cloud/prerequisites/warehouses-and-lake/README'},
              items: [
                      'cloud/prerequisites/warehouses-and-lake/big-query',
                      'cloud/prerequisites/warehouses-and-lake/clickhouse',
                      'cloud/prerequisites/warehouses-and-lake/databend',
                      'cloud/prerequisites/warehouses-and-lake/doris',
                      'cloud/prerequisites/warehouses-and-lake/gaussdb',
                      'cloud/prerequisites/warehouses-and-lake/greenplum',
                      'cloud/prerequisites/warehouses-and-lake/selectdb',
                      'cloud/prerequisites/warehouses-and-lake/tablestore',
                      'cloud/prerequisites/warehouses-and-lake/yashandb',
                     ]
              },
             {
              type: 'category',
              label: 'On-Prem Databases',
              link: {type: 'doc', id: 'cloud/prerequisites/on-prem-databases/README'},
              items: [
                      'cloud/prerequisites/on-prem-databases/dameng',
                      'cloud/prerequisites/on-prem-databases/db2',
                      'cloud/prerequisites/on-prem-databases/elasticsearch',
                      'cloud/prerequisites/on-prem-databases/gbase-8a',
                      'cloud/prerequisites/on-prem-databases/gbase-8s',
                      'cloud/prerequisites/on-prem-databases/hive1',
                      'cloud/prerequisites/on-prem-databases/hive3',
                      'cloud/prerequisites/on-prem-databases/informix',
                      'cloud/prerequisites/on-prem-databases/kingbase-es-r3',
                      'cloud/prerequisites/on-prem-databases/kingbase-es-r6',
                      'cloud/prerequisites/on-prem-databases/mariadb',
                      'cloud/prerequisites/on-prem-databases/mongodb',
                      'cloud/prerequisites/on-prem-databases/mongodb-atlas',
                      'cloud/prerequisites/on-prem-databases/mrs-hive3',
                      'cloud/prerequisites/on-prem-databases/mysql',
                      'cloud/prerequisites/on-prem-databases/mysql-pxc',
                      'cloud/prerequisites/on-prem-databases/oceanbase',
                      'cloud/prerequisites/on-prem-databases/opengauss',
                      'cloud/prerequisites/on-prem-databases/oracle',
                      'cloud/prerequisites/on-prem-databases/postgresql',
                      'cloud/prerequisites/on-prem-databases/redis',
                      'cloud/prerequisites/on-prem-databases/sqlserver',
                      'cloud/prerequisites/on-prem-databases/tdengine',
                      'cloud/prerequisites/on-prem-databases/tidb',
                      ]
              },
              {
               type: 'category',
               label: 'Cloud Databases',
               link: {type: 'doc', id: 'cloud/prerequisites/cloud-databases/README'},
               items: [
                       'cloud/prerequisites/cloud-databases/aliyun-adb-mysql',
                       'cloud/prerequisites/cloud-databases/aliyun-adb-postgresql',
                       'cloud/prerequisites/cloud-databases/aliyun-mongodb',
                       'cloud/prerequisites/cloud-databases/aliyun-rds-for-mariadb',
                       'cloud/prerequisites/cloud-databases/aliyun-rds-for-mongodb',
                       'cloud/prerequisites/cloud-databases/aliyun-rds-for-mysql',
                       'cloud/prerequisites/cloud-databases/aliyun-rds-for-pg',
                       'cloud/prerequisites/cloud-databases/aliyun-rds-for-sql-server',
                       'cloud/prerequisites/cloud-databases/amazon-rds-mysql',
                       'cloud/prerequisites/cloud-databases/polardb-mysql',
                       'cloud/prerequisites/cloud-databases/polardb-postgresql',
                       'cloud/prerequisites/cloud-databases/tencentdb-for-mariadb',
                       'cloud/prerequisites/cloud-databases/tencentdb-for-mongodb',
                       'cloud/prerequisites/cloud-databases/tencentdb-for-mysql',
                       'cloud/prerequisites/cloud-databases/tencentdb-for-pg',
                       'cloud/prerequisites/cloud-databases/tencentdb-for-sql-server',
                      ]
               },
              {
               type: 'category',
               label: 'MQ and Middleware',
               link: {type: 'doc', id: 'cloud/prerequisites/mq-and-middleware/README'},
               items: [
                       'cloud/prerequisites/mq-and-middleware/activemq',
                       'cloud/prerequisites/mq-and-middleware/ai-chat',
                       'cloud/prerequisites/mq-and-middleware/bes-channels',
                       'cloud/prerequisites/mq-and-middleware/hazelcast-cloud',
                       'cloud/prerequisites/mq-and-middleware/kafka',
                       'cloud/prerequisites/mq-and-middleware/rabbitmq',
                       'cloud/prerequisites/mq-and-middleware/rocketmq',
                      ]
               },
               {
               type: 'category',
               label: 'CRM and Sales Analytics',
               link: {type: 'doc', id: 'cloud/prerequisites/crm-and-sales-analytics/README'},
               items: [
                       'cloud/prerequisites/crm-and-sales-analytics/hubspot',
                       'cloud/prerequisites/crm-and-sales-analytics/metabase',
                       'cloud/prerequisites/crm-and-sales-analytics/salesforce',
                       'cloud/prerequisites/crm-and-sales-analytics/zoho-crm',
                      ]
               },
               {
                type: 'category',
                label: 'SaaS and APIs',
                link: {type: 'doc', id: 'cloud/prerequisites/saas-and-api/README'},
                items: [
                        'cloud/prerequisites/saas-and-api/coding',
                        'cloud/prerequisites/saas-and-api/github',
                        'cloud/prerequisites/saas-and-api/lark-approval',
                        'cloud/prerequisites/saas-and-api/lark-doc',
                        'cloud/prerequisites/saas-and-api/lark-im',
                        'cloud/prerequisites/saas-and-api/lark-task',
                        'cloud/prerequisites/saas-and-api/quick-api',
                        'cloud/prerequisites/saas-and-api/vika',
                        'cloud/prerequisites/saas-and-api/zoho-desk',
                       ]
               },
               {
                type: 'category',
                label: 'E-Commerce',
                link: {type: 'doc', id: 'cloud/prerequisites/e-commerce/README'},
                items: [
                        'cloud/prerequisites/e-commerce/alibaba-1688',
                        'cloud/prerequisites/e-commerce/shein',
                       ]
               },
               {
                type: 'category',
                label: 'Files',
                link: {type: 'doc', id: 'cloud/prerequisites/files/README'},
                items: [
                        'cloud/prerequisites/files/csv',
                        'cloud/prerequisites/files/excel',
                        'cloud/prerequisites/files/json',
                        'cloud/prerequisites/files/xml',
                       ]
               },
               {
                type: 'category',
                label: 'Others',
                link: {type: 'doc', id: 'cloud/prerequisites/others/README'},
                items: [
                        'cloud/prerequisites/others/custom-connection',
                        'cloud/prerequisites/others/dummy',
                        'cloud/prerequisites/others/http-receiver',
                       ]
               },
     ]
    },
    {
     type: 'category',
     label: 'User Guide',
     link: {type: 'doc', id: 'cloud/user-guide/README'},
     items: [
             'cloud/user-guide/workshop',
             'cloud/user-guide/manage-agent',
             'cloud/user-guide/manage-connection',
             {
              type: 'category',
              label: 'Data Replication',
              link: {type: 'doc', id: 'cloud/user-guide/copy-data/README'},
              items:[
                    'cloud/user-guide/copy-data/create-task',
                    'cloud/user-guide/copy-data/manage-task',
                    'cloud/user-guide/copy-data/monitor-task',
                    ]
            },
            {
             type: 'category',
             label: 'Data Transformation',
             link: {type: 'doc', id: 'cloud/user-guide/data-development/README'},
             items:[
                   'cloud/user-guide/data-development/create-task',
                   'cloud/user-guide/data-development/manage-task',
                   'cloud/user-guide/data-development/process-node',
                   'cloud/user-guide/data-development/monitor-task',
                   ]
             },
             'cloud/user-guide/custom-node',
             'cloud/user-guide/operation-log',
             {
              type: 'category',
              label: 'Real-time Data Hub',
              link: {type: 'doc', id: 'cloud/user-guide/data-console/README'},
              items:[
                    {
                     type: 'category',
                     label: 'Data Integration Mode',
                     link: {type: 'doc', id: 'cloud/user-guide/data-console/etl-mode/README'},
                     items:[
                            'cloud/user-guide/data-console/etl-mode/etl-mode-dashboard',
                            'cloud/user-guide/data-console/etl-mode/create-etl-task',
                           ]
                    },
                    {
                     type: 'category',
                     label: 'Data Service Platform Model',
                     link: {type: 'doc', id: 'cloud/user-guide/data-console/daas-mode/README'},
                     items:[
                            'cloud/user-guide/data-console/daas-mode/enable-daas-mode',
                            'cloud/user-guide/data-console/daas-mode/daas-mode-dashboard',
                            'cloud/user-guide/data-console/daas-mode/create-daas-task',
                           ]
                    },
                    ]
             },               
             'cloud/user-guide/trouble-shooting-connection',
             'cloud/user-guide/no-supported-data-type',
            ]
    },
    {
     type: 'category',
     label: 'Tutorials',
     link: {type: 'doc', id: 'cloud/best-practice/README'},
     items: [
            'cloud/best-practice/mysql-to-bigquery',
            'cloud/best-practice/oracle-to-tablestore',
            'cloud/best-practice/excel-to-mysql',
            
        ]
        },
     {
      type: 'category',
      label: 'FAQ',
      link: {type: 'doc', id: 'cloud/faq/README'},
      items:[
             'cloud/faq/data-security',
             'cloud/faq/agent-installation',
             'cloud/faq/database',
             'cloud/faq/task',
      ]
     },
     {
      type: 'category',
      label: 'Appendix',
      link: {type: 'doc', id: 'cloud/appendix/README'},
      items: [
              'cloud/appendix/standard-js',
              'cloud/appendix/enhanced-js'
              ]
     },
  ],
};


module.exports = sidebars;
