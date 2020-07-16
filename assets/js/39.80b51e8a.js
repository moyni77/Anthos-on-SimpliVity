(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{469:function(e,t,a){"use strict";a.r(t);var s=a(45),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-f5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-f5"}},[e._v("#")]),e._v(" Deploying F5")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("Configuration is complete as outlined in the section "),a("a",{attrs:{href:"../config-core/f5-config"}},[e._v("F5 configuration")])]),e._v(" "),a("li",[e._v("The playbook "),a("code",[e._v("playbooks/get_prereq.yml")]),e._v(" has completed successfully")])]),e._v(" "),a("h2",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ~/Anthos-on-SimpliVity\n\nansible-playbook playbooks/bigip_anthos.yml  --ask-vault-pass\n")])])]),a("h2",{attrs:{id:"tasks-performed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tasks-performed"}},[e._v("#")]),e._v(" Tasks performed")]),e._v(" "),a("ul",[a("li",[e._v("Set hostname of BIG-IP")]),e._v(" "),a("li",[e._v("Set new admin password")]),e._v(" "),a("li",[e._v("License BIG-IP using a key")]),e._v(" "),a("li",[e._v("Add internal VLAN as untagged to interface 1.1")]),e._v(" "),a("li",[e._v("Add external VLAN as untagged to interface 1.2")]),e._v(" "),a("li",[e._v("Create Self IP for internal VLAN")]),e._v(" "),a("li",[e._v("Create Self IP for external VLAN")]),e._v(" "),a("li",[e._v("Create partition for each cluster")]),e._v(" "),a("li",[e._v("Provision LTM at nominal level")]),e._v(" "),a("li",[e._v("Provision MGMT memory to large")]),e._v(" "),a("li",[e._v("Adjust restjavad memory setting")])]),e._v(" "),a("h2",{attrs:{id:"post-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-deployment"}},[e._v("#")]),e._v(" Post deployment")])])}),[],!1,null,null,null);t.default=r.exports}}]);