(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{458:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ansible-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible-controller"}},[e._v("#")]),e._v(" Ansible controller")]),e._v(" "),a("p",[e._v("A script is provided to build the Python "),a("code",[e._v("virtualenv")]),e._v(" required to execute the playbooks.")]),e._v(" "),a("h2",{attrs:{id:"download-playbooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-playbooks"}},[e._v("#")]),e._v(" Download playbooks")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ~\n\ngit clone https://github.com/HewlettPackard/Anthos-on-SimpliVity.git\n")])])]),a("p",[e._v("Change to the directory that was created using the "),a("code",[e._v("git clone")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/Anthos-on-SimpliVity\n")])])]),a("h2",{attrs:{id:"create-python-virtual-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-python-virtual-environment"}},[e._v("#")]),e._v(" Create Python Virtual environment")]),e._v(" "),a("p",[e._v("The use of a Python Virtual environment allows for flexibility in ansible host creation. It also\nprovides an easy method to freeze the version of required packages through the use of a\nrequirements file.")]),e._v(" "),a("p",[e._v("The provided script "),a("code",[e._v("prerequisites/ansible-setup.sh")]),e._v(" will build the python virtualenv needed to execute the playbooks.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE:")]),e._v(" If your environment requires the use of a proxy, you will need to modify the proxy settings in the "),a("code",[e._v("ansible-setup.sh")]),e._v(" script based on your environment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HTTPS_PROXY="HTTPS_PROXY=http://16.100.211.43:8888"\nneeds_proxy=true\n')])])]),a("h2",{attrs:{id:"run-the-script-to-create-virtualenv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-script-to-create-virtualenv"}},[e._v("#")]),e._v(" Run the script to create virtualenv")]),e._v(" "),a("p",[e._v("You must specify the name of the directory for the virtualenv using the "),a("code",[e._v("-d")]),e._v(" flag. You can also\nuse the "),a("code",[e._v("-b")]),e._v(" option to set the base directory (default is "),a("code",[e._v("~/virtualenvs")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ~/Anthos-on-SimpliVity\n\n./prerequisite/ansible-setup.sh -d ansible-296\n")])])]),a("p",[e._v("Running the script with the "),a("code",[e._v("-h")]),e._v(" option produces the help output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" ./prerequisite/ansible-setup.sh -h\n\nThis script is used to create a python3 virtualenv with ansible operating environment\nSyntax: ansible-setup.sh [-b|d|h]\noptions:\n-b     Base directory to create python virtualenvs. (Optional - Default is ~/virtualenvs)\n-d     Name to use for virtualenv directory. (Required)\n-h     Print this Help.\n\n")])])]),a("h2",{attrs:{id:"activate-python-virtualenv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate-python-virtualenv"}},[e._v("#")]),e._v(" Activate Python "),a("code",[e._v("virtualenv")])]),e._v(" "),a("p",[e._v("Before you run the playbooks, activate your Python "),a("code",[e._v("virtualenv")]),e._v(" created by "),a("code",[e._v("ansible-setup.sh")]),e._v(", for example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("source /root/virtualenvs/ansible-296/bin/activate\n")])])]),a("h2",{attrs:{id:"software-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-installed"}},[e._v("#")]),e._v(" Software installed")]),e._v(" "),a("p",[e._v("The file "),a("code",[e._v("prerequisites/ansible-venv-requirements.txt")]),e._v(" lists the versions of the software\ninstalled in the virtualenv.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ansible==2.9.6\ncertifi==2019.11.28\ncffi==1.14.0\nchardet==3.0.4\ncryptography==2.8\ndocopt==0.6.2\nidna==2.9\njmespath==0.9.4\nJinja2==2.11.1\nMarkupSafe==1.1.1\nnetaddr==0.7.19 \nprompt-toolkit==3.0.5\npycparser==2.20\npyflakes==2.1.1\nPygments==2.6.1\npyvim==3.0.2\npyvmomi==6.7.3\nPyYAML==5.3.1\nrequests==2.23.0\nsix==1.14.0\nselinux==0.2.1\nurllib3==1.25.8\nwcwidth==0.1.9\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);