## Deploy

deploy project in surge. First we need to register and login in surge.

Globally install surge

```
npm install --global surge
```

TODO: surge create account
**create and deploy app in surge, we need to run this command**

```
surge
```

then they give us a link like `lively-pig.surge.sh`

We will build a github workflow look like this
![workflow](./workflow.png)

- If a job fail, then workflow create an issue automatically and send a slack notification message.
- If release create then send slack sms

### get surge token

```
surge token
```

### get surge email

```
surge whoami
```

## Release (semantic-release)

install:

```
npm install --save-dev semantic-release
```

add file in root directory called something like release.config.js.
add configuration to this file and see update from this command
create new file in workflow as `release.yml` and add configuration CI workflow then push to the master.

```
npx semantic-release
```

## validate commit message

we will use husky/commitizen

# We can send slack message after release a new version or failed an github action. we will add these feature later
