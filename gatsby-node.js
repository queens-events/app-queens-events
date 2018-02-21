const _ = require(`lodash`);
const path = require(`path`);
// const slug = require(`slug`);
const slash = require(`slash`);
const axios = require(`axios`);

exports.modifyBabelrc = ({ babelrc }) => (
  Object.assign({}, babelrc, {
    plugins: babelrc.plugins.concat([
      'transform-decorators-legacy', 
      'transform-regenerator',
    ]),
  })
)

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      resolve(
        axios.get('https://stopmissingout.ca/api/v1/events').then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const eventDetailTemplate = path.resolve(`src/templates/event-detail.js`)

          _.each(result.data.payload, event => {
              createPage({
                path: `/events/${event.id}`,
                component: slash(eventDetailTemplate),
                context: {
                    id: event.id,
                    imageUrl: event.imageUrl,
                    name: event.name,
                    description: event.description,
                    startTime: event.startTime,
                    endTime: event.endTime,
                    venue: event.venueString
                },
              })
          })
  
          return null
        })
      )
    })
  }