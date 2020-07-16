(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{406:function(e,t,s){e.exports=s.p+"assets/img/cloud-console-user.519da95a.png"},407:function(e,t,s){e.exports=s.p+"assets/img/cloud-console-user-login.bc33c9f6.png"},408:function(e,t,s){e.exports=s.p+"assets/img/cloud-console-user-details.93fd6ca5.png"},409:function(e,t,s){e.exports=s.p+"assets/img/cloud-console-user-nodes.e703ddbd.png"},495:function(e,t,s){"use strict";s.r(t);var a=s(45),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-cloud-console-to-access-your-user-clusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-cloud-console-to-access-your-user-clusters"}},[e._v("#")]),e._v(" Using Cloud Console to access your user clusters")]),e._v(" "),a("p",[e._v("This page explains how to log in to registered Kubernetes clusters from Google Cloud Console. The deployment playbooks register your clusters with Google Cloud, so you can log in to clusters from Cloud Console.")]),e._v(" "),a("p",[e._v("You can log in to registered clusters via Google Cloud Console using a bearer token. The easiest method is to\ncreate a Kubernetes service account in the cluster, and use its bearer token to log in.")]),e._v(" "),a("h2",{attrs:{id:"utility-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utility-script"}},[e._v("#")]),e._v(" Utility script")]),e._v(" "),a("p",[e._v("A utility script "),a("code",[e._v("create-user-gcp.sh")]),e._v(" is provided in the folder "),a("code",[e._v("Anthos-on-SimpliVity/scripts/cluster-util")]),e._v(" to automate\nthe procedure to create a user in an Anthos "),a("strong",[e._v("user")]),e._v(" cluster and to assign "),a("code",[e._v("view")]),e._v(", "),a("code",[e._v("node-reader")]),e._v("\nand "),a("code",[e._v("cluster-admin")]),e._v(" (optional) roles:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" ./create-user-gcp.sh -h\n\nThis script is used to create a user in an Anthos user cluster and assign\nview, node-reader and cluster-admin (Optional) roles\n\nSyntax: create-user-gcp.sh [-n|a|h]\noptions:\n-u     Username to create in cluster. (Required)\n-k     Path to user cluster kubeconfig file. Will use env KUBECONFIG if set (Optional)\n-A     Set user as cluster admin. (Optional)\n-h     Print this Help.\n\n")])])]),a("p",[e._v("Run this script on the admin workstation to create users and admins for the cluster determined by the kubeconfig.")]),e._v(" "),a("h2",{attrs:{id:"manual-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-procedure"}},[e._v("#")]),e._v(" Manual procedure")]),e._v(" "),a("p",[e._v("The remainder of this page will walk through the equivalent manual steps required to create users.")]),e._v(" "),a("h3",{attrs:{id:"connect-to-your-admin-workstation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-your-admin-workstation"}},[e._v("#")]),e._v(" Connect to your admin workstation")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh -i /root/anthos_secrets/vsphere_workstation ubuntu@10.15.155.200\n")])])]),a("h3",{attrs:{id:"configure-kubeconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-kubeconfig"}},[e._v("#")]),e._v(" Configure KUBECONFIG")]),e._v(" "),a("p",[e._v("Configure "),a("code",[e._v("kubectl")]),e._v(" to access the appropriate user cluster. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export KUBECONFIG=~/kubeconfigs/gmcg-gke-usercluster-1-kubeconfig\n")])])]),a("h3",{attrs:{id:"create-node-reader-cluster-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-node-reader-cluster-role"}},[e._v("#")]),e._v(" Create "),a("code",[e._v("node-reader")]),e._v(" cluster role")]),e._v(" "),a("p",[e._v("Create a file called "),a("code",[e._v("node-reader.yaml")]),e._v(" with the following content:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n name: node-reader\nrules:\n- apiGroups: [""]\n  resources: ["nodes"]\n  verbs: ["get", "list", "watch"]\n')])])]),a("p",[e._v("Create the new cluster role with the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f node-reader.yaml\n")])])]),a("h3",{attrs:{id:"creating-and-authorizing-a-service-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-authorizing-a-service-account"}},[e._v("#")]),e._v(" Creating and authorizing a service account")]),e._v(" "),a("p",[e._v("Create a service account for each user logging in to the cluster. Using a bearer token is like using a password, so each user should have their own. Logging in with the service account's bearer token causes all operations to be executed as the KSA, restricted by the RBAC roles held by the service account.")]),e._v(" "),a("p",[e._v("Create the Kubernetes Service Account and ClusterRoleBinding resources to bind the "),a("code",[e._v("view")]),e._v(" and "),a("code",[e._v("node-reader")]),e._v(" Kubernetes RBAC ClusterRoles to the service account:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create serviceaccount test-user-sa\nkubectl create clusterrolebinding test-user-sa-view  --clusterrole view --serviceaccount default:test-user-sa\nkubectl create clusterrolebinding test-user-sa-node-reader --clusterrole node-reader --serviceaccount default:test-user-sa\n")])])]),a("p",[e._v("Determine the appropriate secret name:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get serviceaccount test-user-sa -o jsonpath='{$.secrets[0].name}'\n\ntest-user-sa-token-mnxjx\n")])])]),a("p",[e._v("To acquire the bearer token for the service account, use the secret name in the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get secret test-user-sa-token-mnxjx -o jsonpath='{$.data.token}' | base64 -d\n\neyJhbGciOiJSUzI1NiIsImtpZCI6Ik05ZWtZRTdhe ... hBDc6Q\n")])])]),a("p",[e._v("Log in to the console at "),a("a",{attrs:{href:"https://console.cloud.google.com/kubernetes/list",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://console.cloud.google.com/kubernetes/list"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:s(406),alt:'"Cloud console - user cluster"'}})]),e._v(" "),a("p",[a("strong",[e._v("Figure.")]),e._v(" Cloud console - user cluster")]),e._v(" "),a("p",[e._v("Press the "),a("code",[e._v("Login")]),e._v(" button and choose "),a("code",[e._v("Token")]),e._v(" as the method you want to use for authentication to the cluster:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(407),alt:'"Cloud console - Login"'}})]),e._v(" "),a("p",[a("strong",[e._v("Figure.")]),e._v(" Cloud console - Login")]),e._v(" "),a("p",[e._v("Once you are authenticated, you can view the details for the on-prem user cluster:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(408),alt:'"Cloud console - user cluster details"'}})]),e._v(" "),a("p",[a("strong",[e._v("Figure.")]),e._v(" Cloud console - user cluster details")]),e._v(" "),a("p",[e._v("Click on the "),a("code",[e._v("Nodes")]),e._v(" tab to see details of the individual nodes for the on-prem user cluster:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(409),alt:'"Cloud console - user cluster nodes"'}})]),e._v(" "),a("p",[a("strong",[e._v("Figure.")]),e._v(" Cloud console - user cluster nodes")]),e._v(" "),a("h3",{attrs:{id:"creating-a-cluster-admin-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-cluster-admin-role"}},[e._v("#")]),e._v(" Creating a cluster-admin role")]),e._v(" "),a("p",[e._v("The procedure is the same as above, except with the additional "),a("code",[e._v("cluster-admin")]),e._v(" role:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create serviceaccount test-admin-sa\nkubectl create clusterrolebinding test-admin-sa-view  --clusterrole view --serviceaccount default:test-admin-sa\nkubectl create clusterrolebinding test-admin-sa-node-reader --clusterrole node-reader --serviceaccount default:test-admin-sa\nkubectl create clusterrolebinding test-admin-sa-admin --clusterrole cluster-admin --serviceaccount default:test-admin-sa\n")])])]),a("p",[e._v("Determine the appropriate secret name:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get serviceaccount test-admin-sa -o jsonpath='{$.secrets[0].name}'\n\ntest-admin-sa-token-ndf5x\n")])])]),a("p",[e._v("To acquire the bearer token for the service account, use the secret name in the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get secret test-user-sa-token-ndf5x -o jsonpath='{$.data.token}' | base64 -d\n\neyJhbGciOiJSUzI1NiIsImtpZCI...1kGgErzAVIjbM75CCOag\n")])])]),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("h3",{attrs:{id:"google-cloud-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-documentation"}},[e._v("#")]),e._v(" Google Cloud documentation")]),e._v(" "),a("p",[e._v("Logging in to a cluster from Cloud Console"),a("br"),e._v(" "),a("a",{attrs:{href:"https://cloud.google.com/anthos/multicluster-management/console/logging-in",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/anthos/multicluster-management/console/logging-in"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);