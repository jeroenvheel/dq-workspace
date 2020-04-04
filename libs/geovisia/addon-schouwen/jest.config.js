module.exports = {
  name: 'geovisia-addon-schouwen',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/geovisia/addon-schouwen',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
