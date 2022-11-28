import { Controller } from 'egg';
import { v4 as uuidv4 } from 'uuid';

const path = require('path')
const fs = require('mz/fs')
const pump = require('mz-modules/pump')


export default class CommonController extends Controller {
  public async uploadPic() {
    const { ctx } = this;
    let response = {
      success: true,
      data: {
        path: ''
      }
    }
    const file = await ctx.getFileStream();
    const filename = uuidv4() + '__' +file.filename
    const targetPath = path.join('app/public/upload', filename);
    const target = fs.createWriteStream(targetPath)
    try {
      await pump(file, target)
      response.data.path = targetPath
    } catch (error) {
      console.log(error)
    } finally {
      await ctx.cleanupRequestFiles();
    }
    ctx.body = response
  }
}
