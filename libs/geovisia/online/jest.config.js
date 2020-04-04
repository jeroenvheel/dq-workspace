module.exports = {
  name: 'geovisia-online',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/geovisia/online',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
