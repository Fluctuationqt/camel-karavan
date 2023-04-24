# Trimmed Karavan Designer for embedding 
The yakov/trim-designer contains the trimmed designer. </br>
</br>
This branch was started out like this: </br>
git checkout tags/3.20.1 -b 3.20.1-branch </br>
// add changes </br>
git checkout -b yakov/trim-designer </br>

## Setup
git clone https://github.com/Fluctuationqt/camel-karavan </br>
cd camel-karavan </br>
git checkout -b yakov/trim-designer </br>
mvn clean compile exec:java -Dexec.mainClass="org.apache.camel.karavan.generator.KaravanGenerator" -f karavan-generator </br>
cd karavan-core </br>
yarn install </br>
cd ../karavan-designer </br>
yarn install </br>

- To build a designer page for dirigible: </br>
yarn build </br>
rm -rf /build/components/.gitignore
rm -rf /build/kamelets/.gitignore
Copy the files from camel-karavan/karavan-designer/build folder into → </br>
dirigible/components/ide-ui-integrations/src/main/resources/META-INF/dirigible/camel/designer </br>

- To start the page locally without dirigible: </br>
remove this line  "homepage": "/services/web/camel/designer/” from  camel-karavan/karavan-designer/package.json at line 11 </br>
yarn start </br>
