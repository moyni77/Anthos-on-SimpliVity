(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{479:function(t,e,l){"use strict";l.r(e);var a=l(45),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"configuring-admin-and-user-clusters"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#configuring-admin-and-user-clusters"}},[t._v("#")]),t._v(" Configuring admin and user clusters")]),t._v(" "),l("p",[t._v("This section describes the configuration required for deploying admin and user clusters. This includes:")]),t._v(" "),l("ul",[l("li",[t._v("Common variables across all clusters")]),t._v(" "),l("li",[t._v("Default values that can be over-ridden on a cluster-by-cluster basis")]),t._v(" "),l("li",[t._v("General cluster configuration")]),t._v(" "),l("li",[t._v("Configuring static IPs for each cluster")])]),t._v(" "),l("p",[t._v("Background reading material  is available at\n"),l("a",{attrs:{href:"https://cloud.google.com/anthos/gke/docs/on-prem/how-to/admin-user-cluster-basic",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.google.com/anthos/gke/docs/on-prem/how-to/admin-user-cluster-basic"),l("OutboundLink")],1),t._v(".")]),t._v(" "),l("h2",{attrs:{id:"common-variables"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#common-variables"}},[t._v("#")]),t._v(" Common variables")]),t._v(" "),l("p",[t._v("The following variables are common across all clusters:")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_bundle_path")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The GKE on-prem bundle file contains all of the components in a particular release of GKE on-prem. Set the value of bundlepath to the absolute path of the admin workstation's bundle file."),l("br"),l("strong",[t._v("Do not change.")]),t._v(" "),l("code",[t._v("'var/lib/gke/bundles/gke-onprem-vsphere-<<anthos_version>>-full.tgz'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_data_disk_name")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GKE on-prem creates a virtual machine disk (VMDK) to hold the Kubernetes object data for the admin cluster. The installer creates the VMDK for you, but you must provide a name for the VMDK (the "),l("code",[t._v(".vmdk")]),t._v(" extension will be added). Any directory in the supplied path must be created before deployment. Not required when adding additional user clusters."),l("br"),t._v("For example, "),l("code",[t._v("'test-deploy'")]),t._v(".")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_network_internal")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("vSphere network for VMs")])])])]),t._v(" "),l("h2",{attrs:{id:"default-configuration"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#default-configuration"}},[t._v("#")]),t._v(" Default configuration")]),t._v(" "),l("p",[t._v("These variables will be used for all clusters unless explicitly overridden in the "),l("code",[t._v("gke_cluster_config")]),t._v(":")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_cluster_resource_pool")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("If you are using a non-default resource pool, provide the name of your vSphere resource pool. Provides a default value for the per-cluster field "),l("code",[t._v("resource_pool")]),t._v(". "),l("br"),l("br"),t._v("For example, "),l("code",[t._v("'Anthos_1.4'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_cluster_gcp_region")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Provides a default value for the per-cluster fields "),l("code",[t._v("logging_metric_gcp_region")]),t._v(" and "),l("code",[t._v("audit_logging_gcp_region")]),t._v(". "),l("br"),l("br"),t._v("For example, "),l("code",[t._v("'us-east1'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_cluster_antiAffinity_enable")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Sets the "),l("code",[t._v("antiAffinityGroups.enabled")]),t._v(" flag in the user cluster config. "),l("br"),t._v("Spreads nodes across at least three physical hosts (requires at least three hosts)"),l("br"),t._v("Defaults to "),l("code",[t._v("true")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_loadBalancerKind")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("F5BigIP")]),t._v(", "),l("code",[t._v("Seesaw")]),t._v(" or "),l("code",[t._v("ManualLB")]),t._v('"'),l("br"),l("strong",[t._v("Only F5BigIP is currently supported")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enable_vpc")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Provides a default value for the per-cluster field "),l("code",[t._v("enable_vpc")]),t._v(". Set to "),l("code",[t._v("'true'")]),t._v(" if you have your cluster's network controlled by a VPC. This ensures that all telemetry flows through Google's restricted IP addresses. "),l("br"),l("br"),t._v("One of "),l("code",[t._v("'true'")]),t._v(" or "),l("code",[t._v("'false'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enable_cloudrun")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("all.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Provides a default value for the per-cluster field "),l("code",[t._v("enable_cloudrun")]),t._v(". "),l("br"),l("br"),t._v("One of "),l("code",[t._v("'true'")]),t._v(" or "),l("code",[t._v("'false'")])])])])]),t._v(" "),l("h2",{attrs:{id:"cluster-configuration"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cluster-configuration"}},[t._v("#")]),t._v(" Cluster configuration")]),t._v(" "),l("p",[t._v("General cluster config is supplied in the fields of the "),l("code",[t._v("gke_cluster_config")]),t._v(" structure.\nThe embedded structure "),l("code",[t._v("gke_cluster_config.gkenode_net")]),t._v(" is used for configuring networking for each cluster.")]),t._v(" "),l("h2",{attrs:{id:"general-cluster-config-gke-cluster-config"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#general-cluster-config-gke-cluster-config"}},[t._v("#")]),t._v(" General cluster config "),l("code",[t._v("gke_cluster_config")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("name")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Unique name for the cluster")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("For example, "),l("code",[t._v("usercluster-1")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("type")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Type of cluster to be configured")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("admin")]),t._v(" or "),l("code",[t._v("user")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("loadBalancerKind")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Type of load balancer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("F5BigIP")]),t._v(", "),l("code",[t._v("Seesaw")]),t._v(" or "),l("code",[t._v("ManualLB")]),l("br"),l("strong",[t._v("Only F5BigIP is currently supported")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("f5_partition")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The playbooks for configuring F5 create partitions for the admin and user clusters based on this value.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("state")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Whether the F5 partition should exist or not.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("present")]),t._v(" or "),l("code",[t._v("absent")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("cluster_ctrl_vip")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Set to the IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the corresponding cluster")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("For example, "),l("code",[t._v("'172.17.0.21'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("cluster_ingress_vip")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Set to the IP address you have chosen to configure on the load balancer for the cluster's ingress service")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("datastore")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The datastore to use for the cluster. Defaults to the global "),l("code",[t._v("vcenter.datastore")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("resource_pool")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("If you want to use a cluster-specific resource pool, provide the name of your vSphere resource pool")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to value of "),l("code",[t._v("gke_cluster_resource_pool")]),t._v(".")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("cluster_network")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("If specified it overwrites the network field in global vCenter configuration")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("logging_metric_gcp_region")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("A GCP region where you would like to store logs and metrics for this cluster.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to value of "),l("code",[t._v("gke_cluster_gcp_region")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("audit_logging_gcp_region")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("A GCP region where you would like to store audit logs for this cluster.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to value of "),l("code",[t._v("gke_cluster_gcp_region")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enable_vpc")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Set to true if you have your cluster's network controlled by a VPC. This ensures that all telemetry flows through Google's restricted IP addresses.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("true")]),t._v(" or "),l("code",[t._v("false")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("enable_cloudrun")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Specify Cloud Run configuration")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("true")]),t._v(" or "),l("code",[t._v("false")])])])])]),t._v(" "),l("h3",{attrs:{id:"configuring-ips-for-each-cluster"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#configuring-ips-for-each-cluster"}},[t._v("#")]),t._v(" Configuring  IPs for each cluster")]),t._v(" "),l("p",[t._v("The structure "),l("code",[t._v("gke_cluster_config.gkenode_net")]),t._v(" is used for configuring networking for each cluster.")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("gke_cluster_config.gkenode_net.mode")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Config type being specified")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("One of "),l("code",[t._v("dhcp")]),t._v(" or "),l("code",[t._v("static")])])])])]),t._v(" "),l("p",[t._v("If you choose "),l("code",[t._v("static")]),t._v(", you can configure the static IPs using the other fields in the "),l("code",[t._v("gke_cluster_config.gkenode_net")]),t._v("\nstructure.")]),t._v(" "),l("p",[t._v("You can specify the addresses of the DNS servers ("),l("code",[t._v("dns")]),t._v("), time servers ("),l("code",[t._v("tod")]),t._v("), and default gateway ("),l("code",[t._v("gateway")]),t._v(") and netmask ("),l("code",[t._v("netmask")]),t._v(") that the cluster nodes will use.")]),t._v(" "),l("p",[t._v("The "),l("code",[t._v("search_domain")]),t._v(" field is a string of DNS search domains to use in the cluster. These domains are used as part of a domain search list.")]),t._v(" "),l("p",[t._v("The "),l("code",[t._v("ips")]),t._v(" field is an array of IP addresses ("),l("code",[t._v("ip")]),t._v(") and hostnames ("),l("code",[t._v("hostname")]),t._v("). These are the IP addresses and hostnames that Anthos GKE on-prem will assign to the cluster nodes.")]),t._v(" "),l("p",[t._v("A sample structure is shown below:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("      gkenode_net:\n        mode: 'static'\n        dns: '192.168.1.1'\n        gateway: '192.168.1.1'\n        netmask: '255.255.255.0'\n        tod: 'hou-ntp1.hcilabs.hpecorp.net'\n        search_domain: 'my.local.com'\n        ips:\n         - ip: 192.168.1.10\n           hostname: admin-host1\n         - ip: 192.168.1.11\n           hostname: admin-host2\n         - ip: 192.168.1.12\n           hostname: admin-host3\n")])])]),l("h2",{attrs:{id:"user-cluster-configuration-master-and-worker-node"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#user-cluster-configuration-master-and-worker-node"}},[t._v("#")]),t._v(" User cluster configuration - master and worker node")]),t._v(" "),l("p",[t._v("Configuration for the master and worker nodes in a user cluster are supplied in the fields of the "),l("code",[t._v("gke_cluster_config")]),t._v(" structure.")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("masternode_cpu")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of virtual CPUs for the master nodes in the user cluster.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("For example, "),l("code",[t._v("'6'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("masternode_memory")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of megabytes of memory for the master nodes in the user cluster.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("For example, "),l("code",[t._v("'8192'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("masternode_replicas")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of master nodes in the user cluster. User cluster master nodes must have either 1 or 3 replicas.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Default is "),l("code",[t._v("'1'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("workernode_cpu")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of virtual CPUs for the worker nodes in the user cluster.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Default is "),l("code",[t._v("'4'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("workernode_memory")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of megabytes of memory for the worker nodes in the user cluster.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Default is "),l("code",[t._v("'8192'")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("workernode_replicas")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of worker nodes in the user cluster. User cluster master nodes must have at least 3 replicas.")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Default is "),l("code",[t._v("'3'")])])])])]),t._v(" "),l("p",[t._v("A sample configuration for the worker and master nodes in a user cluster is shown below:")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("      masternode_cpu: '6'\n      masternode_memory: '16000'\n      masternode_replicas: '1'\n      workernode_cpu: '6'\n      workernode_memory: '16000'\n      workernode_replicas: '4'\n")])])]),l("h2",{attrs:{id:"user-cluster-configuration-csi-and-service-mesh"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#user-cluster-configuration-csi-and-service-mesh"}},[t._v("#")]),t._v(" User cluster configuration - CSI and Service Mesh")]),t._v(" "),l("p",[t._v("Configuration of the CSI driver for user clusters is documented in the section "),l("a",{attrs:{href:"csi-config"}},[t._v("CSI configuration")]),t._v(".")]),t._v(" "),l("p",[t._v("Configuration of the Service Mesh for user clusters is documented in the section "),l("a",{attrs:{href:"service-mesh-config"}},[t._v("Service Mesh configuration")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);