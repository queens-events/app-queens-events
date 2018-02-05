import axios from 'axios'
import React, { Component } from 'react'
import eventFormatter from './src/helpers/event-formatter'

const DotenvPlugin = require('webpack-dotenv-plugin')

const DotenvPluginConfig = new DotenvPlugin({
  sample: './.env.sample',
  path: './.env',
})

export default {
  getSiteData: () => ({
    title: 'QueensEvents',
  }),
  getRoutes: async () => {
    const { data } = await axios.get('https://stopmissingout.ca/api/v1/events')
    const events = data.payload
    return [
      {
        path: '/',
        component: 'src/components/main/BodyContainer',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/profile',
        component: 'src/components/user/ProfilePage',
      },
      {
        path: '/events',
        component: 'src/components/event/main/EventMain',
        getData: () => ({
          events,
        }),
        children: events.map(event => ({
          path: `/${event.id}`,
          component: 'src/components/event/eventDetail/EventDetailContainer',
          getData: () => ({
            event: eventFormatter.dateFormat(event),
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
  webpack: config => {
    config.plugins.push(DotenvPluginConfig)
    // config.module.rules = [
    //   {
    //     oneOf: [
    //       {
    //         test: /\.json$/,
    //         use: [{ loader: 'json-loader' }],
    //       },
    //       defaultLoaders.jsLoader,
    //       defaultLoaders.cssLoader,
    //       defaultLoaders.fileLoader,
    //     ],
    //   },
    // ]
    return config
  },
}
