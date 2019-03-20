# Hello there! If you are here we are linked by the **Force.com**

#### Feel free to add new stuff here (if there is an update or something that could be subject of matter).

### To start we require of a few things:

- *Git*: I want to believe you already installed if not, please do it.
- *Node.js* / *NPM*: for commitlint which is a lint for git commit messages.
- *VSCode*: which will be like your new best buddy.
- *DevHub*: enabled in your org.
- *SFDX*: download it from [here](https://developer.salesforce.com/tools/sfdxcli) or use the npm to install it `npm i sfdx-cli -g`

### Resources:

- [What's a Dev Hub?](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_enable_devhub.htm)
- [Installing Node.js for Windows](https://nodejs.org/dist/v11.10.1/node-v11.10.1-x64.msi)
- [Get Git from here](https://git-scm.com/download/win)
- [Get VSCode](https://code.visualstudio.com/)
- [Generate your SSH Key](https://confluence.atlassian.com/bitbucketserver/creating-ssh-keys-776639788.html)
- [SFDX Metadata API Support](https://developer.salesforce.com/docs/metadata-coverage/45)

#### VSCode provides several plugins to improve our live:
- [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)
- [Want to keep your code as is finest? Try Apex PMD](https://marketplace.visualstudio.com/items?itemName=chuckjonas.apex-pmd)
- [Get ride of annoying trailing spaces in your code](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)
- [ESLint is love](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Quick Start

Lets start by setting up our local environment:

`sfdx force:auth:web:login -d -a <<DevHubName>>`

> Adding the -d flag sets this org as the default Dev Hub. Use the -a to set an alias for the org.

This will prompt a new window in your browser and will ask for **SF** credentials. Then clone the project

`git clone git@gitlab.com:terja/sfdx-git.git`

Let's move to the project folder by doing: `cd path/to/sfdx-git` folder.

Execute `npm i` to install dependencies.

### Project Structure

> sfdx-project.json  **_Contains package definitions, namespaces and url to perform login_**

> package.xml     **_Contains all the metadata defined_**

> package.json    **_Contains all node modules dependencies_**

> config/project-scratch-def.json  **_Scratch org definition file_**

> force-app **_Contains all retrieved and new metadata that will be used in the project_**

Next create a *scratch org*

`sfdx force:org:create -s -f config/project-scratch-def.json -a <<scratch-org-alias>>`

To open your new scratch org

`sfdx force:org:open -u <<scratch-org-alias>>`

This will prompt a new window with our scratch org.

Deploy the class TriggerHandler to the scratch org

> TriggerHandler was wrote by **Kevin Ohara** as trigger framework.
To see the documentation visit: [Kevin's github repo](https://github.com/kevinohara80/sfdc-trigger-framework)

### Retrieve metadata

All metadata components listed in a manifest: 
`sfdx force:source:retrieve -x package.xml`

Source files in a directory: 
`sfdx force:source:retrieve -p path/to/source`

A specific Apex class and the objects whose source is in a directory: 
`sfdx force:source:retrieve -p <<path/to/apex/classes/MyClass.cls, path/to/source/objects>>`

Source files in a comma-separated list that contains spaces: 
`sfdx force:source:retrieve -p <<path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, path/to/apex/classes>>`

All Apex classes: 
`sfdx force:source:retrieve -m ApexClass`

A specific Apex class: 
`sfdx force:source:retrieve -m ApexClass:MyApexClass`

A layout name that contains a comma (Layout: Page, Console): 
`sfdx force:source:retrieve -m "Layout:Page%2C Console"`

### List all your Orgs

`sfdx force:org:list`

This will prompt you all your available orgs

## Sandbox

In order to register Sandboxes you can perform the following steps.

`sfdx force:auth:web:login -r https://test.salesforce.com -a FullSandbox`

`sfdx force:auth:web:login -r https://test.salesforce.com -a DevSandbox`

To login in one of these sandboxes, run the following command:

`sfdx force:org:open -u DevSandbox`

## Writing Semantic Commits

At the beginning of this document, I told you about commitlint, but what is this commitlint stuff?

Usually, when we commit out changes we do stuff like: `git commit -m "add new class"` thats ok but it could be more semantic.

With commitlint there are some rules that will allow you to write these messages in fashioned way like

`git commit -m "feat(triggerhandler): add triggerhandler to project"`

Let's break the message: 

- `feat`: referring to feature

- `(scope)`: what we developed

- `message`: a short title for the message, in the body you can explain all the details

This is based on **Angular Conventional Commits**. Also you can create your own commit rules

With commitlint we also have `fix`, `hotfix`, `chore`, `refactor`.

To know more about **Semantic Commits** [click here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

## Continuos Integration / Continuous Delivery

### **Comming Soon**

## License **MIT**

## About the Author: 
Im Jaime Terrats, currently developing software @ Softtek, Ensenada, **Cat Lover** and someties **Musician**. Main interests
**_Salesforce_**, **_MERN_**, **_MEAN_**, **_MEAUN_**, **_OpenWRT_**, **_AWS_**, **_RN_**, **_Scrum_**, **_DotNet Core_**,
**_Arch Linux_**, **_Embedded_**. If you have any doubts please ping at my email: **jaime.terrats@softtek.com**

I'll try to get back to you asap.

Happy coding and **_may the force.com be with you_**!
