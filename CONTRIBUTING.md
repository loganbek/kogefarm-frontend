# Contributing to the KogeFarm ecosystem 🦥

Thanks for taking the time to contribute!
You can start by reading our [Contribution guidelines](https://docs.pancakeswap.finance/code/contributing) first.

## Setup

Create a `.env.development.local` file at the root of the project. Add the following lines inside :

```shell
REACT_APP_CROWDIN_APIKEY = ""
REACT_APP_CROWDIN_PROJECTID = ""
```

You'll need this in order to get the i18n system to work. Contact a dev if you need these values.

Install the dependencies

```shell
yarn
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.

## Tests

Run tests with `yarn test`.

## Localisation

_In order for the Crowdin API queries to work - you will need `REACT_APP_CROWDIN_APIKEY` & `REACT_APP_CROWDIN_PROJECTID` env variables set in your root `.env.development.local` file_

### Adding translations

A hook expose the function you need to translate content.

```js
import { useTranslation } from 'contexts/Localization'

...
const { t } =  useTranslation()
...

t(id, 'fallback', data)
```

- **id** is the crowdin id of the string you want to translate.
- **fallback** is a string fallback used if the id cannot be found.
- **data** dynamic variables

#### Dynamic variables Example

If a Crowdin translation like this `You have %num% left in your wallet` - would look something like:

```js
t(675, `You have ${cakeBalance} left in your wallet`, { num: cakeBalance })
```

## Issue reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; create a [reduced test
   case](http://css-tricks.com/reduced-test-cases/) and a live example.

4. **Add attachments** &mdash; add photos or videos

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Template:

```md
**Environment:**
Device and OS:
Browser:
Reproducibility rate:

**Steps to reproduce:** 1. 2. 3.

**Expected result:**
```

A good bug report shouldn't leave others needing to chase you up for more.
