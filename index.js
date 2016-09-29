var pixiLib = {
  appendStage: require("./lib/appendStage.js"),
  audioControl: require("./lib/audioControl.js"),
  createAction: require("./lib/createAction.js"),
  createLoader: require("./lib/createLoader.js"),
  createRender: require("./lib/createRender.js"),
  distance: require("./lib/distance.js"),
  fixSpriteProperties: require("./lib/fixSpriteProperties.js"),
  getIm: require("./lib/getIm.js"),
  getMc: require("./lib/getMc.js"),
  getSp: require("./lib/getSp.js"),
  getTextures: require("./lib/getTextures.js"),
  loadResource: require("./lib/loadResource.js"),
  loadSprite: require("./lib/loadSprite.js"),
  makeIdentity: require("./lib/makeIdentity.js"),
  math: require("./lib/math.js"),
  setConfig: require("./lib/setConfig.js"),
  types: require("./lib/types.js"),
  utils: {
    addStyle: require("./lib/utils/addStyle.js"),
    basicLoading: require("./lib/utils/basicLoading.js"),
    matrixManager: require("./lib/utils/matrixManager.js"),
    mpLoading: require("./lib/utils/mpLoading.js"),
    repeat: require("./lib/utils/repeat.js"),
    resizeImageData: require("./lib/utils/resizeImageData.js"),
    shareGuide: require("./lib/utils/shareGuide.js"),
    unfoldArray: require("./lib/utils/unfoldArray.js"),
  },
  audio: {loadAudio: require("./lib/audio/loadAudio.js"),},
};
if (typeof window !== "undefined") {
  window.pixiLib = pixiLib;
}
if (typeof module !== "undefined") {
  module.exports = pixiLib;
}