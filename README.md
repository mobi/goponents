# Goponents

###### Currently `v1.1.1`

This project houses a set of UI components for Angular and designed around the 'Go' design system.

# Getting Started
1. Take a look at our [code of conduct](https://github.com/mobi/goponents/blob/master/CODE_OF_CONDUCT.md)
2. Read through our [contribution guidelines](https://github.com/mobi/goponents/blob/master/CONTRIBUTING.md)
3. Install the latest version of npm
   ```bash
   npm install -g npm@latest
   ```
   or if you are using `nvm` you can alternatively run:
   ```bash
   nvm install-latest-npm
   ```
   _We try to stay as up to date a possible._
4. Install all of the node modules
   ```bash
   npm install
   ```
5. Start a development test server:
   ```bash
   ng serve
   ```
   _This will serve the go-tester directory at `localhost:4200`_
6. In a separate tab, start the tests for the go-lib components:
   ```bash
   ng test go-lib
   ```
   _Test will continue to run anytime a file is saved. This will help ensure that breaking changes aren't introduced when changes are introduced._

# Directory structure
The project is separated up into three project directories.

### go-lib
[projects/go-lib](https://github.com/AlexOverbeck/goponents/tree/master/projects/go-lib) is where all of our production components, services, and other items are built out. If you are adding that you would like to distribute, this is where you will do that work.

The components are located [here](https://github.com/AlexOverbeck/goponents/tree/master/projects/go-lib/src/lib/components):
```bash
projects/go-lib/src/lib/components
```

### go-tester
[projects/go-tester](https://github.com/AlexOverbeck/goponents/tree/master/projects/go-tester) is separate app that allows us to test the implementation of our components as we build them out. If you want to test to make sure your go-lib components work as expected in a more real world setting, this is where you will do that work.

The base tester app is located [here](https://github.com/AlexOverbeck/goponents/tree/master/projects/go-tester/src/app);
```bash
projects/go-tester/src/app
```

### go-tester-e2e
[projects/go-tester](https://github.com/AlexOverbeck/goponents/tree/master/projects/go-tester-e2e) will eventually be where we will write all of our end to end testing for our go-tester app. We have not yet done this, but we would welcome any [contributions](https://github.com/mobi/goponents/blob/master/CONTRIBUTING.md).


# Other Useful Things

### Code scaffolding

Run `ng generate lib/components/component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Publishing to npm
To build and pack the library **locally** run:
```
npm run package
```

To build and pack the library locally and publish that package to npm run:
```
npm run publish
```

### Properly Exposing Files for Importing

The `projects/go-lib/src/public_api.ts` file exposes files to the root of the node module. This allows for importing like:

`import { GoTableConfig } from '@tangoe/goponents';`

To do this properly, you must export each individual file within the `public_api.ts` file.

### Components Available

| Component    | Notes                                  |
|--------------|----------------------------------------|
| accordion    | Available                              |
| button       | Available                              |
| card         | Available                              |
| icon         | Available                              |
| modal        | Available                              |
| off-canvas   | Available                              |
| table        | Available                              |
| toasts       | Available                              |
|--------------|----------------------------------------|
| input        | Priority                               |
| textarea     | Priority                               |
| combobox     | Priority                               |
| checkbox     | Priority                               |
| copy button  | Priority                               |
| radio        | Priority                               |
| datepicker   | Will Need                              |
| autocomplete | Will Need                              |
| masked input | Will Need                              |
|--------------|----------------------------------------|
| tabs         | Idea                                   |
| badge        | Idea                                   |
| tooltip      | Idea                                   |
| slide toggle | Idea                                   |
| timepicker   | Idea                                   |
| wysiwyg editor | Idea                                 |

