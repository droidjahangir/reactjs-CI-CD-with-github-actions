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
