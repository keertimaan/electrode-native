## Cauldron Node Client

This is a Node client for the [cauldron-api](https://gecgithub01.walmart.com/Electrode-Mobile-Platform/cauldron-api)

#### Usage

Install the client in your project :

`npm i @walmart/ern-cauldron-cli --save`

Then wherever you need the client in your code, just import it :

```javascript
import CauldronClient from 'ern-cauldron-cli'
```

To use the client you first need to create an instance of it. Only parameter to the constructor is the base URL of the Cauldron API (please see [cauldron-api](https://gecgithub01.walmart.com/Electrode-Mobile-Platform/cauldron-api) documentation to run it locally).

```javascript
const cli = new CauldronClient('http:///localhost:3000');
```

Then you can access the Cauldron by calling methods on the client. All methods returns Promises.