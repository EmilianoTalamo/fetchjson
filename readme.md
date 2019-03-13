# FetchJSON

FetchJSON is an alternative for the native `Fetch Promise`, but it automatically parses the JSON data, so it can be used right away.

Basically with this tiny script, you can import a JSON file into your .js easily.

## Usage

```js
fetchJSON(link, returnAsString [optional])
	.then(response => {
		// Do whatever you want with the JSON
	})
	.catch(error => {
		// Do this if it fails to fetch the JSON
	})
```

- The `link` argument is self explanatory, you put here your .json URL as a string.
- The `returnAsString` argument is optional, if you set it to *false* or don't set it at all, it will return the .JSON as an object. If you set it to *true*, it will return it as a string.



