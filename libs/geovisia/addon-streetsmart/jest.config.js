module.exports = {
  name: 'geovisia-addon-streetsmart',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/geovisia/addon-streetsmart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
