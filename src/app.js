import 'dotenv/config'
import Hapi from '@hapi/hapi'
import { pg } from 'pgr'

pg.types.setTypeParser(1114, strValue => {
  console.log(strValue);
  return `${strValue}0000`
})

let io
export const getIo = () => io
export const server = Hapi.server({ port: process.env.HAPI_PORT || 8080, host: process.env.HOST || '0.0.0.0' })

function createSchema () {

}

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  await server.start()
  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1)
})

init()
