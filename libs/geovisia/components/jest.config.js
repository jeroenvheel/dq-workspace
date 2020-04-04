module.exports = {
  name: 'geovisia-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/geovisia/components',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
