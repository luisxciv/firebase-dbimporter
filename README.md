# firebase-dbimporter


From the firebase console you're going to need to download the service-key.json file which is your private key so the admin sdk can access your firestore database

In the Firebase Console click on the settings wheel next to the Overview section and choose Users and permissions option.
from the permissions page choose 'service accounts' and generate a new json file with a private key.
save this file under project root as service-key.json or rename the the require variable accordingly


This script needs the following files/dependencies

`firebase-admin — npm module, you can install it locally to the folder of the script`

`service-key.json — file we’ve generated in the Authentication section`

`data.json — actually the data we want to push to our Firestore`


Sample JSON file format

`[
 {
 "myKey1": {
 "subkey1": "string",
 "subkey2": "string",
 }
 },
 {
 "myKey2": {
 "subkey1": "string",
 "subkey2": "string",
 }
 }
 ]`



