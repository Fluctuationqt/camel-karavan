# Trimmed Karavan Designer for embedding 
The yakov/trim-designer contains the trimmed designer and it was started out from the following branch:
git checkout tags/3.20.1 -b 3.20.1-branch

## Setup
git clone https://github.com/Fluctuationqt/camel-karavan
cd camel-karavan
git checkout -b yakov/trim-designer
mvn clean compile exec:java -Dexec.mainClass="org.apache.camel.karavan.generator.KaravanGenerator" -f karavan-generator
cd karavan-core
yarn install
cd ../karavan-designer
yarn install

To build a designer page for dirigible:
yarn build 
Copy the files from camel-karavan/karavan-designer/build folder into →
dirigible/components/ide-ui-integrations/src/main/resources/META-INF/dirigible/camel/designer

To start the page locally without dirigible:
remove this line  "homepage": "/services/web/camel/designer/” from  camel-karavan/karavan-designer/package.json at line 11
yarn start
