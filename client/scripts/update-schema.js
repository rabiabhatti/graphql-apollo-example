const got = require('got')
const fs = require('fs')
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities')
const path = require('path')

const schemaPath = path.join(__dirname, '../schema')

const SERVER = 'http://localhost:8090/graphql'

// Save JSON of full schema introspection for Babel Relay Plugin to use
got.post(SERVER, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: introspectionQuery }),
}).then((res) => {
  const schemaJSON = JSON.parse(res.body)

  fs.writeFileSync(
    `${schemaPath}.json`,
    JSON.stringify(schemaJSON, null, 2)
  )

  // Save user readable type system shorthand of schema
  const graphQLSchema = buildClientSchema(schemaJSON.data)
  fs.writeFileSync(
    `${schemaPath}.graphql`,
    printSchema(graphQLSchema)
  )
})
