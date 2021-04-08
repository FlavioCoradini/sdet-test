# SDET COVID-19 Coding Test (Javascript) 🦠

The app estimates the chance that at least one COVID-19 positive
individual will be present at a event of a given size. For example:

> At a concert in England with 2000 people in the audience, what is the
> probability that at least one of them currently has COVID-19?

The API exposes two endpoints:

- `GET /areas` - returns a list of areas where events can take place.
- `POST /compute` - given an area and event size, returns the probability
  of at least one person at the event having Coronavirus.

The user chooses an area from the list returned by the `GET /areas` API:

```bash
curl http://localhost:3000/areas
```

```json
{
  "items": [
    {
      "code": "E92000001",
      "name": "England"
    },
    {
      "code": "N92000002",
      "name": "Northern Ireland"
    },
    {
      "code": "S92000003",
      "name": "Scotland"
    },
    {
      "code": "W92000004",
      "name": "Wales"
    }
  ]
}
```

Then uses the `POST /compute` API to calculate the probability:

```bash
curl -X POST http://localhost:3000/compute --data '{"sample": 2000, "area_code": "E92000001"}'
```

```json
{
  "probability": 0.9999994281491117
}
```

Note: the probabilities it produces are "just for fun", don't take them too seriously!

## Overview 🔭

The app is written in Javascript using the Node/Express.

```
src/
  model.js       ← module to compute probabilities
  validation.js  ← module to validate incoming requests
  routes.js      ← module the aggregate the app routes
  app.js         ← module that configure the api

tests/
  unit/          ← unit tests
  integration/   ← integration tests

packages.json    ← Javascript dependencies
```

## Goals 🎯

As you will discover, the app is not ready for production quite yet! The goals of this exercise are to:

1. Talk through the code and explain what it does.
2. Run the application, and make a request with `curl`.
3. Write some tests to give us confidence the app is working (hint: edge cases!).
   Use your judgement to decide what types of test to focus on: unit and integration.
4. Provide an explanation about how we can extend for E2E coverage

## Running the app

Install the dependencies:

```bash
yarn install
```

Run the app:

```bash
yarn start
```

Make an API request using `curl`:

```bash
curl -X POST http://localhost:3000/compute --data '{"sample": 2000, "area_code": "E92000001"}'
```

## Running the tests

In Repl.it, you can run commands from the _Shell_ tab.

You can run all the tests with:

```bash
yarn test
```
